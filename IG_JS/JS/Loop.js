// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};
// for in 
for (const key in person) {
    // if have key
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        const result = key + "=" + value;
        console.log(result);
    }
}

const drinks = ["Coffee", "Tea", "Milk tea"]
    // for-in loop
for (var index = 0; index < drinks.length; index++) {
    const drink = drinks[index];
    console.log(drink);
}

// for-of
console.log("----for-of-----");
for (const drink of drinks) {
    console.log(drink);
}