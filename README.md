<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>Rock Paper Scissor Game</title>
</head>
<body>
    <h1>
        THE TITLE OF YOUR WEBPAGE
    </h1>
      <div id="container"></div>

    <button onclick="alert('Hello World')">Click Me</button>
    <button id="btn">Click Me</button>
    <button id="btn">Click Me Too</button>
    <div id="container">
        <button id="1">Click Me</button>
        <button id="2">Click Me</button>
        <button id="3">Click Me</button>
    </div>
</body>
</html>

//DOM Manipulation Exercise

/**const btn = document.querySelector('#btn');
btn.onclick = () => alert("Whatsss upp!");
**/

/**const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hellow World again");
});
**/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph'); //not relevant
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";

const header = document.createElement('h3');
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

//Creates a div element with a background style then adds a header and paragraph inside the div
const divContainer = document.createElement('div'); //Creates div element
const h = document.createElement('h1'); //Creates h1 element
const p = document.createElement("p"); //Creates p element
h.textContent = "I'm in a div!"; //Modifies the text of the h1 element
p.textContent = "ME TOO!"; //Modifies the text of the p element
divContainer.appendChild(h); //Puts h1 element inside containt
divContainer.appendChild(p); //Puts p element inside containt
divContainer.style.cssText = 'background: pink; border: thick solid black;'; //Styling for container

//Makes elements visible on page
container.appendChild(paragraph);
container.appendChild(header);
container.appendChild(divContainer);

/**
 * Multiline Arrow functions require {} as well a return to return a value
 Arrow Functions
    let sum = (a, b) => a + b;

    This arrow function is a shorter form of:

    let sum = function(a, b) {
    return a + b;
    };

    alert( sum(1, 2) ); // 3

If we have only one argument, then parentheses around parameters can be omitted
    let double = n => n * 2;
    // roughly the same as: let double = function(n) { return n * 2 }

    alert( double(3) ); // 6

If there are no arguments, parentheses are empty, but they must be present:
    let sayHi = () => alert("Hello!");

    sayHi();
**/


const options = Math.floor(Math.random() * 3);

    function getComputerChoice() {
        if (options == 1) {
            return 'rock';
        } else if (options == 2) {
            return 'paper';
        } else {
            return 'scissor';
        }
    }

    function playRound() {
        const playerChoice = prompt('Pick a hand(rock, paper, or scissor)');

        if (playerChoice == getComputerChoice()) {
            alert('Its a tie');
        } else if (playerChoice == 'Rock' && getComputerChoice() == "paper") {
            alert('You lose');
        } else if (playerChoice == 'Paper' && getComputerChoice() == 'scissor') {
            alert('You lose');
        } else if (playerChoice == 'Scissor' && getComputerChoice() == 'rock') {
            alert('You lose');
        } else {
            alert('You win');
        }
    }

    function game() {
        for (let i = 0; i < 3; i++) {
            playerRound();
        }
    }    

    game();

-->

/** 
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
//const roundWinner = document.getElementsByClassName('roundWinner');


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

//let playerScore = 0;
//let computerScore = 0;
let playerSelection = '';


function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'ROCK':
        playerChoice.textContent = '✊'
        break
      case 'PAPER':
        playerChoice.textContent = '✋'
        break
      case 'SCISSOR':
        playerChoice.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerChoice.textContent = '✊'
        break
      case 'PAPER':
        computerChoice.textContent = '✋'
        break
      case 'SCISSOR':
        computerChoice.textContent = '✌'
        break
    }
  };


rockBtn.addEventListener("click", alert ("ROCK"));
paperBtn.addEventListener('click', () => 'PAPER' );
scissorBtn.addEventListener('click', () => 'ROCK' );


/**
 * function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
**/




/**
//Main Starting Function
	/* ************************************************************
	Explain here
	************************************************************* */
	$(document).ready(function() {
		alert('are you ready');
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)

});
		 
**/

