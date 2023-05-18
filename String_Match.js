// JavaScript String match()
// Returns an array containing the results of matching a string
// against a string (or a regular expression)

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));

console.log(text.match(/ain/g));

console.log(text.match(/ain/gi));