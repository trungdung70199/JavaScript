//  JavaScript array includes()
// Check a value in array? 
// Syntax: array.includes(search-item)

console.log("Check if the fruit array contains: ")

const fruits = ["Banana", "Orange", "Apple", "Melon", "WaterMelon"];
let includes = fruits.includes("Apple");
// Result is true if value in array
console.log(includes);
// And value false if value not in array
let no = fruits.includes("Mango");
console.log(no);