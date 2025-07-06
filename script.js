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

console.log(getHumanChoice());
console.log(getComputerChoice());