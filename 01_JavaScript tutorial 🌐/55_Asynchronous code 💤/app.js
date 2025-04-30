// Your JavaScript code here

// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.
//
// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue.
//
//               (I/O operations, network requests, fetching data)
//               Handled with: Callbacks, Promises, Async/Await

//               (setTimeout, setInterval, fetch, XMLHttpRequest, etc.)
//               (Event listeners, timers, etc.)


function func2() {
console.log("Start"); // 1st line
console.log("Middle"); // 2nd line
console.log("End"); // 3rd line
}

// setTimeout() = Asynchronous function that executes after a specified delay (in milliseconds)
//                Doesn't block the execution flow and allows the program to continue.
//                (I/O operations, network requests, fetching data)


function func1(Callback) {
    console.log("Timeout....."); // 1st line 

    setTimeout(() => {
        console.log("Timeout 1"); // 2nd line
    Callback()}, 2000); // 1 second delay
}


func1(func2); // Call func1 and pass func2 as a callback function
// func1(func2) = Calls func1 and passes func2 as a callback function