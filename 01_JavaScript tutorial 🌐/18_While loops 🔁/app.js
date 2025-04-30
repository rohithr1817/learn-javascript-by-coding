// Your JavaScript code here

// while loop = repeat some code WHILE some condition is true

// let username =" ";

// if(username === " " || username === ""){
//     console.log("You didn't enter your name");
// }
// else{
//     console.log(`Hello ${username}`)
// }

//-------------------------------------------------------------------------------------

// let username ="";

// while(username === "" || username === " " || username === null){
//     username = prompt("Enter your name");
//     // console.log("You didn't enter your name");//this will stuck to infinty
// }
// console.log(`Hello ${username}`);


//---------------------------------------------------------------------------------

// let username;
// do{
//     username = prompt("Enter your name");
//     // console.log("You didn't enter your name");//this will stuck to infinty
// }while(username === "" || username === " " || username === null);

// console.log(`Hello ${username}`);


//---------------------------------------------------------------------------------------

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    } else {
        console.log("Invalid credentials! Please try again.");
    }
}