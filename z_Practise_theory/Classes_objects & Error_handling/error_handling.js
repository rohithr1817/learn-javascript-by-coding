              // Error handling in JavaScript
// 1. Try-Catch Block : means that if the code inside the try block throws an error, the catch block will be executed. 
                    // This allows you to handle the error gracefully without crashing the program.
// 2. Throwing Custom Errors : You can throw custom errors using the throw statement. 
              // This is useful for validating input or handling specific conditions in your code.
              let a = 5;
              let b = 6;
              console.log("a+b= ", a+b);
              console.log("a+b= ", a++);
              try {
                  // Code that may throw an error
                  console.error("a+b= ", a+c);     // This will throw an error because 'c' is not defined
              }catch (error) {
                  // Handle the error
                  console.error("An error occurred:", error);
                  console.error("An error occurred:", error.message);
              }
              
              console.log("a+b= ", ++b);
              console.log("a+b= ", ++a);