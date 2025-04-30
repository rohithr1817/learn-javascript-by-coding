// Your JavaScript code here

// EXAMPLE 3 <li>

// STEP 1: CREATE THE ELEMENT
const newH1 = document.createElement("h1");


//-----------------------------------

// STEP 2: ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "New H1 Creator"
newH1.id = "newH1";
newH1.className = "newH1Class";
newH1.style.color = "red";
newH1.style.textAlign = "center";
   

//------------------------------------

// STEP 3: APPEND ELEMENT TO DOM
document.body.append(newH1); // append to the end of the body
document.body.prepend(newH1); // prepend to the beginning of the body
document.getElementById("box4").append(newH1); // append to the end of the list
// document.getElementById("box4").prepend(newH1); // prepend to the beginning of the list

// const box1 = document.getElementById("box1");
// document.body.insertBefore(newH1, box1); // insert before box4

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]); // insert before box4
         


//---------------------------------------

// REMOVE HTML ELEMENT

// document.body.removeChild(newH1); // remove the newH1 element from the body
document.getElementById("box4").removeChild(newH1); // remove the newH1 element from the list
                 
 
//--------------------------------------------------------------------------

     // EXAMPLE 2 <li> with text node


// EXAMPLE 3 <li>

// STEP 1: CREATE THE ELEMENT
const newListItem = document.createElement("li");

//-----------------

// STEP 2: ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut"; // 1. apple, 2. coconut, 3. orange, 4. banana
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//-----------------

// STEP 3: APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("Orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);


//------------------

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
document.getElementById("fruits").removeChild(newListItem);