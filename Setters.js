// JavaScript Setter

const person = {
    firstName: "Dung",
    lastName: "Nguyen",
    language: "No",
    set lang(value) {
        this.language = value;
    }
};
person.lang = "VN";
console.log(person.language)