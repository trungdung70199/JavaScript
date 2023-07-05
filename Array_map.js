// JavaScript Array map()
// Create a new array by performing a function

const number1 = [30, 20, 1, 4, 100];
const number2 = number1.map(myFunction);

function myFunction(value) {
    return value * 2;
}

console.log(number2);
