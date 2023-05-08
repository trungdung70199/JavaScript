// Accessing Object Methods
const person = {
    firstName: "Dug",
    lastName: "Nguyen",
    id: 1111,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());