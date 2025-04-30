
// NodeList = A static collection of HTML elements selected by (id, class, or element).
//            Can be created using querySelectorAll().
//            Similar to an array, but does not have methods like (map, filter, reduce).
//            NodeList does not automatically update to reflect changes in the DOM.

/*
Note:
If you need to use array methods like map, filter, or reduce, you can convert the NodeList to an array using Array.from() or the spread operator ([...]):

const boxesArray = Array.from(boxes);
// or
const boxesArray = [...boxes];
*/

// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Add a click event listener to the button
document.getElementById('changeColorButton').addEventListener('click', () => {
    // Iterate over the NodeList and change the background color of each box
    boxes.forEach((box, index) => {
        box.style.backgroundColor = `hsl(${index * 60}, 100%, 50%)`; // Change color based on index
    });
});


//---------------------------------------------------------------------------------------

// Select all buttons with the class 'myButtons'
const buttons = document.querySelectorAll('.myButtons');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Change the background color of the clicked button
        button.style.backgroundColor = 'lightblue';
    });
});

//----------------------------------------------------------------------------------------

//mouseover event
const btn2 = document.querySelectorAll('.myButtons');
btn2.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = 'lightgreen';
    });
    btn.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'pink';
    });
});

//----------------------------------------------------------------------------------------

let Btn = document.querySelectorAll('.myButtons');

// Step1: Add an Element

const newButton = document.createElement('button');

newButton.textContent = 'Button 5'; // Step2: Add text to the button
// newButton.classList ='myButtons';
newButton.classList.add('myButtons');

document.body.appendChild(newButton); // Step3

console.log(Btn);

Btn = document.querySelectorAll('.myButtons');
console.log(Btn);


// Remove the element

Btn.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        Btn = document.querySelectorAll('.myButtons');
        console.log(Btn)
    });
});