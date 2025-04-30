// Your JavaScript code here

const textbox = document.querySelector("#textbox");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelsius = document.querySelector("#toCelsius");
const myButton = document.querySelector("#myButton");
const result = document.querySelector("#result");

let temp;

myButton.onclick = function(){
       if(toFahrenheit.checked){
           temp = Number(textbox.value);
           temp = temp * 9 / 5 + 32;
           result.textContent = temp.toFixed(2) + "°F"

       }
       else if(toCelsius.checked){
            temp = Number(textbox.value);
            temp = (temp - 32) * 5 / 9;
            result.textContent = temp.toFixed(2)+ "°C"

       }
       else{
        result.textContent="Select a unit"
       }
}