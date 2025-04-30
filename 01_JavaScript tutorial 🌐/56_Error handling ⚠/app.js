// Your JavaScript code here

// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch {} = Catch and handle any thrown Errors from try { }
// finally { } (optional) Always executes. Used mostly for clean up
// ex. close files, close connections, release resources

// console,log(x); // This will throw a ReferenceError since x is not defined

try {
    console.log(x); // This will throw a ReferenceError since x is not defined
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
} 
catch (error) {
    console.log(error);
}
finally {
    // This block will always run, regardless of whether an error occurred or not
    // Used for clean up
    console.log("Cleaning up..."); // Example: closing files, releasing resources, etc.
    console.log("This will always run!");
}

console.log("You have reached the end!");


//--------------------------------------------------------------------------------------

try{
    const divided = prompt("Enter a number to divide: ");
    const divisor = prompt("Enter a divisor: ");
    const result = divided / divisor; // This will throw a TypeError if either divided or divisor is not a number
    console.lag(result); // This will throw a TypeError if either divided or divisor is not a number
}
catch (error) {
    console.error("An error occurred: " + error.message); // This will log the error message to the console
}

finally {
    console.log("This will always run!1"); // This will always run, regardless of whether an error occurred or not
}