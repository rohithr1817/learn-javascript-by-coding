
// In Javascript we print using

/*
console.log("Hello " + "World"); // Hello World
alert("Hlo Click OK to see the alert"); // Alert box with OK button
*/


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

/*

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

*/


//--------------------------------------------------------------------------------------------------

            // Arithmetic Operators
 
            /*
            Operator precedence determines the order in which operators are evaluated in an expression. In JavaScript, the order of precedence is as follows:
            1. Parentheses ()
            2. Exponentiation **
            3. Unary operators +, -
            4. Multiplication *, Division /, Modulus %
            5. Addition +, Subtraction -
            6. Assignment =, +=, -=, *=, /=, %=
            7. Comparison ==, ===, !=, !==, >, <, >=, <=
            */

      
// Arithmetic operators are used to perform arithmetic operations on numbers. The following are the arithmetic operators in JavaScript:
// 1. Addition (+): Adds two numbers together.
// 2. Subtraction (-): Subtracts one number from another.
// 3. Multiplication (*): Multiplies two numbers together.
// 4. Division (/): Divides one number by another.
// 5. Modulus (%): Returns the remainder of a division operation.
// 6. Exponentiation (**): Raises a number to the power of another number.
// 7. Increment (++): Increases a number by 1.
// 8. Decrement (--): Decreases a number by 1.
// 9. Unary plus (+): Converts a variable to a number.
// 10. Unary negation (-): Converts a variable to a negative number.
// 11. Assignment (=): Assigns a value to a variable.

// 12. Compound assignment (+=, -=, *=, /=, %=): Combines an arithmetic operation with assignment.
// 13. Ternary operator (?:): A shorthand for an if-else statement that returns one of two values based on a condition.

let student =30;
// augumented assignment operator
// The augmented assignment operators are shorthand ways to perform arithmetic operations and assign the result to a variable. They combine an arithmetic operation with assignment. The following are the augmented assignment operators in JavaScript:

student += 10; // student = student + 10; // 40
student -= 5; // student = student - 5; // 35
student *= 2; // student = student * 2; // 70
student /= 2; // student = student / 2; // 35
student %= 3; // student = student % 3; // 2
student **= 2; // student = student ** 2; // 4
console.log(student); 



//------------------------------------------------------------------------------------

    //  How to accept user input in JavaScript

   //  let username;
   //  username=prompt("Enter your name"); // Prompt the user to enter their name and store it in the variable username
   //    console.log(`Hello ${username}`); // Print the value of username to the console


//-----------------------------------------------------------------------------------------



  // type conversion = chnage the datatype of a value to another(strings, numbers, booleans)
  let a= "3";
  let b = 2;
  let no;
  let age= a + b;
  console.log(age,  typeof(age))

  newa = Number(a)
  no= newa+b;
  console.log(no,  typeof(no))


  // Implicit conversion (Type Conversion)
//Definition: JavaScript automatically converts one data type to another when it needs to
console.log('5' + 3); // '53' (string concatenation)
console.log('5' - 3); // 2 (number subtraction)
console.log(true + 1); // 2 (true is coerced to 1)

// Explicit conversion (Type Conversion)
// Definition: The programmer manually converts a value from one type to another using built-in functions.
let num = 10;
let str = String(num); // '10'
let bool = Boolean(num); // true

console.log(str); // '10'
console.log(bool); // true

/*
| Feature                | Implicit Conversion                     | Explicit Conversion                     |
|------------------------|----------------------------------------|----------------------------------------|
| **Definition**         | Automatic type conversion by JavaScript| Manual type conversion by the programmer|
| **Control**            | No control over the process            | Full control over the conversion       |
| **Example**            | `'5' + 3` → `'53'`                     | `String(123)` → `'123'`               |
| **Use Case**           | Occurs during operations                | Used when specific type is needed     |
*/


let x="Virat"
let y="Kohli"
let z="RCB"

x=Number(x);
y=String(y);
z=Boolean(z)

console.log(x, typeof(x))  // Nan(Not a Number) 'number'
console.log(y, typeof(y))  
console.log(z, typeof(z))  

   const v=""
   p=Number(v);
   q=String(v);
   r=Boolean(v);

   console.log("p is:",p , typeof p)
   console.log("q is:",q , typeof q)
   console.log("r is:",r , typeof r)


let e;
let f;
let g;

e=Number(e);
f=String(f);
g=Boolean(g)

console.log("e is:" ,e , typeof(e))  // Nan(Not a Number) 'number'
console.log("f is:" ,f, typeof(f))  
console.log("g is:" ,g ,typeof(g))  



//------------------------------------------------------------------------------------------------------------


        // const : a variable that can't be chnged
      
const PI = 3.14159;
let radius;
let circumference;


// radius = prompt("enter the radius")
radius=7;
radius = Number(radius)

circumference = 2 * PI * radius;
console.log(circumference);