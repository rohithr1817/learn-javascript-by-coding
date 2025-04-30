

// id="heading" in css #heading
// id="heading" in html <h1 id="heading">Hello World!</h1>
// in css #heading { color: red; }

// class="myClass" in css .myClass
// class="myClass" in html <h1 class="myClass">Hello World!</h1>
// in css .myClass { color: red; }


// let heading = document.getElementById("heading");          // if there is no id it will return null
//  console.log(heading);
// heading.innerHTML = "Hello World!"; // Change the text of the heading
// heading.style.color = "silver"; // Change the color of the heading


// let className = document.getElementsByClassName("myClass");  //  Returns a live HTMLCollection (which can be empty) if no elements are found.
// console.log(className);
// className[0].innerHTML = "Hello World!"; // Change the text of the heading
// className[1].innerHTML = "JAVASCRIPT"; // Change the text of the heading



let oneselector = document.querySelector("h2"); // Returns the first element that matches the selector
let oneselector1 = document.querySelector(".myClass"); // Returns the first element that matches the selector
console.log(oneselector1);
console.log(oneselector);
// oneselector.innerHTML = "QuerySelect"; // Change the text of the heading


let allselector = document.querySelectorAll("h2"); // Returns a NodeList (which is static) of all elements that match the selector
let allselector2 = document.querySelectorAll(".myClass"); // Returns a NodeList (which is static) of all elements that match the selector
console.log(allselector2);
console.log(allselector);   
// allselector.innerHTML= "Hello World!"; // Change the text of the heading



        // // DOM Manipulation Properties:

            // tagname : returns tag for element NodeList
            // innerText : returns the text content of the element and all its childrenl
            // innerHtml : returns the plain text or HTML contents in the element
            // textContent : returns the textual content even for hiddem elements




            // assignment-1 append Namasthe to the header tag using innerText property
let header= document.querySelector("header"); // Returns the first element that matches the selector
console.log(header.tagName); // Returns the tag name of the element
console.log(header.innerText); // Returns the text content of the element and all its children
console.log(header.innerHTML); // Returns the plain text or HTML contents in the element
console.log(header.textContent); // Returns the textual content even for hiddem elements
header.innerText = header.innerText   + " "+  "Namasthe"; // Change the text of the heading


           // assignment-2 acees all h2 elements and give unique names to them using innerText property
let h2 = document.querySelectorAll("h2"); // Returns a NodeList (which is static) of all elements that match the selector
console.log(h2); // Returns the first element that matches the selector
h2[0].innerText = "First h2 changed"; 
h2[1].innerText = "Second h2 changed"; 
h2[2].innerText = "Third h2 changed"; 

  // or
idx=0;
for(let h21 of h2){
    console.log(h21); // Returns the first element that matches the selector
    h21.innerText = `New Elements changed ${idx}`; // Change the text of the heading
    idx++;
}
