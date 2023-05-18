// will return a number outside the largest possible number

let myNumber = 2;
let text = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    text = text + myNumber;
}
console.log(text);

// Infinityy is a number: typeof Infinity returns number
console.log(typeof Infinity);