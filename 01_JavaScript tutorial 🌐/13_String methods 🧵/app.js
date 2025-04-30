// Your JavaScript code here

let Name = "RoyalBengaluru"

console.log(Name.charAt(0))
console.log(Name.charAt(1))

console.log(Name.indexOf("a"))
console.log(Name.lastIndexOf("a"))

console.log(Name.length);


console.log("      Rooooooooo".trim(""));  //The trim() method in JavaScript is used to remove whitespace from both ends of a string. This includes spaces, tabs, and newline characters. It does not modify the original string but returns a new string with the whitespace removed.
let str = "   Hello, World!   ";
let trimmedStart = str.trimStart();
console.log(trimmedStart); // Output: "Hello, World!   "
let trimmedEnd = str.trimEnd();
console.log(trimmedEnd); // Output: "   Hello, World!"


let a = "Rcb";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.repeat(3));

//------------------------------------------------------------------------------------------------

let userName = " WebDeveloper";
let result = userName.startsWith(" ")
console.log(userName.startsWith(" "))
console.log(userName.endsWith("r"))
console.log(userName.includes(" ")) // includes method

if(result){
    console.log("Your username cant begin with ` ` ");
}
else{
    console.log(userName)
}


//-------------------------------------------------------------------------------------------------------------

let phonenumber = "123-456-789"

phonenumber = phonenumber.replaceAll("-","/") //output: 123/456/789
console.log(phonenumber)

console.log(phonenumber.padStart(15,"0")) // 0000123-456-789
console.log(phonenumber.padEnd(15,"0"))   // 123-456-7890000