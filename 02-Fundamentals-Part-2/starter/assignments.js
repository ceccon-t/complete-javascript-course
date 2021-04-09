
// Coding challenge 1
console.log("=========================");
console.log('Coding challenge 1');

const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    const highestScore = Math.max(avgDolphins, avgKoalas);
    const lowestScore = Math.min(avgDolphins, avgKoalas);

    if (highestScore >= 2 * lowestScore) {
        const winner = avgDolphins > avgKoalas ? 'Dolphins' : 'Koalas';
        console.log(`${winner} wins (${highestScore} vs. ${lowestScore})`);
    } else {
        console.log('No one wins');
    }
}

let dolphinsScore1, dolphinsScore2, dolphinsScore3, dolphinsAverage;
let koalasScore1, koalasScore2, koalasScore3, koalasAverage;

console.log('With test data 1');
dolphinsScore1 = 44;
dolphinsScore2 = 23;
dolphinsScore3 = 71;
koalasScore1 = 65;
koalasScore2 = 54;
koalasScore3 = 49;

dolphinsAverage = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(dolphinsAverage, koalasAverage);

console.log('With test data 2');
dolphinsScore1 = 85;
dolphinsScore2 = 54;
dolphinsScore3 =41;
koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

dolphinsAverage = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(dolphinsAverage, koalasAverage);

console.log("=========================");

// ==========================================
// Coding challenge 2
console.log("=========================");
console.log('Coding challenge 2');

const calcTip = (bill) => {
    let percentage;

    if (bill >= 50 && bill <= 300) {
        percentage = 0.15;
    } else {
        percentage = 0.2;
    }

    return bill * percentage;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Just for fun
const tipsMap = bills.map(bill => calcTip(bill));

console.log("Tips: ", tips);
console.log("Tips with map: ", tipsMap);

// BONUS
const total = [bills[0]+calcTip(bills[0]), bills[1]+calcTip(bills[1]), bills[2]+calcTip(bills[2])];

const totalsMap = bills.map(bill => bill+calcTip(bill));

console.log("Totals: ", total);
console.log("Totals with map: ", totalsMap);

console.log("=========================");

// ==========================================
// Coding challenge 3
console.log("=========================");
console.log('Coding challenge 3');

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height:  1.69,

    calcBMI: function() {
        if (this.bmi === undefined) this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        if (this.bmi === undefined) this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

const highestBMI = mark.calcBMI() > john.calcBMI() ? mark : john;
const lowestBMI = john.calcBMI() < mark.calcBMI() ? john : mark;

console.log(`${highestBMI.fullName}'s BMI (${highestBMI.calcBMI()}) is higher than ${lowestBMI.fullName}'s (${lowestBMI.calcBMI()})!`);

console.log("=========================");

// ==========================================
// Coding challenge 4
console.log("=========================");
console.log('Coding challenge 4');

const billsCH4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsCH4 = [];
const totalsCH4 = [];

for (let i = 0; i < billsCH4.length; i++) {
    tipsCH4.push(calcTip(billsCH4[i]));
    totalsCH4.push(billsCH4[i] + tipsCH4[i]);
}

console.log("Bills: ", billsCH4);
console.log("Tips: ", tipsCH4);
console.log("Totals: ", totalsCH4);

const calcAverageArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
};
console.log(calcAverageArr(totalsCH4));
