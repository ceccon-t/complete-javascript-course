/*
let  js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "John";
console.log(firstName);

let $function = "This is allowed";

let PI = 3.1415;

// let javascripIsFun = true;
// console.log(javascripIsFun);

// console.log(typeof true);
// console.log(typeof javascripIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascripIsFun = 'YES!';
// console.log(javascripIsFun);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programming";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2**3 means 2 to the power of 3 = 2*2*2

// String operators
firstName = 'Jonas';
lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

