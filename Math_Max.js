// Using Math.max() on an Array
// Math.max.apply to find the highest number in an array
const number = [1, 4, 10, 40, 30];
// console.log(myArrayMax(number));  It's OK

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(number));