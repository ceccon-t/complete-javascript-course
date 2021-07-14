'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Button scrolling
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X,Y)', window.pageXOffset, window.pageYOffset);

  console.log('height,width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  //Old way:
  // Rough:
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // Smooth:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //New way:
  section1.scrollIntoView({ behavior: 'smooth' });

});


//////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation technique:
// 1. Add event listener to common parent element
// 2. Determine what element originiated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');
  
  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5) );
nav.addEventListener('mouseout', handleHover.bind(1) );

// // Sticky navigation
// // With scroll event (very inneficient)
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function(e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// // Sticky navigation
// // With Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

/*
//////////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

// Returns a 'live collection'
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Returns a 'live collection'
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML // <- previously discussed in the course
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove(); // <- newer way
  //message.parentElement.removeChild(message); // <- older way
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // only gets inline styles
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height); // gets end styles

message.style.height = Number.parseFloat( getComputedStyle(message).height , 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute
console.log(logo.getAttribute('src')); // relative

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes (always stored in 'dataset' property)
console.log(logo.dataset.versionNumber);

// Classes, always use classList
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use this, overwrites all other classes
logo.className = 'jonas';
*/

/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X,Y)', window.pageXOffset, window.pageYOffset);

  console.log('height,width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  //Old way:
  // Rough:
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // Smooth:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //New way:
  section1.scrollIntoView({ behavior: 'smooth' });

});

const h1 = document.querySelector('h1');

// Adding event handler
// Newer way:
// h1.addEventListener('mouseenter', function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// Old way:
// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// Removing event handler
const alertH1 = function(e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // First way
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// Second way
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/


/*
// Event propagation
const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
*/

/*
// DOM Traversal
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
*/

