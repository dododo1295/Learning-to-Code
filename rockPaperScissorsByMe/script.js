const userMoveElement = document.querySelector('.user-move');
const rpsResult = document.querySelector('.rps-result');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
let userScore = 0;
let computerScore = 0;

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

function whoWon(player, computer) {
  if (player === computer) {
    coinFlip();
  } else if {(
  (player === "Rock" && computerMoveResult() === "Scissors") ||
  (player === "Scissors" && computerMoveResult() === "Paper") ||
  (player === "Paper" && computerMoveResult() === "Rock")
),
};
/* 
function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }
*/ // MAYBE??? i don't think i can do this without a using this if statements, template literals probably can't from my research.
function playGame("") {
  computerMoveResult();
  whoWon();

};
