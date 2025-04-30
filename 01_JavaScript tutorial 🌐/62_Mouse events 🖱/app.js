// Your JavaScript code here


// eventListener = Listen for specific events to create interactive web pages
            //    events: click, mouseover, mouseout, keydown, keyup, focus, blur, change, submit
            //    .addEventListener(event,callBack)

// Define the events to listen for
const events = ['click', 'mouseover', 'mouseout'];

// Get the elements from the DOM
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// Add a click event listener to myBox
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
});

// Add a mouseover event listener to myBox
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it";
});

// Add a mouseout event listener to myBox
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});