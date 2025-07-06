let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomValue = Math.random();

    if (randomValue < 0.3333)
    {
        return "rock";
    }
    else if (randomValue < 0.6666)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your pick: ");
}

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();

    switch (lowerHumanChoice)
    {
        case "rock":
            switch (computerChoice)
            {
                case "rock":
                    console.log(`Tie! Nobody gets a point.`);
                    break;
                case "paper":
                    console.log("You lose. Paper beats Rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                    break;
                }
            break;
        case "paper":
            switch (computerChoice)
            {
                case "rock":
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Tie! Nobody gets a point.");
                    break;
                case "scissors":
                    console.log("You lose. Scissors beat Paper.");
                    computerScore++;
                    break;
                }
            break;
        case "scissors":
            switch (computerChoice)
            {
                case "rock":
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Scissors beat Paper.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Tie! Nobody gets a point.");
                    break;
                }
            break;
        default:
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)