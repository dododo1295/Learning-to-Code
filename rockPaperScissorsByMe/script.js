const userMoveElement = document.querySelector('.user-move');
const rpsResult = document.querySelector('.rps-result');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const userScore = 0;
const computerScore = 0;

function computerMoveResult() {
  const option = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * option.length);
  return option[randomNumber];
};
function coinFlip() {
  const randomNumber = Math.random();
  const flipResult = randomNumber < 0.5 ? "heads" : "tails";
  console.log(flipResult());
  if (flipResult === "heads") {
    userScore++;
    playerScoreElement.innerHTML = userScore;
  } else {
    computerScore++
    computerScoreElement.innerHTML = computerScore;
  };
};
function tieResult() { 
  if (gameResult === "tie") {
    coinFlip();
  }
};
playGame() {

};
