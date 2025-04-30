
const countlab=document.querySelector("#countlab");
const increase=document.querySelector("#increase");
const decrease=document.querySelector("#decrease");
const reset=document.querySelector("#reset");

let count=0;

increase.onclick= function(){
    count++;
    countlab.textContent=count;
}

decrease.onclick= function(){
    count--;
    countlab.textContent=count;
}

reset.onclick= function(){
    count=0;
    countlab.textContent=count;
}
