// Your JavaScript code here

// arrow functions  = a concise way to write function expressions 
//                    good for simple functions that you use only once 
//                    (parameters) => some code

// Syntax:
// const functionName = (parameters) => { /* function body */ };

// Example 1: Simple arrow function to calculate the square of a number
const square = (num) => num * num;

// Example 2: Arrow function to check if a number is even
const isEven = (num) => num % 2 === 0;

// Example 3: Arrow function with multiple parameters to find the maximum of two numbers
const max = (a, b) => (a > b ? a : b);

// Example 4: Arrow function with no parameters
const greet = () => "Hello, World!";

// Example 5: Arrow function with multiple statements
const hi = (name,sports) => { console.log(`Hi ${name}`)
                     console.log("How are you?") 
                     console.log(`lets play ${sports}`)
                    }



// Example 6: Arrow function with a single statement and implicit return
setTimeout(GoodNight, 2000)
function GoodNight() { console.log("Good Night") }

setTimeout(() =>  console.log("Good Night") , 2000);


// Example 7: Arrow function with default parameters
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((element)=> Math.pow(element,2)); // Using arrow function with map
const evenNumbers = numbers.filter((element) => element % 2 === 0); // Using arrow function with filter
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Using arrow function with reduce
console.log(squares); // Output: [1, 4, 9, 16, 25]
console.log(evenNumbers); // Output: [2, 4]
console.log(total); // Output: 15

// Using the arrow functions
console.log(square(5)); // Output: 25
console.log(isEven(4)); // Output: true
console.log(max(10, 20)); // Output: 20
console.log(greet()); // Output: Hello, World!
hi("John" , "Cricket"); // Output: Hi John