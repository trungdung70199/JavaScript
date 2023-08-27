const initialAmount = 1000000; //（100万円）
const targetAmount = 2000000; //（200万円）
const annualInterestRate = 0.01; //（1%）

let years = 0;
let currentAmount = initialAmount;

while (currentAmount < targetAmount) {
    currentAmount *= (1 + annualInterestRate);
    years++;
}

console.log(`So nam can: ${years}years`);