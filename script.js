const moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const idx = Math.floor(Math.random() * moves.length);
  return moves[idx];
}

function getHumanChoice() {
  while (true) {
    let humanChoice = prompt("Rock, paper, scissors, shoot!");
    if (humanChoice === null || !moves.includes(humanChoice.toLowerCase())) {
      alert("Please choose a valid move among rock, paper, and scissors");
    } else {
      return humanChoice.toLowerCase();
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = (humanChoice, computerChoice) => {
    const humanIdx = moves.indexOf(humanChoice);
    const computerIdx = moves.indexOf(computerChoice);
    const result = (humanIdx - computerIdx + moves.length) % moves.length;
    if (result === 0) {
      console.log(`It is a tie! Both players drew ${humanChoice}`);
    } else if (result === 1) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  };

  while (humanScore !== 5 && computerScore !== 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(`You beat the computer ${humanScore}:${computerScore}`);
  } else {
    console.log(`You lost to the computer ${humanScore}:${computerScore}`);
  }
}

playGame();
