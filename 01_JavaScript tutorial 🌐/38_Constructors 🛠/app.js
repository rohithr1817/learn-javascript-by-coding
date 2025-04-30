// Your JavaScript code here

// Constructor Function
// A constructor function is a special method for defining the properties and methods of objects.
// It is typically used to create multiple instances of similar objects.

// Example: Creating car objects

/*
const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: function() {
        console.log(`You drive the ${this.model}`); // 'this.model' refers to the model property of car1
    }
};

const car2 = {
    make: "Chevrolet",
    model: "Camaro",
    year: 2025,
    color: "blue",
    drive: function() {
        console.log(`You drive the ${this.model}`); // 'this.model' refers to the model property of car2
    }
};

const car3 = {
    make: "Dodge",
    model: "Charger",
    year: 2026,
    color: "silver",
    drive: function() {
        console.log(`You drive the ${this.model}`); // 'this.model' refers to the model property of car3
    }
};

// Calling the drive method for each car
car1.drive(); // Output: You drive the Mustang
car2.drive(); // Output: You drive the Camaro
car3.drive(); // Output: You drive the Charger

*/

//--------------------------------------------------------------------------

/*
A constructor function is needed in JavaScript to create multiple instances of similar objects efficiently. Here’s why using a constructor function is beneficial:

1. Code Reusability:
Instead of defining each object (like car1, car2, car3) separately, a constructor allows you to define a template for the object. This way, you can create many objects with the same structure without repeating code.
2. Easier Maintenance:
If you need to change the properties or methods of the objects, you only need to update the constructor function. This makes your code easier to maintain and less error-prone.
3. Dynamic Object Creation:
You can create new instances of objects dynamically. For example, you can create a new car object by simply calling the constructor with different values.
Example of a Constructor Function:
Here’s how you can use a constructor function to create car objects:
*/

// Constructor Function for Car
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {
        console.log(`You drive the ${this.model}`);
    };
}

// Creating instances of Car using new keyword
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Calling the drive method for each car
car1.drive(); // Output: You drive the Mustang
car2.drive(); // Output: You drive the Camaro
car3.drive(); // Output: You drive the Charger