// Your JavaScript code here


// In Javascript we print using


console.log("Hello " + "World"); // Hello World
// alert("Hlo Click OK to see the alert"); // Alert box with OK button




// In Javascript we can use the following methods to print
document.getElementById("para").innerText = "JavaScript is Magic"; // Change the text of the paragraph with id "para" to "JavaScript is Magic"
document.getElementById("para").style.color = "blue"; // Change the color of the paragraph with id "para" to red

document.getElementById("para2").textContent="Magic Is  Coding";
document.getElementById("para2").style.color = "Blue"; // Change the color of the paragraph with id "para" to red

//------------------------------------------------------------------------------


// single line comment


/*
Multi-line comment
This is a multi-line comment
*/


//------------------------------------------------------------------------------------------------


       // Variables in JavaScript
// A variable is a container for storing data values. In JavaScript, there are three ways to declare variables: var, let, and const.
   // 1. declaration   let x;
   //2. assignment      x=10;
// 1. var: The var keyword is used to declare a variable that can be re-assigned. It has function scope or global scope.
// 2. let: The let keyword is used to declare a block-scoped variable that can be re-assigned.
// 3. const: The const keyword is used to declare a block-scoped variable that cannot be re-assigned. It must be initialized at the time of declaration.
// 4. Global variables: Variables declared outside of any function or block are global variables and can be accessed from anywhere in the code.
// 5. Local variables: Variables declared inside a function or block are local variables and can only be accessed within that function or block.



let x;
x=10;
console.log(x); // 10
x=20;
console.log(x); // 20

const y=30;
console.log(y); // 30

console.log(`The value of x is ${x} and the value of y is ${y}`); // The value of x is 20 and the value of y is 30


let z="Pokemon";
let name="Ash";
let age=10;
let isTrainer=true;
console.log(typeof z); // string
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isTrainer); // boolean


let firstName="Ash";
let lastName="Ketchum";
console.log(firstName + " " + lastName); // Ash Ketchum
console.log(`My name is ${firstName} ${lastName}`); // My name is Ash Ketchum
