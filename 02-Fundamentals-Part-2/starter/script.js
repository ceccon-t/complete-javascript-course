'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // throws error (undeclared variable)
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; // throws error (reserved word for future)
const private = 534; // throws error (reserved word for future)
*/

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
