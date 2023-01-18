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
  //console.log(playRound(playerSelection, computerSelection));
  //console.log(playerSelection, computerSelection)

  // 5 rounds using for loops
  // keep score via 2 variables with "++"
  //end loop with else containing "You won/lost x-y" 
  let playerScore = 0;
  let ComputerScore = 0;

  function game(){
    for (let i = 0; i < 5; i++) {
        if (i === 0){
            playRound(playerSelection, getComputerChoice())
            const computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    playerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "You win this round!");
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    ComputerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Oh no! LOOOOSERRRRRR... of this round.");
                } else {
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Round Draw");
                    "Draw";
                }
        }   else if (i === 1){
            playRound(playerSelection, getComputerChoice())
            const computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection,) == "You Win!"){
                    playerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "You win this round!");
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    ComputerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Oh no! LOOOOSERRRRRR... of this round.");
                } else {
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Round Draw");
                   
                }

        }   else if (i === 2){
            playRound(playerSelection, getComputerChoice())
            const computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    playerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore,"You win this round!");
                    
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    ComputerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Oh no! LOOOOSERRRRRR... of this round.");
                    
                } else {
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Round Draw");
               
                }

        }   else if (i === 3){
            playRound(playerSelection, getComputerChoice())
            const computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    playerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "You win this round!");
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    ComputerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Oh no! LOOOOSERRRRRR... of this round.");
                } else {
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "Round Draw");
            
                }

        }    else if (i === 4){
            playRound(playerSelection, getComputerChoice())
            const computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection) == "You Win!"){
                    playerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore, "You win this round!");
                } else if (playRound(playerSelection, computerSelection) == "You Lose!"){
                    ComputerScore++;
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore);
                } else {
                    console.log(computerSelection);
                    console.log(playerScore, ComputerScore);
                   
                }

        }   else {
            console.log("shit ain't right")
        }
     }
}
game()
console.log("Final Score:",playerScore, "Computer Score:", ComputerScore)
if (playerScore > ComputerScore){
    console.log("You WIN!");
} else if(playerScore == ComputerScore){
        console.log("Draw...");
    } else {
        console.log("You LOSE! HAHA BOZO, FUCKIN LOSER!");
    }
