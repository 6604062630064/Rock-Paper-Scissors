function getComputerChoice(){
    // Randomly return a string
    const CHOICES = ["Rock", "Paper", "Scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    else {
        if (playerSelection == "Rock") {
            if (computerSelection == "Scissors") {
                return "Win!";
            }
            else {
                return "Lose!";
            }
        }

        if (playerSelection == "Paper") {
            if (computerSelection == "Rock") {
                return "Win!";
            }
            else {
                return "Lose!";
            }
        }

        if (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                return "Win!";
            }
            else {
                return "Lose!";
            }
        }
    }
  }


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
