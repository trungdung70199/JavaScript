// Function blind()
// With the blind() method, an object can borrow a method from another object

const person = {
    firstName: "Dung",
    lastName: "Nguyen",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person)

const member = {
    firstName: "Kitty",
    lastName: "Pudding",
}
let fullName = person.fullName.blind(member);
console.log(member);