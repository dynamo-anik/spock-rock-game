import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('result');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
	rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
	paper: { name: 'Paper', defeats: ['rock', 'spock'] },
	scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
	lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
	spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

//reset all selected icons
function resetSelected() {
	allGameIcons.forEach((icon) => {
		icon.classList.remove('selected');
	});
	stopConfetti();
	removeConfetti();
}

///reset score and player and computer choice
function resetAll() {
	playerScore = 0;
	computerScore = 0;
	playerScoreEl.textContent = playerScore;
	computerScoreEl.textContent = computerScore;
	playerChoiceEl.textContent = '';
	computerChoiceEl.textContent = '';
	resultText.textContent = '';
	resetSelected();
}
window.resetAll = resetAll;
//random computer choice
function computerRandomChoice() {
	const computerChoiceNumber = Math.random();
	if (computerChoiceNumber <= 0.2) {
		computerChoice = 'rock';
	} else if (computerChoiceNumber <= 0.4) {
		computerChoice = 'paper';
	} else if (computerChoiceNumber <= 0.6) {
		computerChoice = 'scissors';
	} else if (computerChoiceNumber <= 0.8) {
		computerChoice = 'lizard';
	} else {
		computerChoice = 'spock';
	}
}

//add select style and choice for computer
function displayComputerChoice() {
	switch (computerChoice) {
		case 'rock':
			computerRock.classList.add('selected');
			computerChoiceEl.textContent = ' ---Rock';
			break;
		case 'paper':
			computerPaper.classList.add('selected');
			computerChoiceEl.textContent = ' ---Paper';
			break;
		case 'scissors':
			computerScissors.classList.add('selected');
			computerChoiceEl.textContent = ' ---Scissors';
			break;
		case 'lizard':
			computerLizard.classList.add('selected');
			computerChoiceEl.textContent = ' ---Lizard';
			break;
		case 'spock':
			computerSpock.classList.add('selected');
			computerChoiceEl.textContent = ' ---Spock';
			break;
		default:
			break;
	}
}

///check result, upate score//////////////
function updateScore(playerchoice) {
	if (playerchoice === computerChoice) {
		resultText.textContent = "It's a Tie.";
	} else {
		const choice = choices[playerchoice];
		if (choice.defeats.includes(computerChoice)) {
			startConfetti();
			resultText.textContent = 'You Won!';
			playerScore++;
			playerScoreEl.textContent = playerScore;
		} else {
			resultText.textContent = 'You Lost!';
			computerScore++;
			computerScoreEl.textContent = computerScore;
		}
	}
}

//call function to process turn
function checkResult(playerChoice) {
	resetSelected();
	computerRandomChoice();
	displayComputerChoice();
	updateScore(playerChoice);
}

//passingg player selection value and styling icons
function select(playerChoice) {
	checkResult(playerChoice);
	//add selected styling and playerchoice
	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceEl.textContent = ' ---Rock';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceEl.textContent = ' ---Paper';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceEl.textContent = ' ---Scissors';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceEl.textContent = ' ---Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceEl.textContent = ' ---Spock';
			break;
		default:
			break;
	}
}
window.select = select;

//on start up set initail values

resetAll();

/////////////////////////////
