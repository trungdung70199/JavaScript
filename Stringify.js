// Stringify Functions

const person = {
    name: "Dung",
    age: function() { return 24; }
};

console.log(JSON.stringify(person));

// Can be fixed 

const ps = {
    name: "Dug",
    age: function() { return 24; }
};
ps.age = ps.age.toString();
console.log(JSON.stringify(ps));

// Stringify Arrays

const arr = ["Dung", "Nguyen", "Kitty", "Pur"];
console.log(JSON.stringify(arr));