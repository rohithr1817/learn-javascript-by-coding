// Your JavaScript code here

// Class = (ES6 feature) provides a more structured and cleaner way to 
//          work with objects compared to traditional constructor functions.
// Example: Using class with static keyword, encapsulation, and inheritance

//Traditional Constructor Function
/*
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.displayProduct = function() {
        console.log('Product: ${this.name}');
        console.log('Price: $${this.price.toFixed(2)}');
    };
    this.calculateTotal = function(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
const totalPrice = product1.calculateTotal(salesTax);
console.log('Total Price (with tax): $${totalPrice.toFixed(2)}');

 */

   // Note:
// Uses the function keyword to define a constructor.
// Methods are defined inside the constructor, which can lead to duplication if multiple instances are created.

//----------------------------------------------------------------------------------------

//using ES6 class syntax
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

// Display product details
product1.displayProduct();

// Calculate total price with tax
const totalPrice = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);

   // Note:
// Here Uses the class keyword to define a class.
// Methods are defined outside the constructor, which means they are shared among all instances, reducing memory usage