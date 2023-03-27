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

function game() {
    let playerSelection;
    let numberOfWins = 0;
    let conclusion;
    let computerSelection;
    for (i = 1; i <= 5; i++) {
        playerSelection = prompt("Input");
        computerSelection = getComputerChoice();
        conclusion = playRound(playerSelection, computerSelection);
        
        if (conclusion == "Tie!") {
            i--;
            console.log("It's tie!");
            continue;
        }

        if (conclusion == "Win!") {
            console.log("You win!");
            numberOfWins++;
        }
        else {
            console.log("You lose!");
        }
        
    }

    console.log("You win " + numberOfWins + " time(s), you lose " + (5 - numberOfWins) + " time(s).");
}

game();
