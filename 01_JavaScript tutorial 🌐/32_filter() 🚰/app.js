// Your JavaScript code here

// .filter() = creates a new array ny filtering out elements

const numbers = [1, 2, 3, 4, 5, 6]; // Original array
const evenNumbers = numbers.filter((number) => number % 2 === 0); // Filtering even numbers

console.log(evenNumbers); // Output: [2, 4, 6]



const oddNumber = numbers.filter(oddNumbers); // Filtering odd numbers
console.log(oddNumber); // Output: [1, 3, 5]
function oddNumbers(number) {
          return number % 2 !== 0;
};


//-----------------------------------------------------------------------------


const ages = [12, 15, 18, 20, 25, 30]; // Original array

function isAdult(age) {
          return age >= 18; // Filtering adults (18 and older)
}
const adults = ages.filter(isAdult); // Filtering adults    
console.log(adults); // Output: [18, 20, 25, 30]

//------------------------------------------------------------------------------

const pokemon = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Gengar"]; // Original array

function getShortNames(name) {
          return name.length <= 6; // Filtering Pokémon with short names (6 characters or less)
}
function getLongerNames(name) {
          return name.length >= 6; // Filtering Pokémon with short names (6 characters or less)
}
const shortNames = pokemon.filter(getShortNames); // Filtering Pokémon with short names
console.log(shortNames); // Output: ["Pikachu", "Squirtle"]
const longerNames = pokemon.filter(getLongerNames); // Filtering Pokémon with short names
console.log(longerNames); // Output: ["Charmander", "Bulbasaur", "Gengar"]