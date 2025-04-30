// Your JavaScript code here


// Inheritance = Allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               Helps with code reusability.

class Animal {
    alive = true;
    
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`); 
    }
}

class Rabbit extends Animal {
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal {
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}


const rabbit = new Rabbit();
rabbit.alive = false; // This will not affect the parent class
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive); // false
rabbit.eat(); // This rabbit is eating
rabbit.sleep(); // This rabbit is sleeping
rabbit.run(); // This rabbit is running

console.log(fish.alive); // true
fish.eat(); // This fish is eating
fish.sleep(); // This fish is sleeping
fish.swim(); // This fish is swiming

console.log(hawk.alive); // true
hawk.eat(); // This hawk is eating
hawk.sleep(); // This hawk is sleeping
hawk.fly(); // This hawk is flying
