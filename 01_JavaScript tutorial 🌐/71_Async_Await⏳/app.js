// Your JavaScript code here

// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

// Function to walk the dog
function walkDog() {
    return new Promise((resolve) => {
        console.log("Walking the dog...");
        setTimeout(() => {
            console.log("Dog walked!");
            resolve("Dog walked");
        }, 2000); // Simulate time taken to walk the dog
    });
}

// Function to clean the kitchen
function cleanKitchen() {
    return new Promise((resolve) => {
        console.log("Cleaning the kitchen...");
        setTimeout(() => {
            console.log("Kitchen cleaned!");
            resolve("Kitchen cleaned");
        }, 1500); // Simulate time taken to clean the kitchen
    });
}

// Function to take out the trash
function takeOutTrash() {
    return new Promise((resolve) => {
        console.log("Taking out the trash...");
        setTimeout(() => {
            console.log("Trash taken out!");
            resolve("Trash taken out");
        }, 1000); // Simulate time taken to take out the trash
    });
}

// Async function to manage the chores
async function doChores() {
    try {
        const walkDogresult = await walkDog();
        console.log(walkDogresult); // Log the result of walking the dog

        const value2 = await cleanKitchen();
        console.log(value2); // Log the result of cleaning the kitchen

        const value3 = await takeOutTrash();
        console.log(value3); // Log the result of taking out the trash

        console.log("You finished all the chores!");
    } catch (error) {
        console.error(error);
    }
}

// Execute the async function
doChores();