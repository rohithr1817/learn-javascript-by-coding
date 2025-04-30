// Modularaity means here each function is well and separately defined where reusabilty increses

// Initialize user and computer scores
let userScore = 0;
let compScore = 0;
const winningScore = 5; // The first to reach 5 points wins

// Select elements from the HTML
const choices = document.querySelectorAll(".choice"); // Rock, Paper, Scissors buttons
const msg = document.querySelector("#msg"); // Message display
const userScorePara = document.querySelector("#user-score"); // User's score display
const compScorePara = document.querySelector("#comp-score"); // Computer's score display
const resetBtn = document.querySelector("#reset"); // Reset button

// Function to randomly choose rock, paper, or scissors for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)]; // Pick a random choice
};

// Function to show a draw message
const drawGame = () => {
  msg.innerText = "It's a Draw! Try again.";
  msg.style.backgroundColor = "#081b31"; // Keep default background
};

// Function to update the game result and scores
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // Increase user score
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // Green for win
  } else {
    compScore++; // Increase computer score
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red"; // Red for loss
  }

  checkGameOver(); // Check if the game should end
};

// Function to check if someone won the game
const checkGameOver = () => {
  if (userScore === winningScore) {
    msg.innerText = "🎉 Congratulations! You Won!";
    msg.style.backgroundColor = "gold"; // Golden color for winner
    disableChoices(); // Stop further clicks
  } else if (compScore === winningScore) {
    msg.innerText = "😢 Computer Wins! Try Again.";
    msg.style.backgroundColor = "darkred"; // Dark red for losing
    disableChoices(); // Stop further clicks
  }
};

// Function to disable clicks after game ends
const disableChoices = () => {
  choices.forEach(choice => choice.style.pointerEvents = "none"); // Disable clicks
};

// Function to enable clicks when restarting the game
const enableChoices = () => {
  choices.forEach(choice => choice.style.pointerEvents = "auto"); // Enable clicks
};

// Function to play the game when the user clicks a choice
const playGame = (userChoice) => {
  if (userScore === winningScore || compScore === winningScore) return; // Stop if game over

  const compChoice = genCompChoice(); // Get computer's choice

  if (userChoice === compChoice) {
    drawGame(); // If choices match, it's a draw
  } else {
    // Check if the user wins
    let userWin = 
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper");

    showWinner(userWin, userChoice, compChoice); // Show the result
  }
};

// Add event listeners to each choice (rock, paper, scissors)
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get the choice ID
    playGame(userChoice); // Play the game
  });
});

// Reset button to restart the game
resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31"; // Reset message background
  enableChoices(); // Enable buttons again
});
