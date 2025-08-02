function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0){
        console.log("Rock");
        return "Rock";
    }
    else if (randomChoice == 1) {
        console.log("Paper");
        return "Paper";
    }
    else {
        console.log("Scissors");
        return "Scissors";
    }
}

getComputerChoice();