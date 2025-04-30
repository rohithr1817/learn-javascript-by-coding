// Your JavaScript code here

// .map() = The .map() method accepts a callback function and applies that function
//          to each element of an array, then returns a new array.



//   Purpose: The .map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//   Syntax :
//         const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);

/*
Parameters:
    callback: A function that is called for every element of the array. It takes up to three arguments:
    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being processed.
    array (optional): The array map was called upon.
    thisArg (optional): Value to use as this when executing callback
*/

const numbers = [1, 2, 3, 4, 5]; // Original array
const doubled = numbers.map((number) => number * 2); // Using .map() to double each number

console.log(doubled); // Output: [2, 4, 6, 8, 10]

//---------------------------------------------------------------------------

const power = numbers.map((element) => {
    return Math.pow(element, 2); // Squaring each number
});

console.log(power); // Output: [1, 4, 9, 16, 25]

//----------------------------------------------------------------------------

let cricketers = ["Sachin", "Dhoni", "Kohli", "Rohit", "Rahul"];
/*
let cricketersLength = cricketers.map((element) => {
    return element.length + " " + element.toUpperCase(); // Getting the length of each name
});
console.log(cricketersLength); // Output: [6, 5, 5, 5, 5]
*/

//  or 
let cricketersLength = cricketers.map(UpperCase); // Using a named function
let cricketersLength1 = cricketers.map(lowerCase); // Using a named function

console.log(cricketersLength); // Output: [6, 5, 5, 5, 5]
console.log(cricketersLength1); // Output: [6, 5, 5, 5, 5]

function UpperCase(element) {
    return element.length + " " + element.toUpperCase(); // Getting the length of each name
};
function lowerCase(element) {
    return element.length + " " + element.toLowerCase(); // Getting the length of each name
};

//----------------------------------------------------------------------------------


const dates = ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04", "2023-10-05"];

const formattedDates = dates.map(formatDate); // Using .map() to format each date
console.log(formattedDates); // Output: ["01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023"]

function formatDate(element){
    const parts = element.split("-"); // Split the date string into parts
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // Format as MM/DD/YYYY
}