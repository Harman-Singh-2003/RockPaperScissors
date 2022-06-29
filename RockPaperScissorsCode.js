const selections = ["Rock", "Paper", "Scissors"];

let computerPlay = () => selections[Math.floor(Math.random() * 3)];

function playerChoice() {

    let playerSelection;

    do {
        playerSelection = prompt("Choose either Rock, Paper or Scissors");
        playerSelection = playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase();

    } while (!(selections.includes(playerSelection)));
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    console.log("You chose:\t\t" + playerSelection);
    console.log("Computer chose:\t" + computerSelection);

    console.log("-------------------------");

    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return -1;
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return 1;
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return 1;
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return -1;
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return -1;
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return 1;
    }
    else{
        return 0;
    }
}

function game() {

    let rounds = prompt("How many rounds would you like to play?")
    let score = 0;

    for (let i = 0; i < rounds; i++) {
        score += playRound(playerChoice(), computerPlay());
    }

    if(score > 0){
        console.log("You Win!");
    }
    else if(score < 0){
        console.log("You Lost.");
    }
    else{
        console.log("Tie!");
    }

}


game();





