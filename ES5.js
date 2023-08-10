// Property Access on Strings
// The chartAt() method returns the character at a 
// specified index (position) in a string
// str.chartAt() = str[0]

var str = "Hello World";
console.log(str.charAt(0));

// Strings Over Multiple lines
console.log("Hello \ Dug!")

// Array reduce()

var numbers = [45, 4, 9, 10, 18];
var sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) { //index, array co the co or ko
    return total + value;
}

console.log("The sum is: " + sum);