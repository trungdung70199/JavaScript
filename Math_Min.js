// Using Math.min() on an array
// Can use Math.min.apply to find the lowest number in an array

const number = [20, 30, 2, 10, 50];

function MyArrayMin(arr) {
    return Math.min.apply(null, arr)
}
console.log(MyArrayMin(number));