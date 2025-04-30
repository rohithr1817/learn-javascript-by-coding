// Your JavaScript code here


// Nested Objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object.

//                  Example: A person object with an address object inside of it.
//                  Example: A shopping cart object with items inside of it.


// Example of a Person object with nested Address and ContactInfo objects
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    contactInfo: {
        email: 'john.doe@example.com',
        phone: '555-1234'
    }
};

// Accessing nested object properties
console.log(person.name); // Output: John Doe
console.log(person.address.city); // Output: Anytown

for(const info in person.contactInfo) {
    console.log(info + ': ' + person.contactInfo[info]);
}
// Output: email: john.doe@example.com  
//         phone: 555-1234


// console.log(person.contactInfo.email); // Output: john.doe@example.com
// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }
// // Output: name: John Doe, age: 30, address: [object Object], contactInfo: [object Object]


//-------------------------------------------------------------------------------------------------------

// Example of a ShoppingCart object with nested items
const shoppingCart = {
    items: [
        {
            name: 'Keyboard',
            price: 29.99,
            quantity: 1
        },
        {
            name: 'Mouse',
            price: 19.99,
            quantity: 2
        },
        {
            name: 'Monitor',
            price: 199.99,
            quantity: 1
        }
    ],
    totalPrice: function() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0); // 0 is the initial value of total
    }
};


// Accessing shopping cart items and calculating total price
console.log(shoppingCart.items[0].name); // Output: Keyboard
console.log(shoppingCart.items[1].name); // Output: Mouse
console.log('Total Price: $' + shoppingCart.totalPrice().toFixed(2)); // Output: Total Price: $269.97


//---------------------------------------------------------------------------------------------------


/*
In this example:
  Person is the parent class that contains an instance of Address.
  Address is the child class that provides specific details about the address of the person.
*/

// Parent class Person
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // Creating a new Address instance
    }
}

// Child class Address
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


// Creating an instance of Person
const person1 = new Person("Spongebob", 30, "124 Conch St", "Bikini Bottom", "USA");

// Output the person's details
console.log(person1); // Output: Person { name: 'Spongebob', age: 30, address: Address { street: '124 Conch St', city: 'Bikini Bottom', country: 'USA' } }
console.log(person1.address); // Output: Address { street: '124 Conch St', city: 'Bikini Bottom', country: 'USA' }


