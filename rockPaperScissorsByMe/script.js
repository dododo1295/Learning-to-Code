const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
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

/* function whoWon(player, computer) {
  if (player === computer) {
    coinFlip();
  } else if {(
  (player === "Rock" && computerMoveResult() === "Scissors") ||
  (player === "Scissors" && computerMoveResult() === "Paper") ||
  (player === "Paper" && computerMoveResult() === "Rock")
),
};
*/ 
function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You lose.';
          } else if (computerMove === 'Paper') {
            result = 'You win.';
          } else if (computerMove === 'Scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You win.';
          } else if (computerMove === 'Paper') {
            result = 'Tie.';
          } else if (computerMove === 'Scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie.';
          } else if (computerMove === 'Paper') {
            result = 'You lose.';
          } else if (computerMove === 'Scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          playerScoreElement += 1;
        } else if (result === 'You lose.') {
          computerScoreElement += 1;
        } else if (result === 'Tie.') {
          coinFlip();
        }
      }
