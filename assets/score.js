
var formEl = document.querySelector("#highscoreWinner");
var listEl = document.querySelector("#initals");

//print your score 
if (typeof(Storage) !== "undefined") {
   document.getElementById("highscoreWinner").innerHTML = "Your final score is " + localStorage.getItem("currentScore");
} else {
    document.getElementById("highscoreWinner").innerHTML = "N/A";
}