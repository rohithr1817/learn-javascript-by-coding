                     //  async await >> promise chains >> callback hell


// Synchronous example using a function
// Synchronous code is executed in the order it appears, blocking the execution of subsequent code until the current task is completed
console.log("Start");

function greet() {
    console.log("Hello!");
}

greet(); // This will block the execution until it finishes

console.log("End");  

// Output:
// Start
// Hello!
// End


// Asynchronous example using setTimeout
// setTimeout is a non-blocking function that schedules a task to run after a specified delay

console.log("Start");

setTimeout(() => {
    console.log("Hello after 1 seconds!");
}, 1000); // This will run after 2 seconds

console.log("End");

// Output:
//         Start
//         End
//         Hello after 2 seconds!




  // Callback example
  // A callback is a function passed as an argument to another function, which is then invoked inside that function


// Example-01 of a callback function with a greeting

  // Function to greet a user
    function greet(name) {
        return `Hello, ${name}!`; // Return a greeting message
    }

    // Function that takes a name and a callback
    function welcomeUser (name, callback) {
        const message = callback(name); // Call the callback with the name
        console.log(message); // Log the greeting message
    }

    // Call welcomeUser  with a name and the greet function as a callback
    welcomeUser ("Alice", greet);


//Example-02 of a callback function with a calculator
// A calculator function that performs a specified operation on two numbers
 
// Function to sum two numbers
    function sum(a, b) {
        return a + b; // Return the sum of a and b
    }

    // Function that takes two numbers and a callback
    function calculator(a, b, sumCallback) {
        const result = sumCallback(a, b); // Call the callback with a and b
        console.log("The result is:", result); // Log the result
    }

    // Call the calculator function with numbers and the sum function as a callback
    calculator(1, 2, sum);

// Output: The result is: 3

    // Explanation:
    // 1) sum Function: This function takes two parameters, a and b, and returns their sum.
    // 2) calculator Function: This function takes two numbers (a and b) and a callback function (sumCallback). It calls the callback with a and b, stores the result, and logs it to the console.
    // 3) Calling calculator: When you call calculator(1, 2, sum), it passes the numbers 1 and 2 to the sum function via the callback, and the result is logged.
    // This structure allows you to use different callback functions with the calculator function if needed, making it flexible for various operations.


//----------Summary-------------------
// 1) sum (without parentheses) is a reference to the function, allowing calculator to call it later with the provided arguments.
// 2) sum() (with parentheses) calls the function immediately and passes the result to calculator, which is not what you want in this case.


// Example-03 of a callback function with a greeting
// A simple example of a callback function using setTimeout
function hello(){
    console.log("Hello from the callback function!"); // This will be called later
}
setTimeout(hello, 1000); // This will call the hello function after 2 seconds
// Output: Hello from the callback function! (after 2 seconds)




//---------------------------------------------------------------------------------------------------------------------------------------



//  Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
//                (Pyramid of Doom)
//                 This style of programming becomes difficult to understand & manage.

//                It can lead to deeply nested code, making it hard to read and maintain.
//                Error handling becomes complex, as each callback needs its own error handling logic.
//                Debugging becomes challenging, as the flow of execution is not linear.

//                It can lead to callback hell, where the code becomes difficult to read and maintain due to excessive nesting.
//                This can make it hard to follow the flow of the program and can lead to bugs if not managed properly.

//                To avoid callback hell, you can use techniques like modularizing your code, 
//        using named functions instead of anonymous functions, or using Promises and async/await for better readability and maintainability.
//                Here is an example of callback hell:



//                In this example, we have a function getData that simulates fetching data with a delay.
// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data fetched for ID:", dataId); // Simulate fetching data
//     }, 2000); // Simulate a delay of 2 seconds
// }

// getData(1); // Fetch data for ID 1
// getData(2); // Fetch data for ID 2
// getData(3); // Fetch data for ID 3


//but here we need not to start count 2 sec after getData(1) is done from that next start getData(2) and afyter that getData(3) is done
// so we can use callback hell to avoid this problem


function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("Data fetched for ID:", dataId); // Simulate fetching data
        if(getNextData){
            getNextData(); // Call the next function if provided
        }
        else{
            console.log("No more data to fetch!"); // No more data to fetch
        }
    }, 3000); // Simulate a delay of 2 seconds
}

    // CallBack Hell Example
    // This is an example of callback hell, where callbacks are nested inside each other
    getData(1, () => {
        console.log("Data for ID 1 fetched, now fetching data for ID 2...");
        getData(2, () => {
            console.log("Data for ID 2 fetched, now fetching data for ID 3...");
            getData(3, () => {
                console.log("Data for ID 3 fetched, now fetching data for ID 4...");
                getData(4) 
                // console.log("All data fetched!"); // All data has been fetched
            });
        });
    });
    // Output: 1) Data fetched for ID: 1 (after 2 seconds)
    //         2) Data fetched for ID: 2 (after 2 seconds)  
    //         3) Data fetched for ID: 3 (after 2 seconds)