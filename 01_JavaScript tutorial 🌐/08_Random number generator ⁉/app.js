
// Your JavaScript code here


let mybutton = document.querySelector("#mybutton");
let showVal1 = document.querySelector("#show1");
let showVal2 = document.querySelector("#show2");
let showVal3 = document.querySelector("#show3");

let min=10;
let max=100;
let randomNum1;
let randomNum2;
let randomNum3;

mybutton.addEventListener("click",function(){
   // Generate random numbers
    randomNum1=Math.floor(Math.random() * (max-min)) +min;
    randomNum2=Math.floor(Math.random() * (max-min)) +min;
    randomNum3=Math.floor(Math.random() * (max-min)) +min;
   // Update the text content of the elements
    showVal1.textContent = randomNum1;
    showVal2.textContent = randomNum2;
    showVal3.textContent = randomNum3;
})
