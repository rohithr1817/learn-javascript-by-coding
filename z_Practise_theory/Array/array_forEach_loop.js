// // forEach Loop is a Higher Order Function or Method in JavaScript that is used to iterate over an array and perform some operation on each element of the array.
// // // // // // -------------  forEach() Method -------------
// // // // The forEach() method executes a provided function once for each array element.
// // // The forEach() method is not executed for empty elements.

// forEach loop is used to iterate over an array and perform some operation on each element of the array.
// It is a higher order function that takes a callback function as an argument.
// The forEach loop does not return anything.
// The forEach loop does not change the original array.
// The forEach loop is not used to filter or transform the array.


//  // arrowsum.forEach(callBack Function)

//  CallbackFunction : It is a function that is passed as an argument to another function.
//  The callback function is called for each element of the array.
//  The callback function takes three arguments: the current element, the index of the current element, and the array itself.
//  The callback function can take up to three arguments: currentValue, index, and array.
 
        // Real-World Example
        // To illustrate the concept of a callback function, let's use a real-world analogy:

        // Scenario: Ordering Food
        // Imagine you are at a restaurant, and you place an order for food. 
        // You tell the waiter what you want, and then you wait for your food to be prepared. 
        // While you wait, you can do other things, like chatting with friends or looking at the menu. 
        // Once your food is ready, the waiter brings it to your table.


    //  syntax => array.forEach(function(currentValue, index, array) {    code to be executed  }); 

function printValue(value) {
    console.log(value);
}

function callBack(printValue) {
    console.log("Food is ready");
    printValue("Pizza");
}

callBack(printValue);
// The output will be:
// Food is ready
// Pizza
// In this example, the callBack function takes another function (printValue) as an argument.



let arr=[1,2,3,4,5,6,7,8,9,10];

arr.forEach(function printval(val){    // each element of the array is passed to the callback function as an argument.
    console.log(val);  
})

// OR different way to write the above code
let arr1=["Apple","Banana","Mango","Orange","Grapes"];
arr1.forEach((val , idx ) => {    // each element of the array is passed to the callback function as an argument.
    console.log(val.toUpperCase() , idx);  
})

// let arr1=["Apple","Banana","Mango","Orange","Grapes"];
// arr1.forEach((val , idx , array ) => {    // each element of the array is passed to the callback function as an argument.
//     console.log(val.toUpperCase() , idx , array);  
// })
// output:
// APPLE 0 [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]   
// BANANA 1 [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]
// MANGO 2 [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]



                // //  ----- Map() Method-----
// // The map() method creates a new array with the results of calling a function for every array element.
// // The map() method calls the provided function once for each element in an array, in order.
// // The map() method does not execute the function for array elements without values.
// // The map() method does not change the original array.


let nums=[1,2,3,4,5,6,7,8,9,10];

let newArray = nums.map((val) => {    // each element of the array is passed to the callback function as an argument.
  return val*val; 
})
console.log(newArray); //  [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]




// //  //                ----- Filter() Method-----
// // // The filter() method creates a new array with array elements that passes a test or that give true for a condition/filter.
// // // This method does not change the original array.
// // // The filter() method calls the provided function once for each element in an array, in order.
// // // The filter() method does not execute the function for array elements without values.

let marks1 = [34,45,56,67,78,89,90,100];

let passMarks = marks1.filter((val) => {    // each element of the array is passed to the callback function as an argument.
    return val >= 50;
})
console.log(passMarks);  // [ 56, 67, 78, 89, 90, 100 ]

// or

let no = [1,2,3,4,5,6,7,8,9,10];

let evenno = no.filter((val) => {    // each element of the array is passed to the callback function as an argument.
    return val%2==0;
})
console.log(evenno);  // [ 2, 4, 6, 8, 10 ]




// //  //   ------------- reduce() Method -------------
// // // The reduce() method reduces the array to a single value.

// program to find the sum of all elements in an array using reduce method
let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = numbers.reduce((res, current) => {
    return res + current;
})

 console.log(sum); // 55

// program to find greatest number in an array using reduce method
 let numb = [1,2,3,4,5,6,7,8,9,10];
let greater = numb.reduce((prev, current) => {
    return prev > current ? prev : current; // ternary operator
})

 console.log(greater); // 10




// // Assgnment

// //  Program to print the square of each number in the array using forEach loop
let number=[1,2,3,4,5,6,7,8,9,10];

number.forEach((num) => {    // each element of the array is passed to the callback function as an argument.
    console.log(num**2);   // or num*num or Math.pow(num,2) 
})

// or

let calculateSquare = (num) => {    
    console.log(num**2);    
};
 
number.forEach(calculateSquare);



// // Assignament-2
    // Take a number n as input from the user. Create an array of n numbers from 1 to n.
    // Use the reduce method to calcuate the sum of all the numbers in the array.
    // Use the reduce method to calculate the product of all the numbers in the array.

    let n = prompt("Enter a number: ");
    let arr2 = [];
    for(let i=1; i<=n; i++){
        arr2.push(i);
    }
    console.log(arr2);  // arr2 = [1, 2, 3, 4, 5]
    
    const sum1=arr2.reduce((prev, current) => {  
        return prev + current;
    });
    
    console.log(`Sum is ${sum1}`); // 15
    
    const product1=arr2.reduce((prev, current) => {  
        return prev * current;
    });
    console.log(`Product is ${product1}`); // 120
