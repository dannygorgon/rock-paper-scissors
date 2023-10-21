// dynamic images with listener ids
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

//buttons with listener ids
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const changeText = document.querySelector("#change-text");
const startButton = document.getElementById("start-button");

//game logic
const options = ["rock", "paper", "scissors"];


//computer logic

const imageArray = ["rock.png", "paper.png", "scissors.png"]

rockButton.addEventListener("click", function () {
  console.log("I am a rock");
  leftImage.src = "rock.png";
  const playerSelection = options[0];
  changeText.textContent = `${playerSelection}`;
  getComputerChoice();
});

paperButton.addEventListener("click", function () {
  console.log("I am some paper");
  leftImage.src = "paper.png";
  const playerSelection = options[1];
  changeText.textContent = `${playerSelection}`;

  getComputerChoice();
});

scissorsButton.addEventListener("click", function () {
  console.log("I am some scissors");
  leftImage.src = "scissors.png";
  const playerSelection = options[2];
  changeText.textContent = `${playerSelection}`;

  getComputerChoice();
});

startButton.addEventListener("click", function () {
  console.log("Let the games begin");
  leftImage.src = "default.png";
  rightImage.src = "default.png";
  changeText.textContent = "Make your choice!";
});

function getComputerChoice() {
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(computerSelection);

  return computerSelection;
}

function computerSelectionImage(){

}


function startGame() {}
