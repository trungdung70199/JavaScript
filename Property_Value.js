//Changing a Property Value
// Syntax: Object.defineProperty(object, property, {value: value})

const person = {
    firstName: "Dung",
    lastName: "Nguyen",
    language: "VN"
};

Object.defineProperty(person, "language", { value: "VN" })
console.log(person.language);