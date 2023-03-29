function getComputerChoice() {
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

function displayWinCondition() {
    if (yourScore == 5) {
        alert("YOU WIN!");
        
    }

    if (computerScore == 5) {
        alert("YOU LOSE!");
    }
        
}

function updateText() {
    // if your score and ai's score are greater or equal to 5, make the text green.
    scores[0].textContent = yourScore.toString();
    scores[1].textContent = computerScore.toString();
    
    if (yourScore >= 5) {
        scores[0].classList.add("green-text");
    }

    if (computerScore >= 5) {
        scores[1].classList.add("green-text");
    }

    
}
const buttons = document.querySelectorAll('.buttons');
const scores = document.querySelectorAll('.scoreboard h1');

let playerSelection;
let yourScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    // Add a listener to each button then get the id of the clicked button

    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        conclusion = playRound(playerSelection, computerSelection);
        // Increment the win numbers

        if (conclusion == "Tie!") {
            alert("You tie this round.")
            return;
        }

        if (conclusion == "Win!") {
            alert("You win this round.");
            yourScore++;
        }
        else {
            alert("You lose this round.");
            computerScore++;
        }

        displayWinCondition();
        
        updateText();
        
        

    })
});


