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
    else {
        return "You goofed the code bot";
    }
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerSelection, computerSelection)

  // 5 rounds using for loops
  // keep score via 2 variables with "++"
  //end loop with else containing "You won/lost x-y" 
  let playerScore = 0;
  let ComputerScore = 0;

  function game(){
    for (let i = 0; i < 5; i++) {
        if (i === 0){
            playRound(playerSelection, computerSelection)
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    console.log(playerScore + ComputerScore);
                    return playerScore++;
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    console.log(playerScore + ComputerScore);
                    return ComputerScore++;
                } else {
                    console.log(playerScore + ComputerScore);
                    return "Draw";
                }
        }   else if (i === 1){
            playRound(playerSelection, computerSelection)
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    console.log(playerScore + ComputerScore);
                    return playerScore++;
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    console.log(playerScore + ComputerScore);
                    return ComputerScore++;
                } else {
                    console.log(playerScore + ComputerScore);
                   return "Draw";
                }

        }   else if (i === 2){
            playRound(playerSelection, computerSelection)
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    console.log(playerScore + ComputerScore);
                    return playerScore++;
                    
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    console.log(playerScore + ComputerScore);
                    return ComputerScore++;
                    
                } else {
                    console.log(playerScore + ComputerScore);
                   return "Draw";
                }

        }   else if (i === 3){
            playRound(playerSelection, computerSelection)
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    console.log(playerScore + ComputerScore);
                    return playerScore++;
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    console.log(playerScore + ComputerScore);
                    return ComputerScore++;
                } else {
                    console.log(playerScore + ComputerScore);
                    return "Draw";
                }

        }    else if (i === 4){
            playRound(playerSelection, computerSelection)
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    console.log(playerScore + ComputerScore);
                    return playerScore++;
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    console.log(playerScore + ComputerScore);
                    return ComputerScore++;
                } else {
                    console.log(playerScore + ComputerScore);
                   return "Draw";
                }

        }   else {
            console.log(i)
            return playerScore.toString + ComputerScore.toString;
        }
     }
}
game()