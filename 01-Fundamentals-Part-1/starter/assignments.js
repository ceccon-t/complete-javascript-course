console.log("Practice assignment 1: ");
let country = "Brazil";

let continent = "South America";

let population = 209;

console.log("Assignment - Values and Variables: ", country, continent, population);


// ==================================================
console.log("Coding challenge 1: ");

let markWeight, markHeight, markBMI;
let johnWeight, johnHeight, johnBMI;

let markHigherBMI;

// with test data 1
markWeight = 78;
markHeight = 1.69;
markBMI = markWeight / (markHeight**2);

johnWeight = 92;
johnHeight = 1.95;
johnBMI = johnWeight / (johnHeight**2);

markHigherBMI = markBMI > johnBMI;

console.log("Results with test data 1 (mark BMI, john BMI, is mark BMI higher): ", markBMI, johnBMI, markHigherBMI);

// with test data 2
markWeight = 95;
markHeight = 1.88;
markBMI = markWeight / (markHeight**2);

johnWeight = 85;
johnHeight = 1.76;
johnBMI = johnWeight / (johnHeight**2);

markHigherBMI = markBMI > johnBMI;

console.log("Results with test data 2 (mark BMI, john BMI, is mark BMI higher): ", markBMI, johnBMI, markHigherBMI);


// ==================================================
console.log("Coding challenge 2: ");

// with test data 1
console.log(`With test data 1`);
markWeight = 78;
markHeight = 1.69;
markBMI = markWeight / (markHeight**2);

johnWeight = 92;
johnHeight = 1.95;
johnBMI = johnWeight / (johnHeight**2);

markHigherBMI = markBMI > johnBMI;

//console.log("Results with test data 1 (mark BMI, john BMI, is mark BMI higher): ", markBMI, johnBMI, markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher that John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// with test data 2
console.log(`With test data 2`);
markWeight = 95;
markHeight = 1.88;
markBMI = markWeight / (markHeight**2);

johnWeight = 85;
johnHeight = 1.76;
johnBMI = johnWeight / (johnHeight**2);

markHigherBMI = markBMI > johnBMI;

//console.log("Results with test data 2 (mark BMI, john BMI, is mark BMI higher): ", markBMI, johnBMI, markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher that John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


