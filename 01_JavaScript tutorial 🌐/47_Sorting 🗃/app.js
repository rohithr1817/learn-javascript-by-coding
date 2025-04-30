// Your JavaScript code here

// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "coconut", "orange", "pineapple"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort(); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// To sort numbers correctly, we need to provide a compare function
// compare function = function that defines the sort order of the elements

// Default sort (incorrect for numbers)
numbers.sort(); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// Correct ascending sort
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Correct descending sort
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/*
Summary:
    Ascending Order: The compare function (a, b) => a - b sorts the numbers from smallest to largest.
    Descending Order: The compare function (a, b) => b - a sorts the numbers from largest to smallest.

Return Values:
    If a - b is negative: a is less than b, so a should come before b.
    If a - b is zero: a is equal to b, and their order does not change.
    If a - b is positive: a is greater than b, so b should come before a.
    Compare 5 and 3: 5 - 3 = 2 (positive) → 3 comes before 5.
    Compare 5 and 8: 5 - 8 = -3 (negative) → 5 stays before 8.


Return Values:
    If b - a is negative: b is less than a, so b should come after a.
    If b - a is zero: b is equal to a, and their order does not change.
    If b - a is positive: b is greater than a, so a should come after b.
    Compare 5 and 3: 3 - 5 = -2 (negative) → 5 stays before 3.
    Compare 5 and 8: 8 - 5 = 3 (positive) → 8 comes before 5.

*/

//--------------------------------------------------------------------------

const people = [{name: "Ash", age:10, gpa:3.0},
                {name: "Misty", age:12, gpa:3.5},
                {name: "Brock", age:11, gpa:4.0},
                {name: "Gary", age:13, gpa:2.5}
            ];
    
// people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
// console.log(people); // Sorted array of objects by age
// people.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name in alphabetical order
// console.log(people); // Sorted array of objects by name
people.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name in alphabetical order
console.log(people); // Sorted array of objects by name in reverse order