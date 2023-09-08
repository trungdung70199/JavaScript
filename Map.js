// JavaScript Map
// Create a map
const fruits = new Map([
    ["apple", 100],
    ["banana", 200],
    ["Orange", 300]
]);

console.log(fruits.get("apple"));

// Map.set()
const animals = new Map();
// Set Map values
animals.set("Dog", 200);
animals.set("Cat", 300);
animals.set("Chicken, 80");
console.log(animals.get("Cat"));
// The set() method can also be used to change existing Map values
animals.set("Chicken", 100);
console.log(animals.get("Chicken"));
console.log(animals.size);