// Your JavaScript code here

// array = a variable like structure that can hold more than 1 value

// let fruits = "apple";
let fruits = ["apple","mango","banana"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// fruits[2]="papaya"
// console.log(fruits)

     //push()
fruits.push("guava")
console.log(fruits);

     //pop()
fruits.pop()
console.log(fruits);

     //unshift() = add to the starting of array
fruits.unshift("mango") 
console.log(fruits);

    // shift() = remove  the elememt at starting of array
 fruits.shift() 
 console.log(fruits);

//----------------------------------------------------------------------------------------

 let numOfFruits = fruits.length;
 let index = fruits.indexOf("apple")
 let index1 = fruits.indexOf("mango")
 let index2 = fruits.indexOf("vegies")

 console.log(index , index1 , index2) //output: 0 1 -1 (-1 indicate it is not found)

//---------------------------------------------------------------------------------------

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// for(let i=0;i<fruits.length;i+=2){
//     console.log(fruits[i]);
// }
// for(let i=fruits.length-1 ; i>=0 ; i-- ){
//     console.log(fruits[i]);
// }

let veges = ["carrot","potato","beans"]

veges.sort().reverse();
for(let vege of veges){
    console.log(vege);
}