// Sum and Average
// Sum
const data = [88, 76, 80, 69, 90];
const sum = data.reduce((total, currentValue) => total + currentValue, 0);
// Average
const average = sum / data.length;

console.log("sum:", sum);
console.log("average:", average);