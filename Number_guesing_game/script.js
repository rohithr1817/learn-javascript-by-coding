let minNum = 10;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum-minNum+1)) + minNum;


let attempt = 0;
let guess;
let running = true;

while(running){
    guess = prompt(`Guess the Number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter the valid number");
    }
    else if(guess < minNum || guess > maxNum){
        alert("Please enter the valid number");
    }
    else{
        attempt++;
        if(guess < answer){
            alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            alert(`Your CORRECT! The answer was ${answer}. It took you ${attempt} attempts `);
            running = false;
        }
    }
}