// For in over arrays
// for in can also loop over the properties of an array
const numbers = [40, 20, 50, 35, 90, 100];
let txt = " ";
for (let x in numbers) {
    txt += numbers[x] + " ";
}
console.log(txt);