// Adding Properties and Methods to Objects

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "VN";
// add new methods to objects constructors
// Person.prototype.name = function() {
//return this.firstName + " " + this.lastName
//};
const me = new Person("Dung", "Nguyen", 24, "Gray");
console.log("My nationality is " + me.nationality);
//console.log("Me name is " + me.name());