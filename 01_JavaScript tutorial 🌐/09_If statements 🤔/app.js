// Your JavaScript code here


  //check age eligibity using if_else
const mybutton=document.querySelector("#mybutton");
const enterval=document.querySelector("#enterval");
const showval=document.querySelector("#showval");
let age;

mybutton.onclick = function(){
    // Get the value from the input field
    age=enterval.value;
    
    // Check if the input is empty
    if (age === "") {
        showval.textContent = "Please enter your age first.";
        return; // Exit the function early
    }

    // Convert the input value to a number
    age=Number(age);
    
    // Check age eligibility using if-else
    if (age>=100){
        showval.textContent = "yu are too old to enter this site.";
    }
    else if(age==0){
        showval.textContent = "yu can't enter yu were just born.";
    }
    else if(age>=18){
        showval.textContent = "yu are old enough to enter this site.";
    }
    else if(age<0){
        showval.textContent = "yu age can't below 0.";
    }
    else {
        showval.textContent = "yu must be 18+ to enter this age."
    }
}


//--------------------------------------------------------------------------------

const age1=23;
let haslicense = false;

if(age1>=18){
    console.log("Yu are eligible to drive")
    if(haslicense){
        console.log("Yu have license")
    }
    else{
        console.log("But Yu dont have license, Pls Make it")
    }
}
else{
    console.log("Yu are below 18 not eligible")
}