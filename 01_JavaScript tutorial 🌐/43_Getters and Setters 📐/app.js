
// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Person {
    constructor(name, age) {
        this._name = name; // Use underscore to indicate a private property
        this._age = age;   // Use underscore to indicate a private property
    }

    // Getter for the name property
    get name() {
        return this._name; // Returns the private _name property
    }

    // Setter for the name property
    set name(newName) {
        if (typeof newName === 'string' && newName.trim() !== '') { //The condition newName.trim() !== '' effectively checks if the string is not empty after removing any surrounding whitespace, which is important for validating user input.
            this._name = newName; // Update the private _name property
        } else {
            console.log('Invalid name. It must be a non-empty string.');
        }
    }

    // Getter for the age property
    get age() {
        return this._age; // Returns the private _age property
    }

    // Setter for the age property
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge; // Update the private _age property
        } else {
            console.log('Invalid age. It must be a positive number.');
        }
    }
}

// Creating an instance of the Person class
const person = new Person('Alice', 30);

// Using the getter to access properties
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30

// Using the setter to modify properties
person.name = 'Bob';      // Valid name
person.age = 35;          // Valid age

console.log(person.name); // Output: Bob
console.log(person.age);  // Output: 35


// Trying to set invalid values
person.name = '';         // Output: Invalid name. It must be a non-empty string.
person.age = -5;         // Output: Invalid age. It must be a positive number.


//------------------------------------------------------------------------------------------

class Rectangle {
    constructor(width, height) {
        this._width = width;  // Private property for width
        this._height = height; // Private property for height
    }

    // Getter for width
    get width() {
        return `${this._width.toFixed(2)}`; // Returns the private _width property
    }

    // Setter for width
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; // Update the private _width property
        } else {
            console.log('Width must be a positive number.');
        }
    }

    // Getter for height
    get height() {
        return `${this._height.toFixed(2)}`; // Returns the private _height property
    }

    // Setter for height
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight; // Update the private _height property
        } else {
            console.log('Height must be a positive number.');
        }
    }

    // Getter for area
    get area() {
        return `${(this._width * this._height).toFixed(2)}`; // Calculate area
    }
}

// Creating an instance of the Rectangle class
const rectangle = new Rectangle(5, 10);

// Using the getters to access properties
console.log(`Width: ${rectangle.width}`);  // Output: Width: 5
console.log(`Height: ${rectangle.height}`); // Output: Height: 10
console.log(`Area: ${rectangle.area}`);     // Output: Area: 50

// Using the setters to modify properties
rectangle.width = 7;  // Valid width
rectangle.height = 12; // Valid height

console.log(`New Width: ${rectangle.width}`);  // Output: New Width: 7
console.log(`New Height: ${rectangle.height}`); // Output: New Height: 12
console.log(`New Area: ${rectangle.area}`);     // Output: New Area: 84

// Trying to set invalid values
rectangle.width = -3; // Output: Width must be a positive number.
rectangle.height = 0; // Output: Height must be a positive number.