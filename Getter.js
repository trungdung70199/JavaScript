// JavaScript Getters

const person = {
    firstName: "Dung",
    lastName: "Nguyen",
    language: "vn",
    get lang() {
        return this.language.toUpperCase();
    }
};

console.log(person.lang);