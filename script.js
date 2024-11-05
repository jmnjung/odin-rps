const moves = ["rock", "paper", "scissors"];

const humanScoreDiv = document.querySelector("#player");
const computerScoreDiv = document.querySelector("#computer");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const body = document.querySelector("body");
const container = document.querySelector(".content");

const roundDiv = document.createElement("div");
const gameDiv = document.createElement("div");

let humanScore = parseInt(humanScoreDiv.textContent);
let computerScore = parseInt(computerScoreDiv.textContent);

function getComputerChoice() {
  const idx = Math.floor(Math.random() * moves.length);
  return moves[idx];
}

function playRound(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    const humanIdx = moves.indexOf(humanChoice);
    const computerIdx = moves.indexOf(computerChoice);
    const result = (humanIdx - computerIdx + moves.length) % moves.length;

    if (result === 0) {
      body.style.backgroundColor = "lightgray";
      roundDiv.textContent = `It is a tie! Both players drew ${humanChoice}`;
    } else if (result === 1) {
      body.style.backgroundColor = "lightgreen";
      roundDiv.textContent = `You win: ${humanChoice} beats ${computerChoice}!`;
      humanScore++;
      humanScoreDiv.textContent = humanScore;
    } else {
      body.style.backgroundColor = "lightcoral";
      roundDiv.textContent = `You lose: ${humanChoice} loses to ${computerChoice}...`;
      computerScore++;
      computerScoreDiv.textContent = computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {
      let gameOverMessage = humanScore === 5 ? "You won! " : "You lost...";
      gameOverMessage += "Refresh to run it back?";
      gameDiv.textContent = gameOverMessage;
      container.appendChild(gameDiv);
    }
  }
}

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

roundDiv.textContent = "Let's play to 5!";
container.appendChild(roundDiv);
