// Your JavaScript code here

// Closure = A function defined inside of another function.
//           The inner function has access to the variables
//           and scope of the outer function.
// 
//          Allow for private variables and state maintenance
//          Used frequently in JS frameworks: React, Vue, Angular

/*
What is a Closure?
    A closure is a feature in JavaScript where an inner function has access to the variables of its outer function, even after the outer function has finished executing. This allows the inner function to "remember" the environment in which it was created.

Why Use Closures?
    Closures are useful for:

        1) Creating private variables that cannot be accessed from outside the function.
        2) Maintaining state in asynchronous programming.
*/

function outer() {
    let message = "Hello"; // Private variable

    function inner() {
        console.log(message); // Accessing the outer function's variable
    }

    inner(); // Call the inner function
}

message = "Goodbye"; // This will not affect the inner function's access to the outer variable
outer(); // Outputs: "Hello"


/*
Explanation:
    Outer Function (outer): This function defines a variable message with the value "Hello". This variable is private to the outer function.

    Inner Function (inner): This function is defined inside outer and has access to the message variable. When inner is called, it logs the value of message to the console.

    Calling inner: The inner function is called within outer, so it outputs "Hello" when outer is executed.

    Global Variable Assignment: The line message = "Goodbye"; attempts to assign a new value to message in the global scope. However, this does not affect the message variable inside the outer function, which remains "Hello".

    Output: When you call outer(), it outputs "Hello" because the inner function retains access to the message variable defined in its outer function.

Summary:
    This example demonstrates how closures work in JavaScript, allowing the inner function to access variables from its outer function even after the outer function has finished executing.
*/

//-----------------------------------------------------------------------------------------

/*
function createCounter() {
    let count = 0; // This variable is private to the createCounter function

    return function() {
        count++; // Increment the count
        return count; // Return the current count
    };
}

const counter = createCounter(); // Create a new counter

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

*/
            //or

function createCounter() {
    let count = 0; // Private variable

    // Inner function to increment the count
    function increment() {
        count++; // Increment the count
        return count; // Return the current count
    }

    // Inner function to decrement the count
    function decrement() {
        count--; // Decrement the count
        return count; // Return the current count
    }

    // Inner function to get the current count
    function getCount() {
        return count; // Return the current count without modifying it
    }

    //Return an object containing the inner functions
    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
}

const counter = createCounter(); // Create a new counter

console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.decrement()); // Outputs: 1
console.log(counter.getCount());   // Outputs: 1

/*
Key Points:
    Inner Functions: increment, decrement, and getCount are inner functions because they are defined inside createCounter.
    Closure: Each of these inner functions has access to the count variable, which is defined in the outer function's scope. This is what makes them closures.
    Private State: The count variable is private and cannot be accessed directly from outside the createCounter function. It can only be modified or accessed through the inner functions.
Summary
    In this example, the inner functions are the ones that create the closure, allowing them to access and manipulate the private count variable.
*/


/*
Key Differences in Approach
Class vs. Function:

In the function-based approach, we returned an object containing the methods to provide access to the inner functions.
In the class-based approach, the methods are part of the class definition, and when you create an instance of the class, you can directly call those methods on the instance.
Instance Methods:

In the class implementation, the methods (increment, decrement, and getCount) are defined as part of the class and are accessible through the instance created with new Counter().
In the function implementation, the methods were inner functions that needed to be returned to be accessible outside the function.
Example of Returning an Object in a Class Context
If you want to mimic the behavior of returning an object while using a class, you could create a factory function that returns an instance of the class. Here’s how you could do that:
*/


/*
class Counter {
    constructor() {
        this.count = 0; // Private variable
    }

    increment() {
        this.count++;
        return this.count;
    }

    decrement() {
        this.count--;
        return this.count;
    }

    getCount() {
        return this.count;
    }
}

// Factory function to create a counter
function createCounter() {
    return new Counter(); // Return a new instance of the Counter class
}

// Create a new counter instance
const counter = createCounter();

console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.decrement()); // Outputs: 1
console.log(counter.getCount());   // Outputs: 1

*/


//-----------------------------------------------------------------------------------------
