// The new Set()

// Pass an Array to the new Set() constructor

const letters = new Set(["a", "b", "c"]);

console.log(letters.size);

// Create a Set and add literal values
const animal = new Set();
// Add values to the Set
animal.add("dog");
animal.add("cat");
animal.add("bird");
console.log("Animals values are: ");
console.log(animal.size);

// Create a Set and add variable
const a = "apple";
const b = "lemon";
const c = "melon";
const d = "watermelon";

// Create a Set
const fruits = new Set();

// Add variables to the Set
fruits.add(a);
fruits.add(b);
fruits.add(c);
fruits.add(d);

console.log("Fruits values are:");
console.log(fruits.size);