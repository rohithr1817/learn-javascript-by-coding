// array is a collection of elements, each identified by an index, and each may be of a different type.
// array elements can be of any type, including numbers, strings, and objects.

let mark_student1 = 34;
let mark_student2 = 45;
let mark_student3 = 56;


let stu_mark ={
    stu1 : 34,
    stu2 : 45,
    stu3 : 56
}

// let marks = [34,45,56];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks.length);


// print all the elements of an array
let heros = ["Superman","Batman","Spiderman","Ironman","Thor","Hulk","Captain America"];
// console.log(heros);


// this below line at index 1 will replace the element at index 1 
heros[1]="Black Panther"
// console.log(heros);


// print all the elements of an array  and for in loop is used to iterate over the properties of an object
for (let i in heros){
    console.log(heros[i]);
}   


// this is used to iterate over the values of an array
for (let hero of heros){
    console.log(hero.toUpperCase());
}


//difference between for in and for of loop
// for in loop is used to iterate over the properties of an object  and for of loop is used to iterate over the values of an array
for(let id=0; id<heros.length; id++){
    console.log(heros[id]);
}


    // Program to find the average marks of a class
let marks = [34,45,56,67,78,89,90,100];

let sum=0;

// sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5]+marks[6]+marks[7];
// console.log(marks.length);
// console.log(sum/marks.length);

for (let val of marks){
    sum = sum + val
}
let avg = sum/marks.length;
console.log(`Average marks of class is = ${avg}`);



   // program to calculate the 10 % discount on the items in the array
let items = [25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

// let i=0;
// //in for loop we cant count the index of the array so we use idx to count the index of the array indirectly
// for(let val of items){
//     console.log(`value at index ${i} is ${val}`);   
//     let offer =val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after 10% discount is ${items[i]}`);
//     i++;
// }

for(let i=0; i<items.length; i++){
    console.log(`value at index ${i} is ${items[i]}`); 
    let offer = items[i]/10;
    items[i] = items[i]-offer;
    console.log(`After 10% Discount the price will be ${items[i]}`);
}
