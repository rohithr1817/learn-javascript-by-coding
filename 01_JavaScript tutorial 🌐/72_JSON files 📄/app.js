// Your JavaScript code here

// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//   JSON.stringify() = converts a JS object to a JSON string.
//   JSON.parse() = converts a JSON string to a JS object

/*
In simple words, **JSON** (JavaScript Object Notation) is a way to store 
and exchange data that is easy for both humans and machines to read and write. 


### Key Points:
- **Format**: It looks like a simple text format with key-value pairs (like a dictionary) or lists (like an array).
- **Usage**: It's commonly used to send data between a server and a web application, such as when you load data from a website.
- **Example**: A JSON object might look like this:
  ```json
  {
      "name": "Alice",
      "age": 25,
      "hobbies": ["reading", "traveling"]
  }
  ```
### Summary:
JSON is a lightweight and easy-to-understand format for organizing 
and sharing data, making it a popular choice in web development.

*/

fetch('people.json')
  .then(response => response.json()) // Parse JSON
//   .then(values => values.forEach(value => console.log(value.name)));
//   .then(values => values.data.forEach(value => console.log(value)))
  .then(data => console.log(data)) // Work with JSON data
  .catch(error => console.error('Error fetching JSON:', error));



/*
const names =  ["ASH", "NOBITA", "SHINCHAN", "MR.BEAN"];

const jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {
    "name": "MR.BEAN",
    "age": 30,
    "isStudent": true,
    "hobbies": ["reading", "hiking", "coding"],
    "address": {
        "street": "123 Main St",
        "city": "Wonderland",
        "zip": "12345"
    }
}

const chnage = JSON.stringify(person);
console.log(chnage)
*/