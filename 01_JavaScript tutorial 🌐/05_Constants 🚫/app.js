// Your JavaScript code here


       // const : a variable that can't be chnged
      
    // const PI = 3.14159;
    // let radius;
    // let circumference;
 
// radius = prompt("enter the radius")
// radius=7;
// radius = Number(radius)

// circumference = 2 * PI * radius;
// console.log(circumference);

document.querySelector("#myButton").addEventListener("click",function(){
    const PI =Math.PI;
    let radius = document.querySelector("#val").value;
    radius = Number(radius);
    if (isNaN(radius) || radius <= 0) {
        document.querySelector("#my2").innerHTML = "Please enter a valid radius greater than 0.";
        return; // Exit the function if the input is invalid
    }

    circumference = 2 * PI * radius;
    document.querySelector("#my1").innerHTML=`Enter the radius of a circle: ${radius}` 
    document.querySelector("#my2").innerHTML=`Circumference of a cicrle is ${circumference.toFixed(2)}` 
})