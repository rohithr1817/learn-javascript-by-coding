// Your JavaScript code here

// Get the image and button elements
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

// Add a click event listener to the button

// myButton.addEventListener("click", event => {

//     //  // Hide the image
//     //  myImg.style.display = "none";
//     //  myButton.textContent = "Show Image";

//     if (myImg.style.display === "none") {
//         // Show the image
//         myImg.style.display = "block";
//         myButton.textContent = "Hide";
//     }
//     else{
//         // Show the image
//         myImg.style.display = "none";
//         myButton.textContent = "Show Image";
//     }    
// });

myButton.addEventListener("click", event => {

    if (myImg.style.visibility === "hidden") {
        // Show the image
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        // Show the image
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show Image";
    }    
});