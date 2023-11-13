var Person = {
    name: "John",
    age: 30,
    city: "NY",
}

console.log(Person)
// Object -> JSON
const jsonString = JSON.stringify(Person)
console.log(jsonString)

// JSON -> Object
Person = JSON.parse(jsonString)
console.log(Person)
