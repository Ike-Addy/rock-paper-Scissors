const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const choices = document.querySelector('.choices');

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        choices.textContent = `YOU chose ${playerSelection} and the COMPUTER chose ${computerSelection} `;
        results.textContent = 'Its a tie'
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        choices.textContent = `YOU chose ${playerSelection} and the COMPUTER chose ${computerSelection} `;
        results.textContent = 'You win!';
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        choices.textContent = `YOU chose ${playerSelection} and the COMPUTER chose ${computerSelection} `;
        results.textContent = 'You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        choices.textContent = `YOU chose ${playerSelection} and the COMPUTER chose ${computerSelection} `;
        results.textContent = 'You win!';
    } else {
        choices.textContent = `YOU chose ${playerSelection} and the COMPUTER chose ${computerSelection} `;
        results.textContent = 'You lose';
    };
};

function getComputerSelection () {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'rock';
    } else if (randomChoice === 1) {
        return 'paper';
    } else if (randomChoice === 2) {
        return 'scissor';
    } else {
        return 'ERROR'
    };
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    })
});
