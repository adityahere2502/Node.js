// console.log("hello");
const prompt = require("prompt-sync")();

console.log("Welcome to the ANIME Quiz");

let correctAnswers = 0;
const totalQuestions = 3;


const answer1 = prompt("Who wrote the Manga named Jujutsu Kaisen ? : ");
const correct_answer1 = "GA";

if (answer1.toUpperCase() === correct_answer1){
    console.log("Right Answer");
    correctAnswers ++
}
else {
    console.log("Wrong Answer");
}

const answer2 = prompt("Who is MC of One Piece ? : ");
const correct_answer2 = "Luffy";

if (answer2 === correct_answer2){
    console.log("Right Answer");
    correctAnswers ++
}
else {
    console.log("Wrong Answer");
}

const answer3 = prompt("Who is MC of Bleach ? : ");
const correct_answer3 = "Ichigo";

if (answer3 === correct_answer3){
    console.log("Right Answer");
    correctAnswers ++
}
else {
    console.log("Wrong Answer");
}
const percent = Math.round ( correctAnswers / totalQuestions * 100 ); 
console.log("You got " + correctAnswers + " Answers Correct Congrats")
console.log("You scored " + percent + " percent");
console.log("You scored " + percent + "%");