  
  const URL ="https://catfact.ninja/fact"; // URL of the API
// Fetching data from the API
let p = document.querySelector("#para"); // Selecting the paragraph element to display the fact
let btn = document.querySelector("#btn"); // Selecting the button element to fetch a new fact


// const getFacts = async () => {
//     console.log("Fetching data from the API..."); // Log message indicating data fetching
//     let response = await fetch(URL);
//     console.log(response); // Promise {<pending>}
//     let data = await response.json(); // Convert the response to JSON 
//     p.innerText = data.fact; // Display the fact in the paragraph element
// };


  // or
  //using promises 

    function getFacts() {
    console.log("Fetching data from the API..."); // Log message indicating data fetching
    fetch(URL) // Fetching data from the API
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            p.innerText = data.fact; // Display the fact in the paragraph element
        })
        .catch(error => console.error('Error fetching data:', error)); // Handle errors

        }

    btn.addEventListener("click", getFacts); // Adding an event listener to the button to fetch a new fact on click











// Example of using fetch to get a random cat fact usung async/await
// This code fetches a random cat fact from the Cat Fact API and logs it to the console. 

    // const fetchCatFacts = async () => {
    //     try {
    //         const response = await fetch('https://catfact.ninja/fact'); // Fetching the cat fact
    //         if (!response.ok) { // Check if the response is okay
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json(); // Convert the response to JSON
    //         console.log(data.fact); // Log the cat fact to the console
    //     } catch (error) {
    //         console.error('Error fetching cat fact:', error); // Handle errors
    //     }
    // };

    // fetchCatFacts(); // Invoke the function to fetch cat facts



// fetch('https://catfact.ninja/fact') // URL to fetch a random cat fact
//     .then(response => {
//         if (!response.ok) { // Check if the response is okay
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Convert the response to JSON
//     })
//     .then(data => {
//         console.log(data.fact); // Log the cat fact to the console
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error); // Handle errors
//     });