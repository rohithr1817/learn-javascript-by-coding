// Your JavaScript code here

// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell


function task1(callback) {
    setTimeout(() =>{
        console.log("Task1 is complete");
        callback();
    },2000);  
}
function task2(callback) {
    setTimeout(() =>{
        console.log("Task2 is complete");
        callback();
    },1000);  
}
function task3(callback) {
    setTimeout(() =>{
        console.log("Task3 is complete");
        callback();
    },3000);  
}
function task4(callback) {
    setTimeout(() =>{
        console.log("Task4 is complete");
        callback();
    },4000);  
}
function task5(callback) {
    setTimeout(() =>{
        console.log("Task5 is complete");
        callback();
    },2000);  
}

task1(() => {
    task2(() =>{
        task3(() =>{
            task4(() => {
                task5(() => console.log("Done")); 
            })
        })
    })
})
console.log("All Task is completed")


// Callback Hell
/*
a(function (resultsFromA) {
    b(resultsFromA, function (resultsFromB) {
        c(resultsFromB, function (resultsFromC) {
            d(resultsFromC, function (resultsFromD) {
                e(resultsFromD, function (resultsFromE) {
                    f(resultsFromE, function (resultsFromF) {
                        console.log(resultsFromF);
                    });
                });
            });
        });

*/

// Sample function definitions
function b(resultsFromA, callback) {
    // Simulate some processing
    const resultsFromB = resultsFromA + " processed by b";
    callback(resultsFromB);
}

function c(resultsFromB, callback) {
    const resultsFromC = resultsFromB + " processed by c";
    callback(resultsFromC);
}

function d(resultsFromC, callback) {
    const resultsFromD = resultsFromC + " processed by d";
    callback(resultsFromD);
}

function e(resultsFromD, callback) {
    const resultsFromE = resultsFromD + " processed by e";
    callback(resultsFromE);
}

function f(resultsFromE, callback) {
    const resultsFromF = resultsFromE + " processed by f";
    callback(resultsFromF);
}

// Initial input
const resultsFromA = "Initial data";

// Calling the nested functions
b(resultsFromA, function (resultsFromB) {
    c(resultsFromB, function (resultsFromC) {
        d(resultsFromC, function (resultsFromD) {
            e(resultsFromD, function (resultsFromE) {
                f(resultsFromE, function (resultsFromF) {
                    console.log(resultsFromF); // Final output
                });
            });
        });
    });
});

//-----------------------------------
// Example 2 :

console.log("Pyramid of dooooooooom!");

function step1(callback) {
    // Simulate some processing
    const value1 = "Value from step 1";
    callback(value1);
}

function step2(callback) {
    const value2 = "Value from step 2";
    callback(value2);
}

function step3(callback) {
    const value3 = "Value from step 3";
    callback(value3);
}

function step4(callback) {
    const value4 = "Value from step 4";
    callback(value4);
}

function step5(callback) {
    const value5 = "Value from step 5";
    callback(value5);
}

function step6(callback) {
    const value6 = "Value from step 6";
    callback(value6);
}

function step7(callback) {
    const value7 = "Value from step 7";
    callback(value7);
}

// Calling the nested functions
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        step7(function (value7) {
                            // Do something with value7
                            console.log(value7); // Log the final value
                        });
                    });
                });
            });
        });
    });
});

/*
        console.log("Pyramid of dooooooooom! ")
        step1(function (valuel) {
            step2(function (value2) {
                step3(function (value3) {
                    step4(function (value4) {
                        step5(function (value5) {
                            step6(function (value6) {
                                step7(function (value) {
                                    //Do something with value 4
                                    console.log(value7)
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

*/