const prompt = require("prompt-sync")();

const answer = prompt("Would you like to Play ? (y/n) : ")

if (answer.toLowerCase() === "y") {
     
    const answer2 = prompt("Would you like to go left or go right (left/right)");

    if(answer2 === "left"){
        console.log("Oops you fell from a bridge and died !");
    }
    else {
        console.log("Good you enter a Shop");    
    }

    const answer3 = prompt("What would you like to do in the shop ? (roam/sing)");

    if(answer3 === "roam"){
        console.log("You were killed by a Thief")
    }
    else {
        console.log("The thief thought you were police and you became a Hero");
    }
}
else{
    console.log("That's too bad!")
}