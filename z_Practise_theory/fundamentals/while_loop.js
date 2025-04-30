// let username="";

// while(username===""  || username === null){
//     username=prompt("Enter Your Username");
// }
// console.log(`Hello ${username}`);



// let username;

// do{
//     username=prompt("Enter Your Username");
// }while(username===""  || username === null)
// console.log(`Hello ${username}`);




let loggedIn=false;
let username;
let password;

while(!loggedIn){
    username=prompt("Enter Your Username");
    password=prompt("Enter Your Password");

    if(username==="rohith" && password==="rohi123"){
      loggedIn = true;
      console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials! Please try again")
    }

}
 
// guess the number

let gamenum = 18;
let unernum= prompt("Enter a number ");
while(gamenum!=unernum){
     unernum= prompt("You Entered a wrong number, Guess again");
}

console.log("You Guessed the correct number");