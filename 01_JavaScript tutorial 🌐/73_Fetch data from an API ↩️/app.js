// Your JavaScript code here

/* fetch = Function used for making HTTP requests to fetch resources.
           (JSON style data, images, files)
           Simplifies asynchronous data fetching in JavaScript and
           is used for interacting with APIs to retrieve and send
           data asynchronously over the web.
       // fetch(url, {options})
       // fetch(url, {method: "GET"})
       // fetch(url, {method: "POST"})
       // fetch(url, {method: "DELETE"})
       
*/

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))



async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // Get the Pokémon name from input
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Fetch Pokémon data
        if (!response.ok) {
            throw new Error("Could not fetch resource"); // Handle errors
        }

        const data = await response.json(); // Parse JSON response
        const pokemonSprite = data.sprites.front_default; // Get the Pokémon sprite URL
        const imgElement = document.getElementById("pokemonSprite"); // Get the image element
        imgElement.src = pokemonSprite; // Set the image source to the Pokémon sprite
        imgElement.style.display = "block"; // Make the image visible
    } catch (error) {
        console.error('Error fetching Pokémon data:', error); // Log any errors
    }
}

document.getElementById("fetchButton").addEventListener("click", fetchData);

/*

// Function to fetch Pokémon data
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // Get the Pokémon name from input

        // Check if the input is empty
        if (!pokemonName) {
            console.error("Please enter a Pokémon name.");
            return; // Exit the function if no name is provided
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Fetch Pokémon data

        if (!response.ok) {
            throw new Error("Could not fetch resource: " + response.statusText); // Handle errors
        }

        const data = await response.json(); // Parse JSON response

        // Check if sprites exist before accessing front_default
        if (data.sprites && data.sprites.front_default) {
            const pokemonSprite = data.sprites.front_default; // Get the Pokémon sprite URL
            const imgElement = document.getElementById("pokemonSprite"); // Get the image element
            imgElement.src = pokemonSprite; // Set the image source to the Pokémon sprite
            imgElement.style.display = "block"; // Make the image visible
        } else {
            console.error("Sprite not found in the response"); // Log if sprite is not found
        }
    } catch (error) {
        console.error('Error fetching Pokémon data:', error); // Log any errors
    }
}

// Call fetchData when needed, e.g., on button click
document.getElementById("fetchButton").addEventListener("click", fetchData);

*/