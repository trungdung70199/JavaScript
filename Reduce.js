// Array reduce()

const number = [20, 10, 5, 30, 1];
let sum = number.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}
console.log("total's array is: ")
console.log(sum);