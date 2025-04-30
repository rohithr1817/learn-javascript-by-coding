// Your JavaScript code here


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


//-------------------------------------------------------------------------------------------------------

let x="Virat"
let y="Kohli"
let z="RCB"

x=Number(x);
y=String(y);
z=Boolean(z)

console.log(x, typeof(x))  // Nan(Not a Number) 'number'
console.log(y, typeof(y))  
console.log(z, typeof(z))  

//---------------------------------------------------------------------------------------------

   const v=""
   p=Number(v);
   q=String(v);
   r=Boolean(v);

   console.log("p is:",p , typeof p)
   console.log("q is:",q , typeof q)
   console.log("r is:",r , typeof r)


//-------------------------------------------------------------------------------------------

let e;
let f;
let g;

e=Number(e);
f=String(f);
g=Boolean(g)

console.log("e is:" ,e , typeof(e))  // Nan(Not a Number) 'number'
console.log("f is:" ,f, typeof(f))  
console.log("g is:" ,g ,typeof(g))  
