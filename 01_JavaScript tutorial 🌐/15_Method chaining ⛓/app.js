// Your JavaScript code here

// Method Chaining = Calling one method after another in one continous line of code.

// ------------ No Method Chaining --------------------------

let username = prompt("enter yur Username");

// username = username.trim();
// let firstLetter = username.charAt(0);
// firstLetter = firstLetter.toUpperCase();

// let nextletter = username.slice(1);
// nextletter = nextletter.toLowerCase();

// username = firstLetter + nextletter

// console.log(username)



//------------- Method Chaining ------------------------------------

username = username.trim().charAt(0).toUpperCase() +  username.trim().slice(1).toLowerCase();
console.log(username);
