const mybutton=document.querySelector("#mybutton");
const enterval=document.querySelector("#enterval");
const showval=document.querySelector("#showval");
let age;

mybutton.onclick = function(){

    age=enterval.value;
        // Check if the input is empty
        if (age === "") {
            showval.textContent = "Please enter your age first.";
            return; // Exit the function early
        }
    age=Number(age);

    if(age>=100){
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


