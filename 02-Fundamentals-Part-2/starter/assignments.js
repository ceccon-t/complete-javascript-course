
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

console.log("=========================");
