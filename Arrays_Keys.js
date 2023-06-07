// JavaScript array keys()
// Returns an array iterator object with the keys of an array

const animals = ["Bird", "Cat", "Chicken", "Cow", "Dog"];
const keys = animals.keys();
let txt = "";
for (let x of keys) {
    txt += x;
}
console.log(txt);