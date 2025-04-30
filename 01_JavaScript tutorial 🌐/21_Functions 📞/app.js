// Your JavaScript code here

// Function : A section of reusable code
// Declare code once, use it whenever you want.
// Call the function to execute that code.

function happyBirthday(username , age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday Dear ${username}!`);
    console.log(`You are ${age} years old`);
}

// Call the function to print the birthday song
happyBirthday();
happyBirthday();
happyBirthday();
happyBirthday("Rahul",32);


function add(x,y){
    console.log(x+y);
}

function sub(x,y){
    console.log(x-y);
}

function mul(x,y){
    console.log(x*y);
}


add(3,2);
sub(3,2);
mul(3,2);

//-------------------------------------------------------------------------

function isEven(number){

    return number % 2 == 0 ? true : false ;
    // if(number % 2 == 0){
    //     console.log(true);
    // }
    // else{
    //         console.log(false)
    //     }
}

console.log(isEven(4));
console.log(isEven(5));

//----------------------------------------------------------------------------

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("rahul@gmail.com"));
console.log(isValidEmail("rahul.com"));
