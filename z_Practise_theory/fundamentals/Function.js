// function is a block of code that performs a specific task, can be invoked whenever needed.
// The code inside a function is not executed when the function is defined. It is executed when the function is invoked.

// syntax => function functionName(parameters) {    code to be executed  }          
// function declaration => function myFunction(p1, p2) {    return p1 * p2;  }
// function expression => var x = function (a, b) {return a * b};  // anonymous function expression
// function constructor => var myFunction = new Function("a", "b", "return a * b");


function myFunction() {
    console.log("Call Me !");
    console.log("Msg Me !");
}

myFunction(); // Call Me !
myFunction(); // Call Me !


function myFunction(msg) {
    // console.log(msg);
    return msg;
}
// myFunction("Hello"); // Hello
// myFunction("Hi"); // Hi
console.log(myFunction("Hello")); // Hello


//  // function to calculate the sum of two numbers

function sum(a, b) {
    return a + b;
}   
console.log(sum(2, 3)); // 5

// // function to calculate the product of two numbers
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // 6



//  // arrow function is a shorter syntax for writing function expressions.
// syntax =>               const functionName = (parameters) => { 
//                                         code to be executed
//                                            }

const arrowsum = (a, b) => {
    return a + b;
}
console.log(arrowsum(2, 3)); // 5

// const arrowsum = (a, b) => a + b;  // single line arrow function
// console.log(arrowsum(2, 3)); // 5




// Assgnment 

// // 1. Write a function that takes a string as an argument and returns the number of vowels contained in that string.
// // Example: countVowels("tenlpa") => 2

function countVowels(str){
    let count = 0;
    for(const char of str){
         // Convert the character to lowercase
         const lowerChar = char.toLowerCase();
         if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
             count++;
         }
    }
     console.log(count);
 }
 
 
 countVowels("tenlpa"); // 2
 countVowels("Indian"); // 3
 
 
 //  // 2. create a arrow function for above program
 
 const countVowelsArrow = (str) => {
     let count = 0;
     for(const char of str){
         // Convert the character to lowercase
         const lowerChar = char.toLowerCase();
         if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
             count++;
         }
    }
     console.log(count);
 }
 
 countVowelsArrow("tenlpatenlpa"); // 4