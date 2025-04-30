// Your JavaScript code here

// Spread operator = ... allows an iterable such as an 
//                   array or string to be expanded 
//                   into separate elements 
//                   (unpacks the elements)

let numbers = [1,2,3,4,5,6,7,8];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum , minimum);


let username= "rohith";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple","mango","banana"];
let veges = ["carrot","beans","potato"];
let foods = [...fruits , ...veges , "eggs" , "milk"];

console.log(foods);