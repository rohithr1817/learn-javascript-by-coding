// ✅ Creating a Student object
const student = {
    name: "Rohit",
    age: 22,
    course: "B.Tech",
    college: "HKBK College of Engineering",
    marks: {
      math: 85,
      science: 90,
      english: 88
    },
    // ✅ Method to display student details
    getDetails: function () {
      return `Student: ${this.name}, Age: ${this.age}, Course: ${this.course}, College: ${this.college}`;
    },
    // ✅ Method to calculate average marks
    getAverageMarks: function () {
      let total = this.marks.math + this.marks.science + this.marks.english;
      return total / 3;
    },
    // ✅ Method to check if student passed (pass mark = 40)
    isPassed: function () {
      return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
    }
  };
  
  // ✅ Using the object and calling methods
  console.log(student.getDetails());        // Output: Student: Rohit, Age: 22, Course: B.Tech, College: HKBK College of Engineering
  console.log("Average Marks:", student.getAverageMarks()); // Output: Average Marks: 87.67
  console.log("Result:", student.isPassed()); // Output: Result: Passed

  

    // 🛠 Explanation
    // Properties:

    // name, age, course, college → Basic details

    // marks (nested object) → Stores subject marks

    // Methods:

    // getDetails() → Returns student details

    // getAverageMarks() → Calculates average marks

    // isPassed() → Checks if the student passed



    // // Classes

    // class Toyato {
    //   start(){
    //     console.log("start")
    //   }
    //   stop(){
    //     console.log("stop")
    //   }
    //   setbrand(brand){
    //     this.brand = brand;
    //   }
    // }
    
    // // Create an instance of the Toyota class
    // let fortuner = new Toyato();
    // let innova = new Toyato();
    // const myCar = new Toyato();

    // console.log(fortuner.start()) // start
    // console.log(fortuner.stop()) // stop

    // // Set the brand of the car
    // myCar.setbrand("myCar");

    // // Check the brand property
    // console.log(myCar.brand); // Output: "Toyota"

  

    // //Constructor

    // A constructor in JavaScript is a special method within a class that is automatically called when a new instance of the class is created. 
    // It initializes the object's properties and can take parameters to set those properties. 
    // Essentially, it serves as a blueprint for creating and setting up new objects.

                       // // Constructor () method is:
                       // => automaticallly invoked by new
                       // => initializes the object
  
  // Create a class named Toyota with a constructor and methods
  // The constructor initializes the brand property

    class Toyota {
      constructor(brand,mileage) {
          this.brand = brand; // Initialize the brand property
          this.mileage = mileage; // Initialize the mileage property
      }
  
      start() {
          console.log("start");
      }
  
      stop() {
          console.log("stop");
      }
  }
  
  // Create an instance of the Toyota class with the brand name
  const benz = new Toyota("Benz",25);
  
  // Check the state of the benz object
  console.log(benz); // Output: Toyota { brand: 'Benz' , mileage: 25 }
  console.log(benz.brand); // Output: "Benz"




  // Example 2 for constructor

  // Define the Student class
class Student {
  // Constructor to initialize properties
  constructor(firstName, lastName, age, major, grades) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.major = major;
      this.grades = grades;
  }

  // Method to calculate the average grade
  calculateAverageGrade() {
      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return total / this.grades.length;
  }

  // Method to display student information
  displayInfo() {
      console.log(`Student Name: ${this.firstName} ${this.lastName}`);
      console.log(`Age: ${this.age}`);
      console.log(`Major: ${this.major}`);
      console.log(`Average Grade: ${this.calculateAverageGrade().toFixed(2)}`);
  }
}

// Creating an instance of the Student class
const student1 = new Student("John", "Doe", 20, "Computer Science", [90, 85, 88, 92]);

// Example usage
student1.displayInfo();



                          // // Inheritance
// Base class (Parent class)
class Animal {
  constructor(name) {
      this.name = name; // Set the name of the animal
  }
  sleep() {
      console.log(`${this.name} is sleeping.`); // Method to indicate sleeping
  }
  eat() {
      console.log(`${this.name} is eating.`); // Method to indicate eating
  }
  speak() {
      console.log(`${this.name} makes a noise.`); // Method to make a noise
  }
}

// Derived class (Child class)
class Dog extends Animal {
  speak() {
      console.log(`${this.name} barks.`); //  Method Override the speak method
  }
}

// Create an instance of the Dog class
const myDog = new Dog("Blacky");

// Use the methods
myDog.speak(); // Output: Rex barks.
myDog.sleep(); // Output: Rex is sleeping.
myDog.eat();   // Output: Rex is eating.


       // // Super() method
// The super() method is used to call the constructor of the parent class from the child class.
// This allows the child class to inherit properties and methods from the parent class.

// Base class (Parent class)

class Animal1 {
  constructor(name) {
      this.name = name; // Set the name of the animal
  }

  speak() {
      console.log(`${this.name} makes a noise.`); // Generic animal noise
  }
}

// Derived class (Child class)
class Dog1 extends Animal1 {
  constructor(name, breed) {
      super(name); // Call the parent class constructor
      this.breed = breed; // Set the breed of the dog
  }

  speak() {
      super.speak(); // Call the parent class speak method
      console.log(`${this.name} barks.`); // Specific behavior for dogs
  }
}

// Create an instance of the Dog class
const myDog1 = new Dog1("Rex", "Golden Retriever");

// Use the methods
myDog1.speak(); 
// Output:
// Rex makes a noise.
// Rex barks.



     // // Assignment 1
    //  Qs. You are creating a website for your college. Create a class User with 2 properties, name & email.
    //   It also has a method called viewData() that allows user to view website data.


    class User {
        constructor(name, email) {
            this.name = name; // Initialize the name property
            this.email = email; // Initialize the email property
        }
    
        viewData() {
            console.log(`User: ${this.name}, Email: ${this.email}`); // Method to view user data
        }
    }

    let stud1 = new User("Rohit","rohi@gmail.com");
    let stud2 = new User("Virat","virat@gmail.com");

    console.log(stud1.viewData());




    // Qs. Create a new class called Admin which inherits from User. 
    // Add a new method called editData to Admin that allows it to edit website data.

     class Admin extends User { 
        constructor(name, email) {
            super(name, email); // Call the parent class constructor
        }
    
        editData() {
            console.log(`${this.name} is editing website data.`); // Method to edit website data
        }
    } 

    let admin1 = new Admin("admin","admin@gmail.com");
    console.log(admin1.editData()); // Output: admin is editing website data.