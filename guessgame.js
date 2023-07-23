const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 100 );

let guesses = 0;

while (true){
    guesses++
const guess = Number(prompt("Enter the Number (0-100) : "));

if (guess > target){
    console.log("Your guess id too high.");
}
else if (guess < target){
    console.log("Your guess it too low.")
}
else {
    console.log("Your guessed it.");
    break;
}

}

console.log("You guessed the number in "+ guesses +" tries");