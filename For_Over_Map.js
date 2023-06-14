// Iterating Over a Map
// Use for...of loop to iterate over the elements of a Map

const fruits = new Map([
    ["apples", 100],
    ["bananas", 200],
    ["Melon", 300],
]);
let text = " ";
for (const x of fruits) {
    text += x + " ";
}
console.log(text);