// Array Methods
// 1. concat() - Joins two or more arrays, and returns a copy of the joined arrays
// 2. push() - Adds new elements to the end of an array, and returns the new length
// 3. pop() - Removes the last element of an array, and returns that element
// 4. toString() - Converts an array to a string, and returns the result
// 5. unshift() - Adds new elements to the beginning of an array, and returns the new length
// 6. shift() - Removes the first element of an array, and returns that element
// 7. forEach() - Calls a function for each array element
// 8. map() - Creates a new array with the result of calling a function for each array element
// 9. filter() - Creates a new array with every element in an array that pass a test
// 10. reduce() - Reduce the values of an array to a single value (going left-to-right)

// 11. includes() - Check if an array contains the specified element
// 12. indexOf() - Search the array for an element and returns its position
// 13. isArray() - Checks whether an object is an array
// 14. join() - Joins all elements of an array into a string
// 15. keys() - Returns a Array Iteration Object, containing the keys of the original array
// 16. lastIndexOf() - Search the array for an element, starting at the end, and returns its position
// 17. findIndex() - Returns the index of the first element in an array that pass a test
// 18. entries() - Returns a key/value pair Array Iteration Object
// 19. copyWithin() - Copies array elements within the array, to and from specified positions
// 20. from() - Creates an array from an object
// 21. fill() - Fill the elements in an array with a static value
// 22. find() - Returns the value of the first element in an array that pass a test


let veggis = ["Tomato", "Potato", "Onion", "Cabbage", "Carrot"];
let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
let marks = [34,45,56,67,78,89,90,100];

  // push() - Adds new elements to the end of an array, and returns the new length
fruits.push("Pineapple");
console.log(fruits);
// output: [ 'Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Pineapple' ]


  // pop() - Removes the last element of an array, and returns that element
deleteditems=fruits.pop();
console.log(deleteditems);
// output: Pineapple
console.log(fruits);
// output: [ 'Apple', 'Banana', 'Grapes', 'Mango', 'Orange' ]


  // toString() - Converts an array to a string, and returns the result
console.log(fruits.toString());
// output: Apple,Banana,Grapes,Mango,Orange
console.log(marks.toString());
// output: 34,45,56,67,78,89,90,100


 // concat() - Joins two or more arrays, and returns a copy of the joined arrays
let IndA = ["virat", "rohit", "rahul", "shikhar"];
let IndB = ["bumrah", "shami", "chahal", "kuldeep"];
let IndC = ["dhoni", "jadeja", "hardik", "pandya"];
let heroes = IndA.concat(IndB);
console.log(heroes);
// output: [ 'virat', 'rohit', 'rahul', 'shikhar', 'bumrah', 'shami', 'chahal', 'kuldeep' ]
let heroes1 = IndA.concat(IndB, IndC);
console.log(heroes1);
// output: [ 'virat', 'rohit', 'rahul', 'shikhar', 'bumrah', 'shami', 'chahal', 'kuldeep', 'dhoni', 'jadeja', 'hardik', 'pandya' ]


//  // unshift() - Adds new elements to the beginning of an array, and returns the new length
 let alpha1=["a","b","c","d","e"];
    alpha1.unshift("z");

console.log(alpha1);
// output: [ 'z', 'a', 'b', 'c', 'd', 'e' ]


// // shift() - Removes the first element of an array, and returns that element
let alpha2=["a","b","c","d","e"];
    alpha2.shift();

console.log(alpha2);
// output: [ 'b', 'c', 'd', 'e' ]


// // Slice() - Selects a part of an array, and returns the new array
let alpha3=["a","b","c","d","e"];
let res=alpha3.slice(1,3);
console.log(res);
// output: [ 'b', 'c' ]


// // splice() - Adds/Removes elements from an array and changes the original array
// // syntax (add,remove,replace) 
let alpha4=["a","b","c","d","e"];   
alpha4.splice(2,0,"z");  // 0 is used to remove the element here no element is removed
console.log(alpha4);
// output: [ 'a', 'b', 'z', 'c', 'd', 'e' ]

alpha4.splice(2,1,"y");  // here 1 means remove 1 element
console.log(alpha4);
// output: [ 'a', 'b', 'y', 'c', 'd', 'e' ]

alpha4.splice(2,2,"x","rcb"); // here 2 means remove 2 elements
console.log(alpha4);
// output: [ 'a', 'b', 'x', "rcb",'d', 'e' ]



// // // // ----------------Map() Method--------------------
// // The map() method creates a new array with the results of calling a function for every array element.
// // The map() method calls the provided function once for each element in an array, in order.
// // The map() method does not execute the function for array elements without values.
// // The map() method does not change the original array.

let arr=[1,2,3,4,5,6,7,8,9,10];

arr.map((val) => {    // each element of the array is passed to the callback function as an argument.
  console.log(val);  
})



// //  // ----- Filter() Method-----
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
    return val%2==0;          // for odd no use val%2! == 0
})
console.log(evenno);  // [ 2, 4, 6, 8, 10 ]




// //  //   ------------- reduce() Method -------------

// // // The reduce() method reduces the array to a single value.
 let numbers = [1,2,3,4,5,6,7,8,9,10];
 let sum = numbers.reduce((res, current) => {
     return res + current;
 })

  console.log(sum); // 55


// program to find greatest number in an array using reduce method
 let numb = [1,2,3,4,5,6,7,8,9,10];
let greater = numb.reduce((res, current) => {
    return res > current ? res : current;
})

 console.log(greater); // 10





        // Assgnment

// //program create a array of companies and perform the following operations 1) remove first comany from array 
// // 2) replace the second company with flipkart 3) add TCS at the end of the array

let company = ["Google", "Microsoft", "Facebook", "Apple", "Amazon"];

company.shift();
console.log(company);
// output: [ 'Microsoft', 'Facebook', 'Apple', 'Amazon' ]

company.splice(1,1,"Flipkart");
console.log(company);
// output: [ 'Microsoft', 'Flipkart', 'Apple', 'Amazon' ]

company.push("TCS");
console.log(company);
// output: [ 'Microsoft', 'Facebook', 'Apple', 'Amazon', 'TCS' ]