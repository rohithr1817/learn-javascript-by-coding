// Your JavaScript code here

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

/*
// Function to walk the dog
function walkTheDog() {
    return new Promise((resolve, reject) => {
        console.log("Walking the dog...");
        setTimeout(() => {
            console.log("Dog walked!");
            resolve("Dog walked");
        }, 1500); // Simulate time taken to walk the dog
    });
}

// Function to clean the kitchen
function cleanTheKitchen() {
    return new Promise((resolve, reject) => {
        console.log("Cleaning the kitchen...");
        setTimeout(() => {
            console.log("Kitchen cleaned!");
            resolve("Kitchen cleaned");
        }, 2000); // Simulate time taken to clean the kitchen
    });
}

// Function to take out the trash
function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        console.log("Taking out the trash...");
        setTimeout(() => {
            console.log("Trash taken out!");
            resolve("Trash taken out");
        }, 1000); // Simulate time taken to take out the trash
    });
}

// Execute the chores in order
walkTheDog()
    .then(result => {
        console.log(result); // Log the result of walking the dog
        return cleanTheKitchen(); // Chain the next chore
    })
    .then(result => {
        console.log(result); // Log the result of cleaning the kitchen
        return takeOutTheTrash(); // Chain the next chore
    })
    .then(result => {
        console.log(result); // Log the result of taking out the trash
        console.log("All chores completed!");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
*/

// Function to walk the dog
function walkTheDog() {
    return new Promise((resolve, reject) => {
        console.log("Walking the dog...");
        setTimeout(() => {
            console.log("Dog walked!");
            const walkTheDog = true;
            if(walkTheDog){
               resolve("Dog walked");
            }
            else{
                reject("You DIDN'T walk the dog")
            }
        }, 2000); // Simulate time taken to walk the dog
    });
}

// Function to clean the kitchen
function cleanTheKitchen() {
    return new Promise((resolve, reject) => {
        console.log("Cleaning the kitchen...");
        setTimeout(() => {
            console.log("Kitchen cleaned!");
            const cleanTheKitchen = false;
            if(cleanTheKitchen){
                resolve("Kitchen cleaned");
            }
            else{
                reject("You DIDN'T clean the kitchen")
            }
        }, 3500); // Simulate time taken to clean the kitchen
    });
}

// Function to take out the trash
function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        console.log("Taking out the trash...");
        setTimeout(() => {
            console.log("Trash taken out!");
            const takeOutTheTrash = true;
            if(takeOutTheTrash){
                resolve("Trash taken out");
            }
            else{
                reject("You DIDN'T Take Trash Out")
            }
        }, 2000); // Simulate time taken to take out the trash
    });
}

// Execute the chores in order
walkTheDog()
    .then(result => {
        console.log(result); // Log the result of walking the dog
        return cleanTheKitchen(); // Chain the next chore
    })
    .then(result => {
        console.log(result); // Log the result of cleaning the kitchen
        return takeOutTheTrash(); // Chain the next chore
    })
    .then(result => {
        console.log(result); // Log the result of taking out the trash
        console.log("All chores completed!");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });