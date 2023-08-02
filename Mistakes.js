// Misunderstanding Floats

let e = 0.1;
let f = 0.2;
let g = e + f;
console.log(g);

// To solve
let h = (e * 10 + f * 10) / 10;
console.log(h);

// Breaking Return Statement

myFunction(100);

function myFunction(a) {
    let power = 10
    return a * power
}

console.log(myFunction);