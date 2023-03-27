function getComputerChoice(){
    // Randomly return a string
    const CHOICES = ["Rock", "Paper", "Scissors"]
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

console.log(getComputerChoice());