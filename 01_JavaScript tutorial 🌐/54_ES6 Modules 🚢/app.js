// Your JavaScript code here

// ES6 Module = An external file that contains reusable code 
//              that can be imported into other JavaScript files. 
//              Write resusable code for many different apps. 
//              Can contain variables, classes, functions... and more 
//              Introduced as part of ECMAScript 2015 update


// main.js

import { add, subtract } from './mathUtil.js'; // Importing functions from the module

const sum = add(5, 3); // Using the add function
const difference = subtract(5, 3); // Using the subtract function

console.log(`Sum: ${sum}`); // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 2