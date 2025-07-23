let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const resultDiv = document.createElement("div");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(resultDiv);

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
                    displayMessage(`Tie! Nobody gets a point.`);
                    break;
                case "paper":
                    displayMessage("You lose. Paper beats Rock.");
                    computerScore++;
                    break;
                case "scissors":
                    displayMessage("You win! Rock beats Scissors.");
                    humanScore++;
                    break;
                }
            break;
        case "paper":
            switch (computerChoice)
            {
                case "rock":
                    displayMessage("You win! Paper beats Rock.");
                    humanScore++;
                    break;
                case "paper":
                    displayMessage("Tie! Nobody gets a point.");
                    break;
                case "scissors":
                    displayMessage("You lose. Scissors beat Paper.");
                    computerScore++;
                    break;
                }
            break;
        case "scissors":
            switch (computerChoice)
            {
                case "rock":
                    displayMessage("You lose! Rock beats Scissors.");
                    computerScore++;
                    break;
                case "paper":
                    displayMessage("You win! Scissors beat Paper.");
                    humanScore++;
                    break;
                case "scissors":
                    displayMessage("Tie! Nobody gets a point.");
                    break;
                }
            break;
        default:
            break;
    }

    playGame();
}

function playGame() {
    if (humanScore >= 5 || computerScore >=5)
    {
        if (humanScore > computerScore)
        {
            displayMessage(`You win the game! The score is ${humanScore}:${computerScore}.`, "32px");
        }
        else if (computerScore > humanScore)
        {
            displayMessage(`You lose the game! The score is ${humanScore}:${computerScore}.`, "32px");
        }
        else
        {
            displayMessage(`Tie! The score is ${humanScore}:${computerScore}.`, "32px");
        }

        humanScore = 0;
        computerScore = 0;
    }
}

function displayMessage(msg, fontSize = "16px") {
    const message = document.createElement("p");
    message.textContent = msg;
    message.style.fontSize = fontSize;

    if (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    resultDiv.appendChild(message);
}

