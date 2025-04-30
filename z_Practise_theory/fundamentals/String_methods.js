// String methods = alloes you to manipukate and work with text (strings)

let username="Rohith R";

// console.log(username[0]);
// console.log(username[1]);
// console.log(username.length);



console.log(username.slice(0, 8));
console.log(username.slice(-2));
console.log(username.slice(0, username.indexOf(" ")));


// console.log(username.charAt(0));
// charAt() method returns the character at the specified index in a string.

// console.log(username.indexOf("h"));
// output: 2
// indexOf() method returns the position of the first occurrence of a specified value in a string.

// console.log(username.lastIndexOf("h"));
// output: 5

// console.log(username.length);
// output: 8  its measures length starts from 1 and index from 0

// console.log(username.indexOf("R"));



// console.log(username.trim());
// trim-removes the white spaces from the string



// console.log(username.toLowerCase());
// console.log(username.toUpperCase());



// console.log(username.repeat(3));
// repeats the string 3 times



let str1 = "Hello";
let str2 = "World";
let str3 = "Hello World";

console.log(str1.concat(" ",str2));
// or
console.log(str1 + " " + str2);
// output: Hello World
// concat() method concatenates the string arguments to the calling string and returns a new string.

console.log("My first coding program is to print",str1 + " " + str2);
// prints: My first coding program is to print Hello World

console.log(str3.replace("Hello","Hi"));
console.log(str3.replace("H","M"));
// output: Hi World
// replace() method replaces a specified value with another value in a string.

console.log(str3.split(" "));
// output: [ 'Hello', 'World' ]
// split() method splits a string into an array of substrings, and returns the new array.



// program tp get the name from the user and print the name with @ symbol and length of the name
let guestname = prompt("Enter your name: ");
let names = "@" + guestname + "guestname.length";
console.log(guestname);
console.log(names);




//  Stars and endsWith
// let result = username.endsWith("  ");

// if(result){
//     console.log("Your username ends with space");
// }
// else{
//     console.log(username)
// }



// let result1 = username.includes(" ");

// if(result1){
//     console.log("Your username have with space");
// }
// else{
//     console.log(username)
// }




// let phonenumber = "123-456-7890";

// phonenumber=phonenumber.replaceAll("-","/");
// console.log(phonenumber);

// phonenumber1=phonenumber.padStart("25","0");
// console.log(phonenumber1);

// phonenumber2=phonenumber.padEnd("25","0");
// console.log(phonenumber2);




//String Slicing

// const fullName = "Prajwal Rohith";

// let firstName = fullName.slice(0,7)
// let lastName = fullName.slice(-6)

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(firstName);
// console.log(lastName);




const email="rohtih18@gmail.com";
let UserName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(UserName);
console.log(extension);
