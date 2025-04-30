// Your JavaScript code here

// 'this' Keyword
// The 'this' keyword = reference to the object where THIS is used.
// The value of 'this' depends on the immediate context in which it is called.
// 
// Example: Using 'this' in an object method
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function() {
        console.log(`Hi! I am ${this.name} my favorite food is ${this.favFood}`); // 'this.name' refers to the name property of person1
    }
};

// Calling the method
person1.sayHello(); // Output: Hi! I am Spongebob my favorite food is hamburgers


//Note: this keyword not works in arrow functions