// Your JavaScript code here

  // SWITCH = can be an efficient replacement to many else if statements


let day = "pizza";

if (day == 1) {
    console.log('It is Monday');
} else if (day == 2) {
    console.log('It is Tuesday');
} else if (day == 3) {
    console.log('It is Wednesday');
} else if (day == 4) {
    console.log('It is Thursday');
} else if (day == 5) {
    console.log('It is Friday');
} else if (day == 6) {
    console.log('It is Saturday');
} else if (day == 7) {
    console.log('It is Sunday');
} else {
    console.log(`${day} is not a day`);
}


let dayNumber = 1; // Change this to a number (1-7) or any other value to test

switch (dayNumber) {
    case 1:
        console.log('It is Monday');
        break;
    case 2:
        console.log('It is Tuesday');
        break;
    case 3:
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturday');
        break;
    case 7:
        console.log('It is Sunday');
        break;
    default:
        console.log(`${dayNumber} is not a valid day number`);
}



let inputDay = "pizza"; // You can change this to a valid day string like "Monday", "Tuesday", etc.

switch (inputDay) {
    case "Monday":
        console.log('It is Monday');
        break;
    case "Tuesday":
        console.log('It is Tuesday');
        break;
    case "Wednesday":
        console.log('It is Wednesday');
        break;
    case "Thursday":
        console.log('It is Thursday');
        break;
    case "Friday":
        console.log('It is Friday');
        break;
    case "Saturday":
        console.log('It is Saturday');
        break;
    case "Sunday":
        console.log('It is Sunday');
        break;
    default:
        console.log(`${inputDay} is not a day`);
}


let testScore = 61;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A"; // Use '=' for assignment
        break;
    case testScore >= 80:
        letterGrade = "B"; // Corrected from "8" to "B"
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);