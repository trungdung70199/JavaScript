// Array some()

const number = [30, 5, 25, 40, 100];
let someOver20 = number.some(myFunction);

function myFunction(value) {
    return value > 20;
}
console.log(someOver20);