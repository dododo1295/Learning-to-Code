const userMoveElement = document.querySelector('.user-move');
const rpsResult = document.querySelector('.rps-result');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
let userScore = 0;
let computerScore = 0;
let userScore = 0;
let computerScore = 0;

function computerMoveResult() {
  const option = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * option.length);
  return option[randomNumber];
};
function whoWon(player, computer) {
  return (
(player === "Rock" && computerMoveResult() === "Scissors") ||
(player === "Scissors" && computerMoveResult() === "Paper") ||
(player === "Paper" && computerMoveResult() === "Rock")
  );
  if (player === computer) {
    coinFlip();
}

let userScore = 0;
let computerScore = 0;

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

playGame() {

};
