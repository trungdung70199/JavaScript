// The new Set() method
const letters = new Set(["a", "b", "c"]);
console.log(letters.size);

// Create a Set and add values
const lets = new Set();
/// If add equal element only the first will be saved
lets.add("a");
lets.add("b");
lets.add("c");
lets.add("c");
lets.add("d");
lets.add("d");
console.log(lets.size);

// The values method
// returns a new iterator containing all the values in a set
const log = new Set(["a", "b", "c", "d"]);
console.log(log.values());