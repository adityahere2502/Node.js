const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties= 0;

while( true) {  
     
const playerChoice = prompt (" Enter Rock, Paper or Scissors (or Q to Quit) : ");

if (playerChoice.toUpperCase() === "Q"){
    break;
}

if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors"){
    console.log("Please Enter a valid playerChoice.")
    continue; 
}

const choices = ["Rock", "Paper", "Scisssors"];

const randomIndex = Math.round(Math.random() * 2);

const computerChoice = choices[randomIndex];

console.log("The Computer Chose : " + computerChoice)

if (computerChoice === playerChoice){
    console.log("Draw!");
    ties++;
}
else if (playerChoice === "Paper" && computerChoice === "Rock"){
    console.log("Won");
    wins++
}
else if (playerChoice === "Scisssors" && computerChoice === "Paper"){
    console.log("Won");
    wins++
}
else if (playerChoice === "Rock" && computerChoice === "Scissors"){
    console.log("Won");
    wins++
}
else{
    console.log("Loss");
    losses++
}

}

console.log("Wins"+wins,"Loss"+losses,"Ties"+ties);