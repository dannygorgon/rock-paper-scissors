// dynamic images with listener ids
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

//buttons with listener ids
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener("click", function() {
    console.log("I am a rock")
})

paperButton.addEventListener("click", function() {
    console.log("I am some paper")
})

scissorsButton.addEventListener("click", function() {
    console.log("I am some scissors")
})


