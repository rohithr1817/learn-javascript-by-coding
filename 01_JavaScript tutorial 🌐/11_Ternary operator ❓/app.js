// Your JavaScript code here

  // Ternary operator = a shortcut to if() and else() statements helps to assign a variable based  on a condition
  //                       condition ? codeIfTrue : codeIfFalse;

let age =21;
   let message = age >= 18 ? "You are a major" : "Yor are a minor";
   console.log(message);

let time = 16 ;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon"
console.log(greeting);

let isStudent = true;
let student = isStudent ? "yu are student" : "You are not a student";
console.log(student)

let purchaseAmount = 125;
let discount = purchaseAmount >=100 ? 10 : 0 ;
console.log(`Your total is is $${purchaseAmount - purchaseAmount *(discount/100)}`)