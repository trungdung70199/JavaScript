// Array every()
// every: find all number over than...
const number = [10, 5, 20, 30, 45];
let Over10 = number.every(myFunction);

function myFunction(value) {
    return value > 10;
}
console.log(Over10);