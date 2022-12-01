let roundWinner = document.getElementById('roundWinner');
let playerSelection = document.getElementById('playerSelection');
let computerSelectionField = document.getElementById('computerSelection');

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
    computerSelectionField.textContent = `Computer: ${computerSelection}`;

  if (playerSelection === computerSelection) {
      roundWinner.textContent = 'Tied!';
  }
  if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') ||
      (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    
      roundWinner.textContent = 'You Win!'
      // player++;
      
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSOR') ||
    (computerSelection === 'SCISSOR' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    
    roundWinner.textContent = 'You Lose!'
    // computer++;
    
  }      
};

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', () => {
  playerSelection.textContent = `Player: ${'ROCK'}`;
  playRound('ROCK');
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', () => {
  playerSelection.textContent = `Player: ${'PAPER'}`;
  playRound('PAPER')
});

const scissorBtn = document.getElementById("scissorBtn");
scissorBtn.addEventListener('click', () => {
  playerSelection.textContent = `Player: ${'SCISSOR'}`;
  playRound('SCISSOR')
});



function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
      case 0:
          return 'ROCK';
      case 1:
          return 'PAPER';
      case 2:
          return 'SCISSOR';
  }
};

// let player = 0;
// let computer = 0;

// let playerScore = document.getElementById('playerScore');
// playerScore.textContent = `Player Score: ${player}`;

// let computerScore = document.getElementById('computerScore');
// computerScore.textContent = `Computer Score: ${computer}`;

// function isGameOver() {
//   return playerScore === 5 || computerScore === 5
// }