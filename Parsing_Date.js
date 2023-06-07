// Date input - Parsing Dates
// returns the number  of milliseconds between the date and jan 1, 1970

console.log("Milliseconds is: ");
let msec = Date.parse("Jun 07, 2023");
console.log(msec);
// use the number of milliseconds to convert it to a date object
console.log("Date from jan 1, 1970 is: ")
const day = new Date(msec);
console.log(day);