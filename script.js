function playRound () {
    const playerSelection = prompt('Rock, Paper, or Scissor?')
    alert(`You chose ${playerSelection}`);
    alert(`The computer chose ${computerSelection()}`);

    if (playerSelection === computerSelection) alert('its a tie')
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        alert('You win!')
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        alert('You win!')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!')
    } else {
        alert('You lose! :(')
    }
}

function computerSelection () {
    let aiChoice = Math.floor(Math.random() * 3);
    if (aiChoice === 0) aiChoice = 'rock';
    if (aiChoice === 1) aiChoice = 'paper';
    if (aiChoice === 2) aiChoice = 'scissor';
    return aiChoice;
}

playRound();


//const computerSelectionRock