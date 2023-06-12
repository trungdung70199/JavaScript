// The for in loop
const person = { fname: "Dung", lname: "Nguyen", age: 24 };
let txt = "";
for (let a in person) {
    txt += person[a] + "  ";
}
console.log(txt);

/// Looping over String
let language = "English";
let text = "";
for (let x of language) {
    text += x + " ";
}
console.log(text);