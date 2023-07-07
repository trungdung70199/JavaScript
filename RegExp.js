// Regular Expressions: are often used with the two string methods

// Use String search() with a String
let text = "Hello world with JavaScript";
let n = text.search("with");
//let n = text.search(/with/i);
console.log(n);

/// Using test()

const pattern = /e/;
let a = pattern.test("The best things in life are free!");
console.log(a);