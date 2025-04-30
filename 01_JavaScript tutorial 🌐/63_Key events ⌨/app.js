// Your JavaScript code here

// eventListener = Listen for specific events to create interactive web page
//                 events : keydown, keyup, click, mouseover, mouseout, etc.
//                 event : an action that occurs as a result of user interaction with the web page
//                 document.addEventListener("event", function(){})

    document.addEventListener("keydown", event => {
        console.log(`Key dowm = ${event.key}`); // Log the event object to the console
    });
    document.addEventListener("keyup", event => {
        console.log(`Key dowm = ${event.key}`); // Log the event object to the console
    });




const myBox = document.getElementById("myBox");
const moveAmount = 20; // Amount to move the box in pixels
let x = 0;
let y = 0;

// document.addEventListener("keydown", event => {
//    // console.log(`Key dowm = ${event.key}`); // Log the event object to the console
//    myBox.textContent = "😁";
//    myBox.style.backgroundColor = "blue";
// });
// document.addEventListener("keyup", event => {
//     myBox.textContent = "🫡";
//     myBox.style.backgroundColor = "red";
// });


// Add a keydown event listener to the document
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault(); // Prevent default scrolling behavior
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount; // Move up
                break;
            case "ArrowDown":
                y += moveAmount; // Move down
                break;
            case "ArrowLeft":
                x -= moveAmount; // Move left
                break;
            case "ArrowRight":
                x += moveAmount; // Move right
                break;
        }
        // Update the position of myBox
        myBox.style.transform = `translate(${x}px, ${y}px)`;
    }
});