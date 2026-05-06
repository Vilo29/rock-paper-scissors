// It is a rock paper scissors game, we need a answer from the player, and also get a random answer from the computer, and then compare these 2 answers and see who wins, lose, or if it is a tie. And will be a BO5 game.

// Get a random choice for the computer
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    switch(randomNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

// Decide who win or lost the round, or if there was a tie
function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"
    ) {
        playerScore++;
        document.querySelector(".player-score").textContent = playerScore;
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        document.querySelector(".result").textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if (playerChoice === computerChoice) {
        console.log("It's a tie!")
        document.querySelector(".result").textContent = "It's a tie!";
    }
    else {
        computerScore++;
        document.querySelector(".computer-score").textContent = computerScore;
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
        document.querySelector(".result").textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    }

    if (playerScore === 5) {
        document.querySelector(".result").textContent = "You have won this Rock Paper Scissors game!";
        disableButtons();
    }
    else if (computerScore === 5) {
        document.querySelector(".result").textContent = "We can not win every time... you lost!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".selection");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.textContent;
        let computerSelection = getComputerChoice();
        console.log(playerSelection + " - " + computerSelection); // to check that everything is okay
        playRound(playerSelection, computerSelection);
    });
});