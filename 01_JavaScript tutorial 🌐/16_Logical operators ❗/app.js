// Your JavaScript code here
// Logical operators = used to combine pr manipulate boolean values 
//                     (true or false)


//                      AND = &&
//                      OR  = ||
//                      NOT = !


const temp = 23;

// if(temp > 0){
//     console.log("The Weather is Good")
// }
// else if(temp <=  30){
//     console.log("the weather is ok")
// }
// else {
//     console.log("the Weather is BAD")
// }   // this gives wrong ranges


if(temp > 0 && temp <=  30){
    console.log("The Weather is Good")
}
else {
    console.log("the Weather is BAD")
}  

//-------------------------------------------------------------------------------

const isSunny = true;

if(!isSunny){
    console.log("It is sunny");
}
else{
    console.log("It's not sunny")
};