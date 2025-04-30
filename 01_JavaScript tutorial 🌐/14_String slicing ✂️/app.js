// Your JavaScript code here


// String slicing = creating a substring from a portion of another string


//                           dtring.slice(start , end)


const Name= "Rohith"

console.log(Name.slice(0,3))
console.log(Name.slice(0,6))
console.log(Name.slice(4,6))
console.log(Name.slice(4))
console.log(Name.slice(0,1))
console.log(Name.slice(-1))  // output: h
console.log(Name.slice(-2))  // output: th


//------------------------------------------------------------------------------------------------

let fullName = "Rohith Prajwal"
let firstName = fullName.slice(0,fullName.indexOf(" "))
let lastName =  fullName.slice(fullName.indexOf(" ")+1)
console.log(firstName)
console.log(lastName)


const email = "rohith@gmail.com"
let username = email.slice(0,email.indexOf("@"))
let extension =  email.slice(email.indexOf("@")+1)
console.log(username);
console.log(extension);