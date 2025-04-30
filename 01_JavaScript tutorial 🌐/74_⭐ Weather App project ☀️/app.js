// // Your JavaScript code here

// // WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "b9868938f8382e9b24a57ce92efae810"; // API key for OpenWeatherMap
// https://home.openweathermap.org/api_keys
// Event listener for form submission
weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); // Prevent default form submission behavior

    const city = cityInput.value; // Get the city input value

    if (city) {
        try {
            const weatherData = await getWeatherData(city); // Fetch weather data
            displayWeatherInfo(weatherData); // Display the weather information
        } catch (error) {
            console.error(error); // Log any errors
            displayError(error.message); // Display error message
        }
    } else {
        displayError("Please enter a city"); // Prompt user to enter a city
    }
});

// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // Construct API URL

    const response = await fetch(apiUrl); // Fetch data from API
    if (!response.ok) {
        throw new Error("Could not fetch weather data"); // Handle errors
    }

    return await response.json(); // Return parsed JSON data
}

// Function to display weather information on the UI
function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data; // Destructure data

    card.textContent = ""; // Clear previous content
    card.style.display = "flex"; // Show the card

    // Create and append elements to display weather info
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city; // Set city name
    // tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)}°F`; // Convert temperature to Celsius
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; // Convert temperature to Celsius
    humidityDisplay.textContent = `Humidity: ${humidity}%`; // Set humidity
    descDisplay.textContent = description; // Set weather description
    weatherEmoji.textContent = getWeatherEmoji(id); // Get weather emoji

    // Add classes for styling
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Append elements to the card
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

// Function to get weather emoji based on weather ID
function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"; // Thunderstorm
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️"; // Drizzle
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; // Rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"; // Mist
        case (weatherId === 800):
            return "☀️"; // Clear
        case (weatherId > 800):
            return "☁️"; // Clouds
        default:
            return "🌈"; // Default emoji
    }
}

// Function to display error messages
function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message; // Set error message
    errorDisplay.classList.add("errorDisplay"); // Add class for styling

    card.textContent = ""; // Clear previous content
    card.style.display = "flex";
    card.appendChild(errorDisplay); // Append error message to card
}