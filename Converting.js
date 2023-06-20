// Type Conversion
// Converting Strings to Numbers
console.log("Chuyen kieu du lieu tu String sang Number")
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number("98 00"));

// Number Methods
// Number()
// parseFloat()
// parseInt()

// Unary + Operator
// Can be used to convert a variable to a number
console.log("Chuyen doi mot bien thanh mot so")
let y = "10";
let x = +y;
console.log(typeof y + " " + typeof x);

// If the variable cannot converted it wil still become a number (NaN)
console.log("Chuyen doi bien thanh gia tri thuoc kieu number");
let a = "Dug";
let b = +a;
console.log(typeof a + " " + typeof b);

// Converting Numbers to Strings
// The global String() can convert numbers to strings

// Converting Dates to Numbers
// The global Number() can be used to convert dates to numbers
console.log("Su dung Number(): ")
d = new Date();
console.log(Number(d)); // Ket qua la so mili giay tinh tu 1970/1/
// The date method getTime() does the same
console.log("Su dung getTime: ")
day = new Date();
console.log(day.getTime());