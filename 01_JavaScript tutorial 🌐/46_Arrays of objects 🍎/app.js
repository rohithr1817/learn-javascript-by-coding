// Your JavaScript code here

const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }
];

console.log(fruits[0].name);
console.log(fruits[0].color)
console.log(fruits[0].calories);
console.log(fruits[1].name);

fruits.push({ name: "kiwi", color: "green", calories: 42 });
console.log(fruits);


fruits.unshift({ name: "grape", color: "purple", calories: 62 }); // Add to the beginning of the array
console.log(fruits);  


// fruits.pop(); // Remove the last item from the array
// console.log(fruits);
// Remove 2 items starting from index 1
// fruits.splice(1, 2);
// Output the modified fruits array

// console.log(fruits);


//---------- forEach() -----------------

fruits.forEach((fruit) => {
    console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}, Calories: ${fruit.calories}`);
})

//---------- map() -----------------
const fruitNames = fruits.map((fruit) =>{
    return fruit.color
    });
console.log(fruitNames); // Output the array of fruit names

//---------- filter() -----------------
const highCalorieFruits = fruits.filter((fruit) => {
    return fruit.calories > 100; // fruit.color === "yellow";
});
console.log(highCalorieFruits); // Output the array of high-calorie fruits

//---------- reduce() -----------------
const totalCalories = fruits.reduce((accumulator, fruit) => {
    return accumulator + fruit.calories;
}, 0);

console.log(totalCalories); // Output the total calories of all fruits

const maxCalories = fruits.reduce((max, fruit) => {
    return Math.max(max, fruit.calories);
}, 0);
console.log(maxCalories); // Output the maximum calories of all fruits