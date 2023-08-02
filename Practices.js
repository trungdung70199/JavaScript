// Best Practices

// Avoid Global Variables

// Declarations on top

// Don't use new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()

let fullName, firstName, lastName, price, discount, fullPrice;

firstName = "Dung";
lastName = "Nguyen";
fullName = firstName + " " + lastName;
console.log(fullName);

price = 20;
discount = 0.10;
fullPrice = price - discount;
console.log(fullPrice);

// Beware of Automatic type conversion

let x = "hello";
x = 10;
console.log(x);

// Mathematical
let a = "Hello";
let b = "Dolly";
let c = a - b;
console.log(c);

// Use parameter Default

function Function(x, y) {
    if (y === undefined) {
        y = 10;
    }
    return x * y;
}
console.log(Function(4));

// Switches with Default

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "unknown";
}
console.log("Today is " + day);