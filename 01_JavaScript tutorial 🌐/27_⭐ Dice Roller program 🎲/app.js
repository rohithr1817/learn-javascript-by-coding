// Your JavaScript code here
let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", function () {
    let diceValue = document.querySelector("#diceValue").value;
    let diceResult = document.querySelector("#diceResult");
    let diceImages = document.querySelector("#diceImages");
    const values=[];
    const images = [];
    for (let i = 0; i < diceValue; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice${value}" width="50" height="50">`);
    }
    diceResult.innerHTML = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    
});