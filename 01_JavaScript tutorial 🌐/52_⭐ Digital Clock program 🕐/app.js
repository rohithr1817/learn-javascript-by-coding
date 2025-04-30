// Your JavaScript code here

//Digital Clock program
// This function updates the clock every second

function updateClock() {
    const now = new Date(); // Get the current date and time
    let hours = now.getHours(); // Get the current hour in 24-hour format
    const meridiem = hours >= 12 ? "PM" : "AM"; // Determine if it's AM or PM

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert hours to 12-hour format

    // Pad hours, minutes, and seconds to ensure two digits
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Create a formatted time string
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    
    // Update the clock display
    document.getElementById("clock").textContent = timeString;
}

// Call updateClock once to set the initial time
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);