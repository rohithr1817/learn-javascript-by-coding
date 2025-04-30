// Your JavaScript code here

// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array.


function openFridge(...foods){
    console.log(foods);  //console.log(...foods); //it will separte 
}

function getFood(...foods){
    return foods;
}
const food1 = "AnnaSambar";
const food2 = "Biryani";
const food3 = "DalChawal";
const food4 = "Ragi MUddhe";

// openFridge(food1,food2,food3,food4);

const foods = getFood(food1,food2,food3,food4);
console.log(foods);



//----------------------------------------------------------------------------------------

//Example-2

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(2);
console.log(`Your total is $${total}`);

//------------------------------------------------------------------------------


function getAvg(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const avg = getAvg(10,10,10,10,10);
console.log(`Your Average is $${avg}`);

//----------------------------------------------------------------------------

   // function to combine strings

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants","III");
console.log(fullName);