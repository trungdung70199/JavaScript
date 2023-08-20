// Constructor function for Person objects

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//Create a Person Object
const me = new Person("Dung", "Nguyen", 24, "Gray");
// Display age
console.log("My name is " + me.firstName + ".");
console.log("I am " + me.age + " year old.");