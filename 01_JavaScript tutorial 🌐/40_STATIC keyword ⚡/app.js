// Your JavaScript code here

// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil {
    static PI = 3.14159; // Static property

    static areaOfCircle(radius) { // Static method
        return MathUtil.PI * radius * radius;
    }
}

// Accessing the static property
console.log(`Value of PI: ${MathUtil.PI}`); // Output: Value of PI: 3.14159

// Using the static method
const radius = 5;
const area = MathUtil.areaOfCircle(radius); // Output: Area of the circle with radius 5: 78.53975
console.log(`Area of the circle with radius ${radius}: ${area}`); // Output: Area of the circle with radius 5: 78.53975
// Note: Static properties and methods are accessed using the class name itself, not through instances of the class.


//------------------------------------------------------------------------------------------------


class Counter {
    static count = 0; // Static property to keep track of the count

    // Static method to increment the count
    static increment() {
        this.count++; // Increment the static count property
        console.log(`Current Count: ${this.count}`); // Display the current count
    }

    // Static method to reset the count
    static reset() {
        this.count = 0; // Reset the static count property
        console.log(`Count has been reset to: ${this.count}`);
    }
}

// Using the static methods
Counter.increment(); // Output: Current Count: 1
Counter.increment(); // Output: Current Count: 2
Counter.increment(); // Output: Current Count: 3

Counter.reset(); // Output: Count has been reset to: 0

Counter.increment(); // Output: Current Count: 1


//-------------------------------------------------------------------------------------

class User{
    static userCount = 0; // Static property to keep track of the number of users

    constructor(username){
        this.username = username; // Instance property for the username
        User.userCount++; // Increment the static userCount property when a new user is created
    }

    static getUserCount(){ // Static method to get the total number of users
        console.log(`Total users: ${User.userCount}`); // Display the total number of users
    }

    sayHello(){ // Instance method to greet the user
        console.log(`Hello, ${this.username}!`); // Display a greeting message with the username
    }
}

const user1 = new User("Alice"); // Create a new User instance with username "Alice"
const user2 = new User("Bob"); // Create another User instance with username "Bob"
const user3 = new User("Charlie"); // Create a third User instance with username "Charlie"

user1.sayHello(); // Output: Hello, Alice! // Call the instance method to greet user1
user2.sayHello(); // Output: Hello, Bob! // Call the instance method to greet user2
user3.sayHello(); // Output: Hello, Charlie! // Call the instance method to greet user3
User.getUserCount(); // Output: Total users: 3 // Call the static method to get the total number of users
  


//-------------------------------------------------------------------------------------------------

class Library {
    static totalBooks = 0; // Static property to keep track of total books

    constructor(name) {
        this.name = name; // Instance property for the library name
        this.books = []; // Instance property for the books in this library
    }

    // Instance method to add a book to this library
    addBook(book) {
        this.books.push(book); // Add the book to the instance's book collection
        Library.totalBooks++; // Increment the static totalBooks property
        console.log(`Added "${book}" to ${this.name}. Total books in library: ${Library.totalBooks}`);
    }

    // Static method to get the total number of books across all libraries
    static getTotalBooks() {
        return Library.totalBooks; // Return the static totalBooks property
    }
}

// Creating instances of Library
const library1 = new Library("City Library");
const library2 = new Library("Community Library");

// Adding books to the libraries
library1.addBook("The Great Gatsby"); // Output: Added "The Great Gatsby" to City Library. Total books in library: 1
library1.addBook("1984"); // Output: Added "1984" to City Library. Total books in library: 2
library2.addBook("To Kill a Mockingbird"); // Output: Added "To Kill a Mockingbird" to Community Library. Total books in library: 3

// Getting the total number of books in all libraries
console.log(`Total books in all libraries: ${Library.getTotalBooks()}`); // Output: Total books in all libraries: 3
