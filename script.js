function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0){
        console.log("Computer chose Rock!");
        let thing = "Rock";
        return thing;
    }
    else if (randomChoice === 1) {
        console.log("Computer chose Paper!");
        let thing = "Paper";
        return thing;
    }
    else {
        console.log("Computer chose Scissors!");
        let thing = "Scissors";
        return thing;
    }
}

function getHumanChoice(choice){
    console.log(`You chose ${choice}!`);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoiceModify = humanChoice.toLowerCase();
    if (humanChoiceModify === "rock"){
        if (computerChoice === "Scissors"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        }
        else if (computerChoice === "Rock"){
             console.log(`It's a tie! You both chose ${computerChoice}!`);

        }
        else {
            computerScore++;
            console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);

        }
    }

    else if (humanChoiceModify === "paper"){
        if (computerChoice === "Rock"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        }
        else if (computerChoice === "Paper"){
             console.log(`It's a tie! You both chose ${computerChoice}!`);

        }
        else {
            computerScore++;
            console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);

        }
    }

    else {
        if (computerChoice === "Paper"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        }
        else if (computerChoice === "Scissors"){
             console.log(`It's a tie! You both chose ${computerChoice}!`);

        }
        else {
            computerScore++;
            console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);

        }
    }

}
let humanScore = 0;
let computerScore = 0;

let answer = prompt("Please enter your choice (Rock, Paper, or Scissors)");

let humanChoice = getHumanChoice(answer);
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
