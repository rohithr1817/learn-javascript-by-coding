// IMAGE SLIDER

// Select all image elements within the .slides container
const slides = document.querySelectorAll(".slides img");

// Initialize the current slide index to 0 (first slide)
let slideIndex = 0;

// Variable to hold the interval ID for automatic slide transitions
let intervalId = null;

// Set up an event listener that runs the initializeSlider function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    // Check if there are any slides
    if (slides.length > 0) {
        // Show the first slide by adding the displaySlide class
        slides[slideIndex].classList.add("displaySlide");
        
        // Start an interval that calls nextSlide every 5 seconds (5000 milliseconds)
        intervalId = setInterval(nextSlide, 5000);
    }
}

// Function to show a specific slide based on the provided index
function showSlide(index) {
    // Wrap around if the index exceeds the number of slides
    if (index >= slides.length) {
        slideIndex = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    } else {
        slideIndex = index; // Set to the provided index
    }

    // Hide all slides by removing the displaySlide class
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Show the current slide by adding the displaySlide class
    slides[slideIndex].classList.add("displaySlide");
}

// Function to show the next slide
function nextSlide() {
    slideIndex++; // Increment the slide index
    showSlide(slideIndex); // Show the slide at the new index
}

// Function to show the previous slide
function prevSlide() {
    slideIndex--; // Decrement the slide index
    showSlide(slideIndex); // Show the slide at the new index
}