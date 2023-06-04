// Array Filter()
// Creates a new array with array element that pass a test
const numbers = [35, 20, 10, 2, 50];
const over20 = numbers.filter(myFunction);

function myFunction(value) {
    return value > 20;
}
console.log(over20);