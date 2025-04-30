// Your JavaScript code here

// Element Selectors = Methods used to target and manipulate HTML elements 

//                     They allow you to select one or multiple HTML elements 
//                     from the DOM (Document Object Model).

// 1. document.getElementById() - Element OR NULL
// Returns the element with the specified ID or null if not found.

// 2. document.getElementsByClassName() - HTMLCollection
// Returns an HTMLCollection of elements with the specified class name.

// 3. document.getElementsByTagName() - HTMLCollection
// Returns an HTMLCollection of elements with the specified tag name.

// 4. document.querySelector() - Element OR NULL
// Returns the first element that matches the specified CSS selector or null if not found.

// 5. document.querySelectorAll() - NodeList
// Returns a NodeList of all elements that match the specified CSS selector.

const heading = document.getElementById("myH1");
console.log(heading.textContent); 
heading.style.color = 'red';
heading.style.backgroundColor = 'black';
heading.style.fontSize = '50px';
console.log(heading); 

//------------------------------------------------------------------------

let foods = document.getElementsByClassName("food");
console.log(foods); // HTMLCollection(3) [div.food, div.food, div.food]

foods[0].style.color = 'red';
foods[1].style.color = 'blue';  

// for(let food of foods) {
//     food.style.fontSize = '30px';
//     food.style.backgroundColor = 'Silver';
//     food.style.color = 'Red';
// }

// forEach is not available on HTMLCollection, so we convert it to an array first
// and then use forEach to iterate over the elements.
Array.from(foods).forEach((food) => {
    food.style.fontSize = '20px';
    food.style.backgroundColor = 'azure';
    food.style.color = 'blue';
});

//------------------------------------------------------------------------


let h4elements = document.getElementsByTagName("h4");
let li = document.getElementsByTagName("li");
console.log(h4elements); // HTMLCollection(3) [h4, h4, h4]
console.log(li); // HTMLCollection(3) [li, li, li]

h4elements[0].style.color = 'red';
h4elements[1].style.color = 'blue';

for(let h4 of h4elements) {
    h4.style.fontSize = '30px';
    h4.style.backgroundColor = 'Silver';
    h4.style.color = 'Red';
}

Array.from(li).forEach((li) => {
    li.style.fontSize = '15px';
    li.style.backgroundColor = 'azure';
    li.style.color = 'blue';
});


//------------------------------------------------------------------------

let h3 = document.querySelectorAll("h3"); // Selects the first h3 element
console.log(h3); // NodeList(3) [h3, h3, h3]

console.log(h3[0].textContent); // "Heading 1"
console.log(h3[1].textContent); // "Heading 2"

h3[0].style.color = 'green';
h3[1].style.color = 'purple';

h3.forEach((h3) => {
    h3.style.fontSize = '30px';
    h3.style.backgroundColor = 'grey';
    h3.style.color = 'violet';
});