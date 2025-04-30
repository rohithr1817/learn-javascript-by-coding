// Your JavaScript code here

//   .checked= property that determines the checked state of an HTML checkbox or radio button element.
const mycheckbox=document.querySelector("#mycheckbox");
const visabtn=document.querySelector("#visabtn");
const MAstercardbtn=document.querySelector("#MAstercardbtn");
const Paypalbtn=document.querySelector("#Paypalbtn");
const mysubmit=document.querySelector("#mysubmit");
const subresult=document.querySelector("#subresult");
const paymentresult=document.querySelector("#paymentresult");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent="You are Subscribed";
    }
    else{
        subresult.textContent="You are not Subscribed";
    }

    if(visabtn.checked){
        paymentresult.textContent="You are Paying with Visa";
    }
    else if(MAstercardbtn.checked){
        paymentresult.textContent="You are Paying with Mastercard";
    }
    else if(Paypalbtn.checked){
        paymentresult.textContent="You are Paying with Paypal";
    }
    else{
        paymentresult.textContent="You must select a payment type";
    }
}