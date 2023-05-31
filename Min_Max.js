// Min Max Methods
// Find Max
const number = [10, 1, 20, 5, 90];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
}
console.log(myArrayMax(number));

// Find Min

function myArrayMin(arr) {
    let i = arr.length;
    let min = Infinity;
    while (i--) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
}
console.log(myArrayMin(number));