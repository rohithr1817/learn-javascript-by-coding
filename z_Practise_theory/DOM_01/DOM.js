// DOM - means Document Object Model
// DOM is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content and structure of web pages dynamically.
// The DOM provides a way to access and modify the elements, attributes, and styles of a web page using JavaScript.
// It allows developers to create interactive and dynamic web applications by manipulating the HTML and CSS of a page in real-time.
// The DOM is an essential part of web development, enabling developers to create rich user interfaces and respond to user interactions.
// It provides a way to access and manipulate the elements, attributes, and styles of a web page using JavaScript.

// The DOM is a programming interface for web documents, allowing developers to create interactive and dynamic web applications.

// The window object represents the browser window and provides methods and properties to interact with the browser.
// The document object represents the HTML document loaded in the browser and provides methods and properties to manipulate the content and structure of the web page.
// The DOM is a tree-like structure where each element in the HTML document is represented as a node in the tree.
// Each node can be accessed and manipulated using JavaScript, allowing developers to create dynamic and interactive web pages.
// The DOM provides methods to access and manipulate elements, attributes, and styles of a web page.
// It allows developers to create, modify, and delete elements in the HTML document.
// It also provides methods to handle events, allowing developers to respond to user interactions with the web page.
// The DOM is an essential part of web development, enabling developers to create rich user interfaces and respond to user interactions.

   // // DOM TREE
     //text node
      //element node
      //comment node


console.log(window.document); 
console.dir(window.document); 
// diference between console.log and console.dir is that console.log displays the object as a string, 
// while console.dir displays the object as a tree structure, allowing you to expand and explore its properties and methods.

console.log(document.body.childNodes[0]); // #text like spaces next comments  third elemnts 
console.log(document.body.childNodes[1]); // 1st element
console.log(document.body.childNodes[2]); 
console.log(document.body.childNodes[3]); 
console.log(document.body.childNodes[4]); 
console.log(document.body.childNodes[5]); 

//  // Summary
// 1) childNodes includes all types of nodes (elements, text, comments).
// 2) children includes only element nodes.
// 3) If you're seeing text nodes in your output, it's because they are part of the childNodes list, which includes whitespace and other text nodes.


console.log(document.body.children) // This gives you a collection of all the child elements of the <body> tag, excluding any text nodes or comments.


document.body.style.background="silver"; // change the background color of the body to silver
document.body.style.color="black"; // change the text color of the body to black


document.body.children[3].innerText="This change the text"; // change the text of the 3rd child element of the body to "Hello World!"
document.body.children[3].style.color="red"; // change the text color of the 3rd child element of the body to red
document.body.children[3].style.fontSize="50px"; // change the font size of the 3rd child element of the body to 50px
document.body.children[3].style.fontFamily="Arial"; // change the font family of the 3rd child element of the body to Arial



// DOM Manipulation - Dynnamic change the content of the HTML document using JavaScript
// DOM Manipulation is the process of dynamically changing the content and structure of a web page using JavaScript.
// It allows developers to create interactive and dynamic web applications by manipulating the HTML and CSS of a page in real-time.
// The DOM provides methods to access and manipulate elements, attributes, and styles of a web page.
// It allows developers to create, modify, and delete elements in the HTML document.
// It also provides methods to handle events, allowing developers to respond to user interactions with the web page.
// The DOM is an essential part of web development, enabling developers to create rich user interfaces and respond to user interactions.

   // // Selecting Elements with id
        document.getElementById("id");

  // // Selecting Elements with class name
        document.getElementsByClassName("myClass");
 
  // // Selecting Elements with tag 
        document.getElementsByTagName("div");
        document.getElementsByTagName("p");
        document.getElementsByTagName("h1");