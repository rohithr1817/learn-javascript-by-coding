// Your JavaScript code here

// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//            [] = to perform array destructuring
//            {} = to perform object destructuring

// EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;

// Swap the values using destructuring assignment
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1


// Example 2: Array Destructuring
// Extracting Values from an Array

const fruits = ['apple', 'banana', 'cherry', "guava", "orange"];

// Destructuring assignment
const [firstFruit, secondFruit, thirdFruit, ...moreFruits] = fruits;

console.log(firstFruit);  // Output: apple
console.log(secondFruit); // Output: banana
console.log(moreFruits); // Output: [] (empty array, as there are no more fruits)



//Example 3: Skipping Items in Array Destructuring

const colors = ['red', 'green', 'blue', 'yellow'];

// Destructuring with skipping
const [primaryColor, , secondaryColor] = colors;

[colors[0], colors[2]] = [colors[2], colors[0]]; // Swap the first and third elements
console.log(colors); // Output: [ 'blue', 'green', 'red', 'yellow' ]

console.log(primaryColor);  // Output: red
console.log(secondaryColor); // Output: blue


//Example 4: Default Values in Array Destructuring

const numbers = [1];

// Destructuring with a default value
const [firstNumber, secondNumber = 10] = numbers;

console.log(firstNumber);  // Output: 1
console.log(secondNumber); // Output: 10


// Example 5: Object Destructuring
// Extracting Values from an Object

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Destructuring assignment
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 30



//Example 6: Renaming Variables in Object Destructuring
const user = {
    username: 'john_doe',
    email: 'john@example.com'
};

// Destructuring with renaming
const { username: userName, email: userEmail } = user;

console.log(userName);  // Output: john_doe
console.log(userEmail); // Output: john@example.com



//Example 7: Default Values in Object Destructuring
const settings = {
    volume: 50,
    brightness: 70
};

// Destructuring with a default value
const { volume, contrast = 100 } = settings;

console.log(volume);   // Output: 50
console.log(contrast); // Output: 100



//Example 8: Nested Destructuring
const student = {
    name1: 'Bob',
    grades: {
        math: 90,
        science: 85
    }
};

// Nested destructuring
const { name1, grades: { math, science } } = student;

console.log(name1);   // Output: Bob
console.log(math);   // Output: 90
console.log(science); // Output: 85


//Example 9: Function Parameters with Destructuring
function displayInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const userInfo = {
    name: 'Charlie',
    age: 25
};

// Passing an object to the function
displayInfo(userInfo); // Output: Name: Charlie, Age: 25