// Your JavaScript code here


// The setTimeout() = function in JavaScript allows you to schedule
//                    the execution of a function after a specified amount of time (in milliseconds).

//                    Note that the timing is approximate and may vary based on the workload
//                    of the JavaScript runtime environment.
//
//          Syntax:
//                setTimeout(callback, delay);
//
// Parameters:
// - callback: The function to be executed after the delay.
// - delay: The time in milliseconds to wait before executing the callback.

// Define a callback function
function greet() {
    console.log("Hello, World! , after 2 seconds.");
}

// Schedule the greet function to be executed after 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);

// You can also use an anonymous function directly
setTimeout(function() {
    console.log("This message appears after 3 seconds.");
}, 3000);

//-----------------------------------------------------------------------------------------


// clearTimeout() = function in JavaScript is used to cancel a timeout that was previously established by setTimeout().
//                    This is useful if you want to prevent the callback function from executing
//                    before the specified delay has elapsed.
//
//          Syntax:
//                clearTimeout(timeoutID);

// example of using clearTimeout
let timeoutID = setTimeout(function() {
    console.log("This message will not be shown. ");
}, 2000);

clearTimeout(timeoutID); // Cancel the timeout before it executes
// The message will not be shown because we cleared the timeout before it could execute.


//-----------------------------------------------------------------------------------------

let timeout; // Declare a variable to hold the timeout ID

function startTimer() {
    console.log("Timer started!");
    timeout = setTimeout(function() {
        console.log("Time's up!");
    }, 5000); // 5 seconds delay
}

function clearTimer() {
    clearTimeout(timeout); // Cancel the timeout
    console.log("Timer cleared!");
}