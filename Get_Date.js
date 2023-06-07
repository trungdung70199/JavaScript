// Get Date Methods: use methods
// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)

// getFullYear() Method
console.log("Year is: ")
const y = new Date("2020-06-07");
year = y.getFullYear();
console.log(year);
console.log("----------");

//getMonth() Method: returns the month of a date as a number
console.log("Month is: ");
const m = new Date("2023-06-07");
month = m.getMonth() + 1;
console.log(month);