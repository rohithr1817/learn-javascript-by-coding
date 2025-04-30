// Your JavaScript code here


// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (superclass).
//         this = this object
//         super = the parent

//         super() = calls the constructor of the parent class
//         super.method() = calls the method of the parent class
//         super.property = accesses the property of the parent class
//         super() must be called before using "this" in the constructor of a subclass

// Parent class
class Animal {
    constructor(name, age) { // Add age as a parameter
        this.name = name; // Property of the Animal class
        this.age = age;   // Property of the Animal class
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
    age() {
        console.log(`Age: ${this.age}`);
    }

    move(Speed) {
        console.log(`${this.name} runs at ${Speed} km/h.`);
    }
}

// Subclass: Rabbit
class Rabbit extends Animal {
    constructor(name, age, runningSpeed) {
        super(name, age); // Call the constructor of the parent class
        this.runningSpeed = runningSpeed; // Property of the Rabbit class
    }

    speak() {
        console.log(`${this.name} squeaks. Age: ${this.age}. Running Speed: ${this.runningSpeed}`); 
        // Overriding the speak method
        super.speak(); // Call the parent class method
        super.age(); // Call the parent class method
        super.move(this.runningSpeed); // Call the parent class method
    }

    run() {
        console.log(`${this.name} runs at ${this.runningSpeed} km/h.`);
    }
}

// Subclass: Fish
class Fish extends Animal {
    constructor(name, age, swimmingSpeed) {
        super(name, age); // Call the constructor of the parent class
        this.swimmingSpeed = swimmingSpeed; // Property of the Fish class
    }

    speak() {
        console.log(`${this.name} bubbles. Age: ${this.age}. Swimming Speed: ${this.swimmingSpeed}`);
        super.move(this.swimmingSpeed); // Call the parent class method
    }

}

// Subclass: Hawk
class Hawk extends Animal {
    constructor(name, age, flyingSpeed) {
        super(name, age); // Call the constructor of the parent class
        this.flyingSpeed = flyingSpeed; // Property of the Hawk class
    }

    speak() {
        console.log(`${this.name} screeches. Age: ${this.age}. Flying Speed: ${this.flyingSpeed}`);
    }

}

// Creating instances of each class
const rabbit = new Rabbit('Bunny', 2, 30);
const fish = new Fish('Goldie', 1, 10);
const hawk = new Hawk('Hawkeye', 3, 50);

// Calling the speak method for each instance
rabbit.speak(); // Output: Bunny squeaks. Age: 2. Running Speed: 30
fish.speak();   // Output: Goldie bubbles. Age: 1. Swimming Speed: 10
hawk.speak();   // Output: Hawkeye screeches. Age: 3. Flying Speed: 50

/*
Key Points:
   => Constructor Call: In each subclass (Rabbit, Fish, Hawk), the super(name) call is used to invoke the constructor of the Animal class, allowing the subclass to inherit properties from the parent class.

   => Method Overriding: Each subclass overrides the speak method to provide its own implementation, demonstrating polymorphism.

   => Instance Creation: Instances of each subclass are created, and their respective speak methods are called to show how they behave differently while still sharing the common structure defined in the Animal class.
*/