// Your JavaScript code here


// classList = Element property in JavaScript used to interact 
//             with an element's list of classes (CSS classes).
//          => Allows you to make reusable classes for many elements across your webpage.
// 
// Methods:
// 
//       add(className) - Adds the specified class to the element.
//       remove(className) - Removes the specified class from the element.
//       toggle(className) - Removes the class if present, adds it if not.
//       replace(oldClass, newClass) - Replaces an existing class with a new class.
//       contains(className) - Checks if the element has the specified class.

// Select the box and buttons
const myBox = document.getElementById('myBox');
const addClassButton = document.getElementById('addClass');
const removeClassButton = document.getElementById('removeClass');
const toggleClassButton = document.getElementById('toggleClass');
const checkClassButton = document.getElementById('checkClass');

// Add class when the button is clicked
addClassButton.addEventListener('click', () => {
    myBox.classList.add('highlight');
});

// Remove class when the button is clicked
removeClassButton.addEventListener('click', () => {
    myBox.classList.remove('highlight');
});

// Toggle class when the button is clicked
toggleClassButton.addEventListener('click', () => {
    myBox.classList.toggle('highlight');
});

// Check if the class is present when the button is clicked
checkClassButton.addEventListener('click', () => {
    if (myBox.classList.contains('highlight')) {
        alert('The highlight class is present!');
    } else {
        alert('The highlight class is NOT present.');
    }
});


       // Example 2 
//----------------------------------------------------------------------

//------- add() & remove()

const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", () => {
//     myButton.classList.add('enabled');
// })
// myButton.addEventListener("click", () => {
//     myButton.classList.remove('enabled');
// })

//---or

// myButton.addEventListener('click', () => {
// if (myButton.classList.contains('enabled')) {
//         myButton.classList.remove('enabled');
// } else {
//         myButton.classList.add('enabled');
// }
// });



//------- mouseover & mouseout

// myButton.addEventListener("mouseover",() => {
//     myButton.classList.add('hover');
// })
// myButton.addEventListener("mouseout",() => {
//     myButton.classList.remove('hover');
// })



//----------- toggle() ------------

// myButton.addEventListener("click", () => {
//     myButton.classList.toggle('enabled');
// })



//-------- replace(class , newClass)----

// myButton.classList.add('enabled');

// myButton.addEventListener("click",() => {
//     myButton.classList.replace('enabled','disabled');
// })


//-------- conatins() ---------

myButton.classList.add('enabled');

myButton.addEventListener('click', event => {
if (event.target.classList.contains('disabled')) {
        event.target.textContent += "🤬"
} else {
        event.target.classList.replace('enabled','disabled');
    }
});


//--------------------------------------------------------------------

//example-3

let butt = document.querySelectorAll(".btn4");

butt.forEach(button4 =>{
    button4.classList.add('enabled')
});

butt.forEach(button4 =>{
    button4.addEventListener("mouseover",event=>{
        event.target.classList.toggle('hover');
    });
    });
butt.forEach(button4 =>{
    button4.addEventListener("mouseout",event=>{
        event.target.classList.toggle('hover');
    });
});


butt.forEach(button4 => {
  button4.addEventListener('click', event => {
    if (event.target.classList.contains('disabled')) {
            event.target.textContent += "🤬"
    } else {
            event.target.classList.replace('enabled','disabled');
        }
    });
});