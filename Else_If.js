// JavaScript if, else, and else if
const time = new Date().getHours();
console.log(time);
let greeting;
if (time < 11) {
    console.log(greeting = "Good morning");
} else if (time > 19) {
    console.log(greeting = "Good evening");
} else {
    console.log(greeting = "Good afternoon");
}