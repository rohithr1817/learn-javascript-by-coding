// Your JavaScript code here

// Object = A collection of related properties and/or methods.
//          Objects can represent real-world entities (people, products, places).
// 
//     Syntax:
            // const objectName = {
            //     key: value,
            //     methodName: function() {}
            // };

// Example: Creating person objects
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi! I am Spongebob!");
    },
    sayBye: function() {
        console.log("Goodbye!");
    }
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey I'm Patrick..."),
    sayBye: function() {
        console.log("Bye...");
    }
};

// Accessing properties and methods
console.log(person1.firstName); // Output: Spongebob
console.log(person1.lastName);  // Output: Squarepants
person1.sayHello();             // Output: Hi! I am Spongebob!
person1.sayBye();               // Output: Goodbye!

console.log(person2.firstName); // Output: Patrick
person2.sayHello();             // Output: Hey I'm Patrick...
person2.sayBye();               // Output: Bye...