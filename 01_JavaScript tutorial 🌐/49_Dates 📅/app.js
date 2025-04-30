// Your JavaScript code here

// Date Objects = object that conatin values that represent a dates and times
//                These data objects can be changed and formatted


  //   Date(year, month, day, hours, minutes, seconds, milliseconds)
const date = new Date(); // creates a new date object with the current date and time
console.log(date); // logs the current date and time

console.log(date.toString()); // logs the current date and time as a string
console.log(date.getFullYear()); // logs the year of the date object (2025)
console.log(date.getMonth()); // logs the month of the date object (0-11, where 0 is January and 11 is December)
console.log(date.getDate()); // logs the day of the month of the date object (1-31)
console.log(date.getHours()); // logs the hour of the date object (0-23)
console.log(date.getMinutes()); // logs the minutes of the date object (0-59)
console.log(date.getSeconds()); // logs the seconds of the date object (0-59)
console.log(date.getMilliseconds()); // logs the milliseconds of the date object (0-999)
console.log(date.getTime()); // logs the timestamp of the date object (milliseconds since January 1, 1970)
console.log(date.getDay()); // logs the day of the week of the date object (0-6, where 0 is Sunday and 6 is Saturday)
console.log(date.getUTCDate()); // logs the UTC date of the date object (1-31)
console.log(date.getUTCFullYear()); // logs the UTC year of the date object (2025)


const date1 = new Date("2025-04-18"); // creates a new date object with the specified date (January 1, 2023)
console.log(date1); // logs the specified date


const date2 = new Date("2025-04-18T10:30:00"); // creates a new date object with the specified date and time (January 1, 2023, 10:30 AM)
const date3= new Date(170000000); // creates a new date object with the specified timestamp (170000000 milliseconds since January 1, 1970)
console.log(date3.getFullYear()); // logs the year of the date object (1970) 
console.log(date3); // logs the date object with the specified timestamp
console.log(date2); // logs the specified date and time

//----------------------------------------------------------------------------------

const date4 = new Date("2024-01-01"); 
const date5 = new Date("2025-01-01"); 

if(date5 > date4) { // compares two date objects
    console.log("Happy New Year"); // logs if date4 is greater than date5
}

//--------------------------------------------------------------------------

const setdate = new Date();

setdate.setFullYear(2025); // sets the year of the date object to 2025
setdate.setMonth(11); // sets the month of the date object to December (0-11)
setdate.setDate(25); // sets the day of the month of the date object to 25 (1-31)
setdate.setHours(10); // sets the hour of the date object to 10 (0-23)
setdate.setMinutes(30); // sets the minutes of the date object to 30 (0-59)
setdate.setSeconds(0); // sets the seconds of the date object to 0 (0-59)
setdate.setMilliseconds(0); // sets the milliseconds of the date object to 0 (0-999)
console.log(setdate); // logs the date object with the specified values