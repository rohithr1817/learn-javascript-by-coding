// Your JavaScript code here

// callback = a function that is passed as an argument to another function.

//      used to handle asynchronous operations:
//          1. Reading a file
//          2. Network requests
//          3. Interacting with databases

//         "Hey, when you're done, call this next."


// function hello(){
//     setTimeout(function(){
//         console.log("hello world");
//     }, 2000);
// }

// function bye(){
//     console.log("bye");
// }

        // hello();
        // bye();

//----------------------------------------------------------------------------------------

// This code demonstrates the difference between calling a function directly 
// and using a callback function in JavaScript.

// Original Code
function hello() {
    console.log("hello world"); 
}

function bye() {
    console.log("bye");
}

// hello(bye()); 
// hello(bye); 

// In this line, bye() is called immediately when hello is invoked.
// The output will be:
// 1. "bye" (from the bye function)
// 2. "hello world" (from the hello function)
// hello(bye()); 
// Explanation:
// - hello(bye()) calls bye() first, which executes and prints "bye".
// - After bye() finishes, hello() is called, which prints "hello world".


// Modified Code with Callback
function hello(callback) {
    console.log("hello world"); 
    callback(); // Here, we call the callback function passed as an argument.
}

function bye() {
    console.log("bye");
}

// In this line, bye() is still called immediately when hello is invoked.
// The output will be the same as the original code:
// 1. "bye" (from the bye function)
// 2. "hello world" (from the hello function)
   // hello(bye()); 
// Explanation:
// - hello(bye()) calls bye() first, which executes and prints "bye".
// - After bye() finishes, hello() is called, which prints "hello world".

// To properly use the callback mechanism, we should pass the function reference 
// without parentheses, like this:
// hello(bye); // This will output:
// 1. "hello world" (from the hello function)
// 2. "bye" (from the bye function, called as a callback).
// Explanation:
// - hello(bye) passes the reference of the bye function to hello.
// - Inside hello, "hello world" is printed first.
// - Then, callback() is called, which executes the bye function, printing "bye".

// Summary:
// - In the original code, bye() is executed immediately, leading to "bye" being printed first.
// - In the modified code, the intention is to use a callback, but bye() is still called immediately.
// - To correctly use a callback, pass the function reference (bye) without parentheses, allowing hello to call it later.
// - This way, "hello world" is printed first, followed by "bye".

// Summary of Execution Flow
// -When you call hello(bye), the following sequence occurs:
// -The hello function is invoked with bye as the argument.
// -Inside hello, "hello world" is printed first.
// -The callback() line calls the bye function, which then prints "bye".


// Key Takeaway:
//  1) Passing Functions: In JavaScript, you can pass functions as arguments to other functions. This is a powerful feature that allows for flexible and reusable code.
//  2) Callback Mechanism: The function passed as an argument (in this case, bye) can be executed at a later time within the function that received it (in this case, hello), allowing for asynchronous behavior or custom execution order.


//--------------------------------------------------------------------------------------------------------------------

// Example 3:

function sum(callback, x, y){
    console.log("sum function called");
    let result = x + y;
    callback(result); // Call the callback function with the result
}

function displayResult(result){
    console.log("The result is: " + result);
}
function displayPage(result){
    document.querySelector("#myH1").textContent = result;
}

sum(displayPage, 5, 10); // Pass displayResult as a callback function
                    // Output: "sum function called" followed by "The result is: 15"
// Explanation:
// - The sum function takes a callback and two numbers as arguments.
// - It calculates the sum of x and y, then calls the callback function (displayResult) with the result.
// - The displayResult function prints the result to the console.
// - This demonstrates how callbacks can be used to handle results of asynchronous operations or computations.
// - The output will be "sum function called" followed by "The result is: 15".


/*
Simple Explanation of the Code

1. What the Code Does:
        "I have a function called sum that adds two numbers together and then shows the result using another function."

2. How It Works:
    "When I call sum(displayResult, 5, 10), I'm telling it to add 5 and 10."
    "The sum function calculates the sum, which is 15, and then it calls the displayResult function to show that result."
3. Breaking It Down:

    Step 1: "The sum function starts by logging that it has been called."
    Step 2: "It adds the two numbers: 5 + 10 = 15."
    Step 3: "Then, it calls the displayResult function and gives it the result (15)."
    Step 4: "The displayResult function then prints 'The result is: 15' to the console."

4. Why Use Callbacks?:

    "Using a callback like displayResult allows us to separate the calculation from how we show the result."
    "This makes our code cleaner and more flexible. If we wanted to display the result differently, we could just change the callback function without changing the sum function."

=> Where It’s Useful
    Real-World Applications:
    =>"This pattern is useful in many situations, like when you want to perform an action after a task is completed, such as fetching data from a server and then displaying it."
    =>"It helps in writing asynchronous code, where you might not know when a task will finish, but you want to do something once it does."
    Summary
    "In summary, the sum function adds two numbers and uses a callback to display the result, making the code modular and easy to change. This approach is widely used in JavaScript for handling tasks that take time, like network requests."

**/


// This code demonstrates a simple use of a callback function in JavaScript.

// 1. What the Code Does:
// - The `sum` function adds two numbers together and shows the result using another function.

// 2. How It Works:
// - When I call `sum(displayResult, 5, 10)`, I'm telling it to add 5 and 10.
// - The `sum` function calculates the sum, which is 15, and then calls the `displayResult` function to show that result.

// 3. Breaking It Down:
//    Step 1: The `sum` function starts by logging that it has been called.
//    Step 2: It adds the two numbers: 5 + 10 = 15.
//    Step 3: Then, it calls the `displayResult` function and gives it the result (15).
//    Step 4: The `displayResult` function then prints 'The result is: 15' to the console.

// 4. Why Use Callbacks?
// - Using a callback like `displayResult` allows us to separate the calculation from how we show the result.
// - This makes our code cleaner and more flexible. If we wanted to display the result differently, 
//   we could just change the callback function without changing the `sum` function.

// Where It’s Useful:
// - This pattern is useful in many situations, like when you want to perform an action after a task is completed, 
//   such as fetching data from a server and then displaying it.
// - It helps in writing asynchronous code, where you might not know when a task will finish, 
//   but you want to do something once it does.

// Summary:
// - In summary, the `sum` function adds two numbers and uses a callback to display the result, 
//   making the code modular and easy to change. 
// - This approach is widely used in JavaScript for handling tasks that take time, like network requests.

