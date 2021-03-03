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


// ==================================================
console.log("Coding challenge 3: ");

let dolphins_score_1, dolphins_score_2, dolphins_score_3;
let koalas_score_1, koalas_score_2, koalas_score_3;

let dolphins_average_score;
let koalas_average_score;

// with test data 1
console.log(`With test data 1`);
dolphins_score_1 = 96;
dolphins_score_2 = 108;
dolphins_score_3 = 89;
koalas_score_1 = 88;
koalas_score_2 = 91;
koalas_score_3 = 110;

dolphins_average_score = (dolphins_score_1 + dolphins_score_2+ dolphins_score_3) / 3;
koalas_average_score = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

console.log(`Dolphin average score: ${dolphins_average_score}, Koalas average score: ${koalas_average_score}`);
if ((dolphins_average_score > koalas_average_score) && (dolphins_average_score >= 100) ) {
    console.log("Dophins win.");
} else if ((koalas_average_score > dolphins_average_score) && (koalas_average_score >= 100)) {
    console.log("Koalas win.");
} else if ( (dolphins_average_score >= 100) && (koalas_average_score >= 100) ) {
    console.log("It was a draw.");
} else {
    console.log("No team wins.");
}

// with test data 2
console.log(`With test data 2`);
dolphins_score_1 = 97;
dolphins_score_2 = 112;
dolphins_score_3 = 101;
koalas_score_1 = 109;
koalas_score_2 = 95;
koalas_score_3 = 123;

dolphins_average_score = (dolphins_score_1 + dolphins_score_2+ dolphins_score_3) / 3;
koalas_average_score = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

console.log(`Dolphin average score: ${dolphins_average_score}, Koalas average score: ${koalas_average_score}`);
if ((dolphins_average_score > koalas_average_score) && (dolphins_average_score >= 100) ) {
    console.log("Dophins win.");
} else if ((koalas_average_score > dolphins_average_score) && (koalas_average_score >= 100)) {
    console.log("Koalas win.");
} else if ( (dolphins_average_score >= 100) && (koalas_average_score >= 100) ) {
    console.log("It was a draw.");
} else {
    console.log("No team wins.");
}

// with test data 3
console.log(`With test data 3`);
dolphins_score_1 = 97;
dolphins_score_2 = 112;
dolphins_score_3 = 101;
koalas_score_1 = 109;
koalas_score_2 = 95;
koalas_score_3 = 106;

dolphins_average_score = (dolphins_score_1 + dolphins_score_2+ dolphins_score_3) / 3;
koalas_average_score = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

console.log(`Dolphin average score: ${dolphins_average_score}, Koalas average score: ${koalas_average_score}`);
if ((dolphins_average_score > koalas_average_score) && (dolphins_average_score >= 100) ) {
    console.log("Dophins win.");
} else if ((koalas_average_score > dolphins_average_score) && (koalas_average_score >= 100)) {
    console.log("Koalas win.");
} else if ( (dolphins_average_score >= 100) && (koalas_average_score >= 100) ) {
    console.log("It was a draw.");
} else {
    console.log("No team wins.");
}


