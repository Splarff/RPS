function GetComputerChoice(choice) { 
    let i = Math.random();
    if (i <= .33){
        return "rock";
    } else if (i >.33 && i <= .66) {
        return "paper";
    } else if (i >.66){
        return "scissors";
    } else {
        return "error"
    }
} console.log(GetComputerChoice())
// option = rock/paper/scissors
//rock <= .33 ; .33 < paper <= .66 ; scissors >.66
// use math.random to determine option value
// use if statements to determine rock/paper/scissors