// Object Types 

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    // this.nationality = "VN";
    // Change Name()
    this.changeName = function(name) {
        this.firstName = name;
    }
}
//Create two Person objects
const me = new Person("Dung", "Nguyen", 24, "Gray");
me.nationality = "VN"
const GF = new Person("Kitty", "Ous", 25, "Black");
GF.changeName("Puri");
console.log("I am " + me.age + ". My GF name is " + GF.firstName);
console.log("I am from " + me.nationality);