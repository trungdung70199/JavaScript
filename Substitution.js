// Variable Substitutuions
// Template literals allow variable in strings

let firstName = "Trung";
let lastName = "Dung";

let text = `Welcome ${firstName} ${lastName}!`;
console.log(text);

// Expression Substitution
// Template literals allow expressions in strings
let price = 200;
let VAT = 0.1;
let total = `Total: ${(price * (1 + VAT)).toFixed(1)}`;
console.log(total);