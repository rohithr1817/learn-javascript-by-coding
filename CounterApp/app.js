
let countlap = document.querySelector("#countlap");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");

let count=0;

increase.onclick = function(){
    count++;
    countlap.textContent=count;
}

decrease.onclick = function(){
    count--;
    countlap.textContent=count;
}

reset.onclick = function(){
    count=0;
    countlap.textContent=count;
}