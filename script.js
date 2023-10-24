//Dynamic images
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

// Button event listeners
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const startButton = document.getElementById("start-button");

// Test changes
const changeText = document.querySelector("#change-text");
const changeScore = document.querySelector("#score-text");

// Computer choice array
const options = ["rock", "paper", "scissors"];

//Scores and maxScore
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

rockButton.addEventListener("click", function () {
  if (playerScore < maxScore && computerScore < maxScore) { // if maxScore not reached
    leftImage.src = "rock.png"; // change the left image
    const playerSelection = options[0]; // store player selection
    const computerSelection = getComputerChoice(); // call and store computerSelection
    playRound(playerSelection, computerSelection); // output the choices to playRound
    updateScore(); // if maxScore not reached, update score
  }
  checkGameEnd(); // cakl and check endGame state
});

paperButton.addEventListener("click", function () {
  if (playerScore < maxScore && computerScore < maxScore) {
    leftImage.src = "paper.png";
    const playerSelection = options[1];
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore();
  }
  checkGameEnd();
});

scissorsButton.addEventListener("click", function () {
  if (playerScore < maxScore && computerScore < maxScore) {
    leftImage.src = "scissors.png";
    const playerSelection = options[2];
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore();
  }
  checkGameEnd();
});

startButton.addEventListener("click", function () {
  resetGame(); // Reset game
});

function getComputerChoice() {
  const computerSelection = options[Math.floor(Math.random() * options.length)]; // random computer choice
  rightImage.src = computerSelection + ".png"; // change image to reflect computer choice
  return computerSelection; //o
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) { // draw state
    changeText.textContent = "It's a draw!";
  } else if ( // player win state
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    changeText.textContent = "Player wins!";
    playerScore++;
  } else { // computer win state
    changeText.textContent = "Computer wins!";
    computerScore++;
  }
}

function updateScore() {
  changeScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function checkGameEnd() {
  if (playerScore === maxScore) {
    changeText.textContent = "Player Wins! Press Start to Play Again";
  } else if (computerScore === maxScore) {
    changeText.textContent = "Computer Wins! Press Start to Play Again";
  }
}

function resetGame() {
  leftImage.src = "default.png";
  rightImage.src = "default.png";
  changeText.textContent = "Make your choice!";
  playerScore = 0;
  computerScore = 0;
  updateScore();
}
