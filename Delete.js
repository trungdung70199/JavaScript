// Deleting Properties

const person = {
    firstName: "Dug",
    lastName: "Nguyen",
    age: 24,
    Height: 180,
    weight: 70
};

delete person.age;
// == delete.person["age"];
console.log(person.firstName + " is " + person.age + " year old.");

// Nested Object

const myObj = {
    name: "Dung",
    age: 24,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Porches"
    }
}
console.log("My car's type is:")
console.log(myObj.cars.car3);
// or == myObj.cars["car3"];
// or == myObj.["cars"]["car3"];