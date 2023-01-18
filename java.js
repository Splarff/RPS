function getComputerChoice(choice) { 
    const i = Math.random();
    if (i <= .33){
        return "Rock";
    } else if (i >.33 && i <= .66) {
        return "Paper";
    } else if (i >.66){
        return "Scissors";
    } else {
        return "error"
    }
}
// option = rock/paper/scissors
//rock <= .33 ; .33 < paper <= .66 ; scissors >.66
// use math.random to determine option value
// use if statements to determine rock/paper/scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return "Draw";
    }
    else if ((playerSelection.toUpperCase() == "ROCK") && (computerSelection == "Paper")) {
        return "You Lose!";
    }else if ((playerSelection.toUpperCase() == "ROCK") && (computerSelection == "Scissors")){
        return "You Win!";
    }else if ((playerSelection.toUpperCase() == "PAPER") && (computerSelection == "Rock")){
        return "You Win!";
    }else if ((playerSelection.toUpperCase() == "PAPER") && (computerSelection == "Scissors")){
        return "You Lose!";
    }else if ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection == "Rock")){
        return "You Lose!";
    }else if ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection == "Paper")){
        return "You Win!";
    }
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerSelection, computerSelection)