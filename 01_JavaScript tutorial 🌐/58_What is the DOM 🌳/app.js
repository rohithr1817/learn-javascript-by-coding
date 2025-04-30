// Your JavaScript code here

// DOM = DOCUMENT OBJECT MODEL 
//       Object{} that represents the page you see in the web browser 
//       and provides you with an API to interact with it.

//       The web browser constructs the DOM when it loads an HTML document, 
//       and structures all the elements in a tree-like representation.

//       JavaScript can access the DOM to dynamically 
//       change the content, structure, and style of a web page.

console.dir(document); 
// The document object represents the entire HTML document loaded in the browser.
// It displays the document object in a more interactive way, allowing you to explore its properties and methods in a tree structure.

console.log(document); 
// This logs the document object to the console as well, but it may not provide the same level of interactivity.
// The output may be less detailed and more focused on the string representation of the object.

document.title = "My New Title"; // Change the title of the document
console.log(document.title); // Log the new title to the console


// document.body.style.backgroundColor = "lightblue"; // Change the background color of the body
// console.log(document.body.style.backgroundColor); // Log the new background color to the console

//---------------------------------------------------------------------------------

let heading = document.querySelector("#myH1"); // Select the first <h1> element in the document
let myButton = document.querySelector("#myButton"); // Select the first <button> element in the document
let body = document.querySelector("body"); // Select the <body> element in the document


myButton.addEventListener("click", function() { // Add a click event listener to the button
  heading.textContent = "Magic Happens in 2sec. Start Countings....... "; // Change the text content of the heading to "Hello, World!"
    setTimeout(function() { // Set a timeout to change the text after 2 seconds
        body.style.backgroundColor = "lightblue"; // Change the background color of the body to light blue
    }, 2000); // 2000 milliseconds = 2 seconds
}); // End of the event listener function

//---------------------------------------------------------------------------------

const username = "Rohit";
let head1 = document.querySelector("#myh2");

head1.textContent += username === "" ? 'Guest' : username; // If username is empty, display "Guest", otherwise display the username


