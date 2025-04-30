// Your JavaScript code here


// Math = built-in object that provides a collection of properties and methods

console.log(Math.PI)
console.log(Math.E)

let x= 5;
let y =2;
let z;

// z=Math.round(x);  // 3.21 to 3 and 3.51 to 4
// z=Math.ceil(x);  // 3.21 and 3.99  output: 4
// z=Math.floor(x); // 3.99 or 3.21 to  output:3
// z=Math.trunc(x); // 3.99 or 3.21 to  output:3
z=Math.pow(x,y);    //(3,2) output:9
z=Math.sqrt(9);     // 9   output:3
z=Math.sin(x);      // sin(45)=0.85
z=Math.cos(x);     // cos(45)=0.53
z=Math.tan(x);    // tan(45)=1.62  

z=Math.abs(x);    // give same no with positive -4  output: 4
z=Math.sign(x);   // 1 out:1   and -5 out: -1

console.log(z)
console.log(z.toFixed(2))




let a = 6;
let b = 1;
let c = -1;
let max = Math.max(a,b,c);
console.log(max);
let min = Math.min(a,b,c);
console.log(min);