// => Summary
//         1) Promise: A way to handle tasks that will finish later.
//         2) States: Pending, Fulfilled, Rejected.
//         3) Methods: Use .then() for success and .catch() for errors.
//         4) Chaining: You can link multiple promises together for complex tasks.
//         5) Async/Await: A cleaner way to work with promises.

//---------------------------------------------------------------------------------------------------------------------------------------------
// 1) Example of a simple promise

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise!");
//     resolve("Promise resolved!"); // Resolve the promise with a value
//     // reject("Promise rejected! "); // Uncomment to simulate rejection
// });



// 2) Example of a promise that resolves after a delay 
//promises to pending and success


function getData(dataId,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID:", dataId); // Simulate fetching 
            resolve("success"); // Resolve the promise with a value
            // reject("Error fetching data!"); // Uncomment to simulate rejection
            if(getNextData){
                getNextData(); // Call the next function if provided
            }
            else{
                console.log("No more data to fetch!"); // No more data to fetch
            }
        }, 5000); // Simulate a delay of 5 seconds
    });
}

// CallBack Hell Example

// let result = getData(1, () => {
//     console.log("Data for ID 1 fetched, now fetching data for ID 2...");
//     getData(2, () => {
//         console.log("Data for ID 2 fetched, now fetching data for ID 3...");
//         getData(3, () => {
//             console.log("Data for ID 3 fetched, now fetching data for ID 4...");
//             getData(4) 
//             // console.log("All data fetched!"); // All data has been fetched
//         });
//     });
// });



// promise to pending and rejected

function getData(dataId,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Data fetched for ID:", dataId); // Simulate fetching 
            // resolve("success"); // Resolve the promise with a value
            reject("Some error occured!"); // Uncomment to simulate rejection
            if(getNextData){
                getNextData(); // Call the next function if provided
            }
            else{
                console.log("No more data to fetch!"); // No more data to fetch
            }
        }, 5000); // Simulate a delay of 5 seconds
    });
}


// CallBack Hell Example

// let result1 = getData(1, () => {
//     console.log("Data for ID 1 fetched, now fetching data for ID 2...");
//     getData(2, () => {
//         console.log("Data for ID 2 fetched, now fetching data for ID 3...");
//         getData(3, () => {
//             console.log("Data for ID 3 fetched, now fetching data for ID 4...");
//             getData(4) 
//             // console.log("All data fetched!"); // All data has been fetched
//         });
//     });
// })


//---------------------------------------------------------------------------------------------------------------------------------------------
                                        // Promises using .then() and .catch()


// 3) Example of using promises with .then() and .catch()


const getPromise = () => {
   return new Promise((resolve, reject) => {
        console.log("I am a promise!");
        // resolve("Promise resolved!"); // Resolve the promise with a value
        reject("Promise rejected! ");  // reject the promise with an error
    });
}
     
// let promise = getPromise();
// promise.then((result) => {
//     console.log(result); // Handle success   
// });
      
//  promise.catch((error) => {
//      console.log("rejected",error); // Handle error  
//  });
 


 //----------------------------------------------------------------------------------------------------------------------------------------
                                       //Promises Chaining
   // 4) Promises Chaining

   function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise pending");
            resolve("promise resolved!,sucessfully fetched data"); // Resolve the promise with a value
        }, 4000); // Simulate a delay of 2 seconds
    });
}

// console.log("Fetching First Data.......");
// asyncFunction().then((res) => {
//     console.log(res); // Handle success
//     console.log("Fetching Second Data.......");
//     asyncFunction().then((res) => {
//         console.log(res); // Handle success
//         console.log("Fetching Third Data.......");
//         asyncFunction().then((res) => {
//             console.log(res); // Handle success
//             console.log("Fetching Fourth Data.......");
//             asyncFunction().then((res) => {
//                 console.log(res); // Handle success
//             });
//         });
//     });
// });
               
      //  below is the same code  but with each asyncFunction(); decalred with variable

// console.log("Fetching First Data.......");
// let pl= asyncFunction();
// pl.then((res) => {
//     console.log(res); // Handle success
//     console.log("Fetching Second Data.......");
//     let p2 = asyncFunction();
//     p2.then((res) => {
//         console.log(res); // Handle success
//         console.log("Fetching Third Data.......");
//         let p3 = asyncFunction();
//     });
// });

//-------------------------------------------------------------

  // // same way using 2 functions

  function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("promise resolved!,sucessfully fetched data"); // Resolve the promise with a value
        }, 4000); // Simulate a delay of 2 seconds
    });
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("promise resolved!,sucessfully fetched data"); // Resolve the promise with a value
        }, 4000); // Simulate a delay of 2 seconds
    });
}


// console.log("Fetching First Data.......");
// asyncFunction1().then((res) => {
//     console.log("Fetching Second Data.......");
//     asyncFunction2().then((res) => {
//     });
// });

//---------------------------------------------------------------------

// another example using 1st question  using chaining


function getData1(dataId,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID:", dataId); // Simulate fetching 
            resolve("success"); // Resolve the promise with a value
            // reject("Error fetching data!"); // Uncomment to simulate rejection
        }, 3000); // Simulate a delay of 5 seconds
    });
}

// let p1 = getData1(1);
// p1.then((res) => {
//     console.log(res); // Handle success
//     let p2 = getData1(2);
//     p2.then((res) => {
//         console.log(res); // Handle success
//         let p3 = getData1(3);
//         p3.then((res) => {
//             console.log(res); // Handle success
//             let p4 = getData1(4);
//             p4.then((res) => {
//                 console.log(res); // Handle success
//             });
//         });
//     });
// });


     //or in real time using and easy *imp*

    //  getData1(1).then((res) => {
    //     return getData1(2); // Return the next promise
    //  })
    //     .then((res) => {
    //         return getData1(3); // Return the next promise
    //     })
    //     .then((res) => {
    //         return getData1(4); // Return the next promise
    //     })
    //     .then((res) => {
    //         console.log(res); // Handle success
    //     })
    //     .catch((error) => {
    //         console.log("Error:", error); // Handle error
    //     });


// CallBack Hell Example

// let result = getData(1, () => {
//     console.log("Data for ID 1 fetched, now fetching data for ID 2...");
//     getData(2, () => {
//         console.log("Data for ID 2 fetched, now fetching data for ID 3...");
//         getData(3, () => {
//             console.log("Data for ID 3 fetched, now fetching data for ID 4...");
//             getData(4) 
//             // console.log("All data fetched!"); // All data has been fetched
//         });
//     });
// });



//--------------------------------------------------------------------------------------------------------------------------------------------
//                                              5) Promises with async/await
// => It is a cleaner way to work with promises, making the code look more synchronous and easier to read.
// => It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.

// => async function always returns a promise, even if you don't explicitly return one.
// => await is used to wait for a promise to resolve or reject before moving on to the next line of code.

//          async function myFunction() {
//              console.log("I am an async function!");
//                }

// => await puases the execution of the async function until the promise is resolved or rejected.
// => await can only be used inside an async function.


async function hello() {      // here async will promise even if we dont return anything
    console.log("Hello, World!");
//     return "Hello, World!"; // This will be wrapped in a promise
}
  //hello(); // Call the async function

//--------------------------------------------------------

//2. Example of async/await with promises

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched from API!");
            resolve(200); // resolve(200) means success
            // reject(404); // Uncomment to simulate an error
        }, 2000); // Simulate a delay of 2 seconds
    });
}

async function getWeatherData() {
    await api(); // 1st Wait for the API call to complete
    await api(); // 2nd Wait for the API call to complete
}

// getWeatherData(); // Call the async function
// Output: Data fetched from API! (after 2 seconds)
//         Data fetched from API! (after 2 seconds)

//----------------------------------------------------------

// 3. Example of async/await using 1St question using async/await

function getData1(dataId,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID:", dataId); // Simulate fetching 
            resolve("success"); // Resolve the promise with a value
            // reject("Error fetching data!"); // Uncomment to simulate rejection
        }, 3000); // Simulate a delay of 5 seconds
    });
}

//Async/Await Example
async function getAllData() {
    console.log("Fetching Data 1......."); // Start fetching data 1
    await getData1(1); // Wait for the first promise to resolve
    console.log("Fetching Data 2......."); // Start fetching data 2
    await getData1(2); // Wait for the second promise to resolve
    console.log("Fetching Data 3......."); // Start fetching data 3
    await getData1(3); // Wait for the third promise to resolve
}

getAllData(); // Call the async function


/// In async/await, we need to call the async function once to execute it.
/// to stop that we can use IIFE (Immediately Invoked Function Expression) to call the async function immediately.

// (async function() {
//     await getAllData(); // Call the async function
// })();


//       or standard way using IIFE (Immediately Invoked Function Expression)


// (async function () {
//     console.log("Fetching Data 1......."); // Start fetching data 1
//     await getData1(1); // Wait for the first promise to resolve
//     console.log("Fetching Data 2......."); // Start fetching data 2
//     await getData1(2); // Wait for the second promise to resolve
//     console.log("Fetching Data 3......."); // Start fetching data 3
//     await getData1(3); // Wait for the third promise to resolve
// })(); // Call the async function
// // Output: Data fetched for ID: 1 (after 3 seconds)
// //         Data fetched for ID: 2 (after 3 seconds)
// //         Data fetched for ID: 3 (after 3 seconds)