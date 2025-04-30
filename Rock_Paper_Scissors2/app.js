let userScore = 0;
let compScore = 0;
const winningScore = 5;
let rounds = []; // ✅ Store results of each round

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");
const roundList = document.querySelector("#round-list");

// ✅ Generate a random choice for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

// ✅ Handle a draw (Fixed round display issue)
const drawGame = (userChoice, compChoice) => {
  msg.innerText = "It's a Draw! Play again.";
  msg.style.backgroundColor = "#081b31";
  rounds.push(`Round ${rounds.length + 1}: Draw! (${userChoice} vs ${compChoice})`); // ✅ Corrected round history
  updateRoundBoard();
};

// ✅ Update the UI based on the winner
const showWinner = (userWin, userChoice, compChoice) => {
  let roundResult = "";

  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    roundResult = `Round ${rounds.length + 1}: You won! (${userChoice} vs ${compChoice})`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    roundResult = `Round ${rounds.length + 1}: Computer won! (${compChoice} vs ${userChoice})`;
  }

  rounds.push(roundResult);
  updateRoundBoard();
  checkGameOver();
};

// ✅ Check if the game is over
const checkGameOver = () => {
  if (userScore === winningScore) {
    msg.innerText = "🎉 You Won the Game!";
    msg.style.backgroundColor = "gold";
    disableChoices();
  } else if (compScore === winningScore) {
    msg.innerText = "😢 Computer Wins the Game!";
    msg.style.backgroundColor = "darkred";
    disableChoices();
  }
};

// ✅ Update the round scoreboard
const updateRoundBoard = () => {
  roundList.innerHTML = "";
  rounds.forEach(result => {
    let roundItem = document.createElement("li");
    roundItem.innerText = result;
    roundList.appendChild(roundItem);
  });
};

// ✅ Disable choices when the game ends
const disableChoices = () => {
  choices.forEach(choice => choice.style.pointerEvents = "none");
};

// ✅ Enable choices when resetting the game
const enableChoices = () => {
  choices.forEach(choice => choice.style.pointerEvents = "auto");
};

// ✅ Main function to play the game
const playGame = (userChoice) => {
  if (userScore === winningScore || compScore === winningScore) return;

  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice); // ✅ Pass userChoice & compChoice for display
  } else {
    let userWin = 
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper");

    showWinner(userWin, userChoice, compChoice);
  }
};

// ✅ Event listeners for choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// ✅ Reset Game Functionality
resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  rounds = [];
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31";
  roundList.innerHTML = "";
  enableChoices();
});
