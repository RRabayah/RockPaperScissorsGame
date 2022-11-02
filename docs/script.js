function getComputerChoice() {
    let numeric = Math.floor(Math.random() * 3);

    if (numeric === 0) {
        return "ROCK"
    }

    if (numeric === 1) {
        return "PAPER"
    }

    if (numeric === 2) {
        return "SCISSORS"
    }
}

function playRound(computerSelection, playerSelection) {
    selectionToUpper = playerSelection.toUpperCase();

    if (selectionToUpper === computerSelection) {
        return "Its a tie! You both made the same selection";
    }

    if (selectionToUpper === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats rock";
    }

    if (selectionToUpper === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors";
    }

    if (selectionToUpper === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors";
    }

    if (selectionToUpper === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats paper";
    }

    if (selectionToUpper === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats paper";
    }

    if (selectionToUpper === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats rock";
    }
}

function didPlayerWin (computerSelection, playerSelection){
    selectionToUpper = playerSelection.toUpperCase();

    if (selectionToUpper === computerSelection) {
        return 0;
    }

    if (selectionToUpper === "ROCK" && computerSelection === "PAPER") {
        return -1;
    }

    if (selectionToUpper === "ROCK" && computerSelection === "SCISSORS") {
        return 1;
    }

    if (selectionToUpper === "SCISSORS" && computerSelection === "ROCK") {
        return -1;
    }

    if (selectionToUpper === "SCISSORS" && computerSelection === "PAPER") {
        return 1;
    }

    if (selectionToUpper === "PAPER" && computerSelection === "SCISSORS") {
        return -1;
    }

    if (selectionToUpper === "PAPER" && computerSelection === "ROCK") {
        return 1;
    }
}


// This can be extremely easily optimized by removing this function and creating a universal
// score value altered above to keep track of each outcome. I won't do this because I don't care enough
// about this simple project to make this change. 
function changeScore (scoreArray, result){
    if (result === 1){
        scoreArray[0] += 1
        return scoreArray
    } 
    if (result === -1){
        scoreArray[1] += 1;
        return  scoreArray
    } else {
        return scoreArray;
    }
}

const btn = document.querySelectorAll('.btn');
const comChoiceDisplay = document.querySelector(".com-choice")
const scoreBoard = document.getElementById("Score");
const writtenResultDiv = document.querySelector(".written-result");
let score = [0, 0];

for (const button of btn) {
        button.addEventListener('click', e => {
        storedComputerChoice = getComputerChoice();
        comChoiceDisplay.textContent = storedComputerChoice.toLowerCase() + " >:(";
        writtenResult = playRound(storedComputerChoice, button.textContent);
        writtenResultDiv.textContent = writtenResult;
        let scoreOutcome = didPlayerWin(storedComputerChoice, button.textContent);
        score = changeScore(score, scoreOutcome);
        scoreBoard.textContent = "The score is: " + score[0] + "-" + score[1];

        if(score[0] === 5 || score[1] === 5){
            if(score[0] === 5){
                alert("You win the game, the computer feels upset and defeated");
                score[0] = 0;
                score[1] = 0;
                scoreBoard.textContent = "The score is: " + score[0] + "-" + score[1];
            } else {
                alert("You have been crushed by the computer, care to try again?");
                score[0] = 0;
                score[1] = 0;
                scoreBoard.textContent = "The score is: " + score[0] + "-" + score[1];
            }
        }
    });
};
  
