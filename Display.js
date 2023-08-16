// JavaScript Display Objects

// Displaying Object Properties

const person = {
    name: "Dung",
    age: 24,
    city: "Hanoi"
};
console.log("Displaying obj properties:")
console.log(person.name + "," + person.age + "," + person.city);
console.log("Use the obj.values(person)")
console.log(Object.values(person));

// Displaying the Object in a loop

let text = "";
for (let x in person) {
    text += person[x] + " ";
};
console.log("Displaying the obj in a loop:")
console.log(text);

// Using JSON.stringify()
console.log("Using JSON");
console.log(JSON.stringify(person));