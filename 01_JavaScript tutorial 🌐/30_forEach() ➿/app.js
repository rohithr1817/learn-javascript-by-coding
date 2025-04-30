// Your JavaScript code here

//  forEach() = The forEach() method is used to iterate over the elements of an array
//              and apply a specified function (callback) to each element.

// Syntax:
//         array.forEach(callback(currentValue, index, array))

// Parameters:
// - callback: A function that is executed for each element in the array.
//   It takes three arguments:
//   1. currentValue: The current element being processed in the array.
//   2. index (optional): The index of the current element being processed.
//   3. array (optional): The array that forEach() is being called upon.

// Example Usage:
const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number to the console
numbers.forEach(function(number) {
    console.log(number); // This will print each number in the array
});

// You can also use arrow functions for a more concise syntax
numbers.forEach((number) => {
    console.log(number); // This will also print each number in the array
});

// Key Points:
// - forEach() does not return a new array; it simply executes the callback for each element.
// - It is useful for performing side effects, such as logging or modifying external variables.
// - It cannot be stopped or broken out of; if you need to exit early, consider using a regular for loop or other array methods like some() or every().

//-----------------------------------------------------------------------------------------------------------------------

let num = [1, 2, 3, 4, 5]; // Example array of numbers
let sum = 0; // Initialize sum outside the loop

num.forEach((number) => {
    sum += number; // Add the current number to the sum
    console.log(sum); // Print the cumulative sum
});

//--------------------------------------------------------------------------------------------------------------------------

let a = [1, 2, 3, 4, 5]; // Example array of numbers

a.forEach((numb, index, array) => {
    console.log(`Index: ${index}, Value: ${numb}, array: ${array}`); // Print the index and value of each element
    squ = numb * numb; // Square the current number
    console.log(`Square of ${numb} is ${squ}`); // Print the square of the current number
    console.log(`Mul is ${numb * 3}`);
    console.log(`Power is ${Math.pow(numb, 2)}`); // Print the cube of the current number
});

//--------------------------------------------------------------

let fruits = ["apple", "banana", "cherry"]; // Example array of fruits

fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase()); // Print each fruit in the array
    capitalize = fruit.charAt(0).toUpperCase() + fruit.slice(1); // Capitalize the first letter of each fruit
    console.log(capitalize); // Print the capitalized fruit
});
