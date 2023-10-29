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


//Scores and maxScore
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;



function selectionClickListener(playerSelectionIndex){
  return function() {
    if (playerScore < maxScore && computerScore < maxScore) {
      // Computer choice array
const options = ["rock", "paper", "scissors"];
const playerSelection = options[playerSelectionIndex]
leftImage.src = `${playerSelection}.png`
const computerSelection = getComputerChoice()
playRound(playerSelection, computerSelection)
updateScore()
    }
    checkGameEnd();

  }
}
rockButton.addEventListener("click", selectionClickListener(0));
paperButton.addEventListener("click", selectionClickListener(1));
scissorsButton.addEventListener("click", selectionClickListener(2));

startButton.addEventListener("click", function () {
  resetGame(); // Reset game
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
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
