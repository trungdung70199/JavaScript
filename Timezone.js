// The getTimezoneOffset() Method
// Return the difference (in minutes) between local time an UTC time
const days = new Date();
let diff = days.getTimezoneOffset();
console.log(diff);