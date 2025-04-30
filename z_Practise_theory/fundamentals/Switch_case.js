// let day = 9;

// if(day == 1) {
//     console.log("It is Monday");
// }
// else if(day ==2) {
//     console.log("It is Tuesday");
// }
// else if(day ==3) {
//     console.log("It is Wednesday");
// }
// else if(day ==4) {
//     console.log("It is Thursday");
// }
// else if(day ==5) {
//     console.log("It is Friday");
// }
// else if(day ==6) {
//     console.log("It is Saturday");
// }
// else if(day ==7) {
//     console.log("It is Sunday");
// }
// else{
//     console.log(` ${day} is not a day`);
// }

// let day="Tiffin";
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log(`${day} Not a Day`);
// }

let testScore =32;
let letterGrade;

switch(true){
    case testScore >= 90:
         letterGrade="A";
         break;
    case testScore >= 80:
         letterGrade="B";
         break;
    case testScore >= 70:
         letterGrade="C";
         break;
    case testScore >= 36:
         letterGrade="G";
         break;   
    default:
         letterGrade="F";
         
}
console.log(letterGrade);