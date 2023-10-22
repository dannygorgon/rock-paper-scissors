// dynamic images with listener ids
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

// buttons with listener ids
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const changeText = document.querySelector("#change-text");
const startButton = document.getElementById("start-button");

// game logic
const options = ["rock", "paper", "scissors"];

rockButton.addEventListener("click", function () {
  console.log("I am a rock");
  leftImage.src = "rock.png";
  const playerSelection = options[0];
  const computerSelection = getComputerChoice();

  changeText.textContent = `${playerSelection} + ${computerSelection}`;

});

paperButton.addEventListener("click", function () {
  console.log("I am some paper");
  leftImage.src = "paper.png";
  const playerSelection = options[1];
  const computerSelection = getComputerChoice();

  changeText.textContent = `${playerSelection} + ${computerSelection}`;;
});

scissorsButton.addEventListener("click", function () {
  console.log("I am some scissors");
  leftImage.src = "scissors.png";
  const playerSelection = options[2];
  const computerSelection = getComputerChoice();
  changeText.textContent = `${playerSelection} + ${computerSelection}`;
});

startButton.addEventListener("click", function () {
  console.log("Let the games begin");
  leftImage.src = "default.png";
  rightImage.src = "default.png";
  changeText.textContent = "Make your choice!";
});

function getComputerChoice() {
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  computerSelectionImage(computerSelection);
  computerSelectionText(computerSelection);
  return computerSelection;
}

function computerSelectionImage(computerSelection) {
  rightImage.src = computerSelection + ".png";
}

function computerSelectionText(computerSelection) {
  let computerChoiceText = "";
  if (computerSelection === "rock") {
    computerChoiceText = "rock";
  } else if (computerSelection === "paper") {
    computerChoiceText = "paper";
  } else if (computerSelection === "scissors") {
    computerChoiceText = "scissors";
  }

  return computerChoiceText;
}
