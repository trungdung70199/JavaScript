// Array.forEach()
const numbers = [20, 405, 30, 24, 15];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    txt += value + " ";
}
console.log(txt);