// Function Rest Parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += args;
    return sum;
}

let x = sum(4, 9, 16, 25, 40, 100, 200, 150);

console.log(x);