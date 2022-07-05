const selections = ["Rock", "Paper", "Scissors"];

let computerPlay = () => selections[Math.floor(Math.random() * 3)];

let score = 0;


function playRound(playerSelection, computerSelection) {

    console.log("You chose:\t\t" + playerSelection);
    console.log("Computer chose:\t" + computerSelection);

    console.log("-------------------------");

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return -1;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return -1;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return -1;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return 1;
    }
    else {
        return 0;
    }
}

function game(playerSelection) {

    score += playRound(playerSelection, computerPlay());

    scoreDiv.textContent = "Score:" + score.toString();

    if (score > 0) {
        console.log("You Win!");
    }
    else if (score < 0) {
        console.log("You Lost.");
    }
    else {
        console.log("Tie!");
    }
}



scoreDiv = document.querySelector('#scores');

const btns = document.querySelectorAll('button');
btns.forEach((btn) =>{
    btn.disable=true;
    btn.onclick = () => game(btn.value.substring(0,1).toUpperCase() + btn.value.substring(1).toLowerCase());
});










