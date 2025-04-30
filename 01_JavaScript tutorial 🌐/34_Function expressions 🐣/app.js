// Your JavaScript code here

//  function declaration = defines a reusable block of code that performs a specific task.

    // Example:
        function greet(name) {
            return `Hello, ${name}!`;
        }

    // Example 2: Function to check if a number is even
        function isEven(num) {
            return num % 2 === 0;
        }



//  function expression = a way to define functions as values or variables.
// Function expressions can be anonymous or named, and they can be assigned to variables.

// Uses in:
//1. Callbacks in asychronous operations
//2. Event Listeners
//3. Closures (functions inside functions)
//4. Higher-order functions (functions that take other functions as arguments or return them as results)

    // Example:
        const greetExpression = function(name) {
            return `Hello, ${name}!`;
        };

    // Example 2: Named function expression to find the maximum of two numbers
        const max = function max(a, b) {
            return a > b ? a : b;
        };

// Using the function declarations and expressions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetExpression("Bob")); // Output: Hello, Bob!
console.log(isEven(5)); // Output: false
console.log(max(10, 20)); // Output: 20