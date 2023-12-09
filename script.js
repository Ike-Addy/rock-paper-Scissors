function playRound (player, comp) {
    player = playerSelection();
    comp = computerSelection();

    if (player == comp) {
        alert('It\'s a tie');
    } else if (player == 'rock' && comp == 'scissor') {
        alert('You win!');
    } else if (player == 'scissor' && comp == 'paper') {
        alert('You win!');
    } else if (player == 'paper' && comp == 'rock') {
        alert('You win!');
    } else {
        alert('You lose D:');
    }
}

function computerSelection () {
    let aiChoice = Math.floor(Math.random() * 3)
    if (aiChoice === 0) {
        aiChoice = 'rock';
    } else if (aiChoice === 1) {
        aiChoice = 'paper';
    } else if (aiChoice === 2) {
        aiChoice = 'scissor';
    } else {
        aiChoice = null;
    }
    alert(`The computer chose ${aiChoice}`)
    return aiChoice;
}

function playerSelection () {
    let playerChoice = prompt('Rock, Paper, or Scissor?')
    alert(`You chose ${playerChoice}`);
    return playerChoice;
}

playRound();

