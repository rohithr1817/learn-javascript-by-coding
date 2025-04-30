// Your JavaScript code here

// DOM Navigation = The process of navigating through the structure 
//                  of an HTML document using JavaScript.

// .firstElementChild
// Returns the first child element of the specified element.

// .lastElementChild
// Returns the last child element of the specified element.

// .nextElementSibling
// Returns the next sibling element of the specified element.

// .previousElementSibling
// Returns the previous sibling element of the specified element.

// .parentElement
// Returns the parent element of the specified element.

// .children
// Returns a live HTMLCollection of child elements of the specified element.


// -------firstElementChild-------
const food = document.querySelector('#foods');

const firstFood = food.firstElementChild;
firstFood.style.color = 'green'; // Change the color of the first food item to red
firstFood.style.fontSize = '20px'; // Change the font size of the first food item to 30px
firstFood.style.backgroundColor = 'lightblue'; // Change the background color of the first food item to yellow
console.log(firstFood); // <li>Anna Sambhar</li>
console.log(firstFood.innerText); // Anna Sambhar

//------------------

// const ulements = document.querySelectorAll('ul');   

// ulements.forEach((ul) => {
//     const firstChild = ul.firstElementChild; // Get the first child element of the current <ul>
//     firstChild.style.color = 'green'; // Change the color of the first child element to red
//     firstChild.style.fontSize = '30px'; // Change the font size of the first child element to 30px
//     firstChild.style.backgroundColor = 'lightblue'; // Change the background color of the first child element to yellow
// });

// console.log(ulements); // NodeList(2) [ul#fruits, ul#vegetables]

//-------------------------------------------------------------------------------------

// -------lastElementChild-------

// const element = document.querySelector('#fruits');
// const lastElement = element.lastElementChild; // Get the last child element of the <ul> with id "fruits"
// lastElement.style.color = 'red'; // Change the color of the last child element to red
// lastElement.style.backgroundColor = 'yellow'; // Change the background color of the last child element to yellow

//-------------

//  const ulements = document.querySelectorAll('ul');
//  ulements.forEach((ul) => {
//      const lastChild = ul.lastElementChild; // Get the last child element of the current <ul>
//      lastChild.style.color = 'red'; // Change the color of the last child element to red
//      lastChild.style.fontSize = '30px'; // Change the font size of the last child element to 30px
//      lastChild.style.backgroundColor = 'yellow'; // Change the background color of the last child element to yellow
//  });


 //--------------------------------------------------------------------------------------
// -------nextElementSibling-------

// const nextelement = document.querySelector('#fruits'); // Select the <ul> with id "vegetables"
// const nextElement = nextelement.nextElementSibling; // Get the next sibling element of the <ul> with id "vegetables"
// nextElement.style.color = 'blue'; // Change the color of the next sibling element to blue
// nextElement.style.fontSize = '30px'; // Change the font size of the next sibling element to 30px
// nextElement.style.backgroundColor = 'pink'; // Change the background color of the next sibling element to pink


//-----------------------------------------------------------------------------------------

// -------previousElementSibling-------
// const prevelement = document.getElementById('vegetables'); // Select the <ul> with id "vegetables"
// const previousElement = prevelement.previousElementSibling; // Get the previous sibling element of the <ul> with id "vegetables"
// previousElement.style.backgroundColor = 'purple'; // Change the color of the previous sibling element to purple
// previousElement.style.fontSize = '30px'; // Change the font size of the previous sibling element to 30px


//-----------------------------------------------------------------------------------------
// -------parentElement-------

// const parentElement = document.querySelector('#Potato'); // Select the <ul> with id "vegetables"
// const parent = parentElement.parentElement; // Get the parent element of the <ul> with id "vegetables"
// parent.style.backgroundColor = 'orange'; // Change the background color of the parent element to orange

//-----------------------------------------------------------------------------------------
// -------children-------
const children = document.querySelector('#vegetables').children; // Select the <ul> with id "vegetables" and get its child elements
console.log(children); // Log the child elements to the console
console.log(children[0]); // Log the first child element to the console
console.log(children[1]); // Log the second child element to the console
children[2].style.color = 'red'; // Change the color of the first child element to red

Array.from(children).forEach((child) => {  // Convert the HTMLCollection to an array and iterate over each child element
    console.log(child); // Log each child element to the console
    child.style.color = 'red'; // Change the color of each child element to red
    child.style.fontSize = '30px'; // Change the font size of each child element to 30px
    child.style.backgroundColor = 'yellow'; // Change the background color of each child element to yellow
}); // Convert the HTMLCollection to an array and iterate over each child element