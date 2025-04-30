// Your JavaScript code here

// .reduce() = reduce the elements of an array to a single value.

const numbers = [1, 2, 3, 4, 5]; // Original array
const sum = numbers.reduce((result, currentValue) => {
    return result + currentValue; // Add current value to the accumulator
}, 0); // Initial value of the result is 0

console.log(sum); // Output: 15

//------------------------------------------------------------------------------------

function getMax(result, currentValue) {
    return Math.max(result, currentValue); // Return the maximum of the two values
}

function getMin(result, currentValue) {
    return Math.min(result, currentValue); // Return the maximum of the two values
}

const max = numbers.reduce(getMax, 0); // Initial value of the result is 0
console.log(max); // Output: 5
const min = numbers.reduce(getMin); // Initial value of the result is 0
console.log(min); // Output: 1