// Your JavaScript code here


const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; // Flag to check if the timer is running


function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Set start time
        timer = setInterval(update, 10); // Update every 10 milliseconds
        isRunning = true; // Set the timer as running
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer); // Stop the timer
        elapsedTime = Date.now() - startTime; // Calculate elapsed time
        isRunning = false; // Set the timer as not running
    }
}

function reset() {
    clearInterval(timer); // Stop the timer
    elapsedTime = 0; // Reset elapsed time
    isRunning = false; // Set the timer as not running
    display.textContent = "00:00:00:00"; // Reset display
}

function update() {
    const currentTime = Date.now(); // Get current time
    const elapsedTime = currentTime - startTime; // Calculate time elapsed
    const seconds = Math.floor((elapsedTime / 1000) % 60); // Get seconds
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60); // Get minutes
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24); // Get hours
    const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Get milliseconds

    // Format time as HH:MM:SS
    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds); // Format milliseconds
}

// Example HTML buttons to control the timer
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);