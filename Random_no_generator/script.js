const mybutton=document.querySelector("#mybutton");
const show1=document.querySelector("#show1");
const show2=document.querySelector("#show2");
const show3=document.querySelector("#show3");

const min=1;
const max=1000;
let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function(){
    randomNum1=Math.floor(Math.random() * (max-min+1)) +min;
    randomNum2=Math.floor(Math.random() * (max-min+1)) +min;
    randomNum3=Math.floor(Math.random() * (max-min+1)) +min;
    show1.textContent=randomNum1;
    show2.textContent=randomNum2;
    show3.textContent=randomNum3;
}