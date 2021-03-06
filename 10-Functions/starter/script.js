'use strict';

/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5    
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
*/

/*
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
}

checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc( Math.random() * 10000000 );
}

newPassport(jonas);

checkIn(flight, jonas);
*/

/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('HI');
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);


greetArr('Hola')('Jade');
*/

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/*
const runOnce = function() {
    console.log('This will never run again');
}
runOnce();

// IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();

// CLOSURE DEF
// A function has access to the variable environment (VE) of the execution context in which it was created
// Closure: VE attached to the function, exactly as it was at the time and place the function was created

// Several definitions with varying degrees of formality:

// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;

// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preservers the scope chain throughout time.

// A closure makes sure that a funcion doesn't lose connection to variables that existed at the function's birth place

// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

// Note: We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

console.dir(booker);
*/

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000; // to show that closure has priority over this
boardPassengers(180, 3);

