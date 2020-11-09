
var formEl = document.querySelector("#highscoreWinner");
var listEl = document.querySelector("#initals");


localStorage.getItem("currentScore")
// console.log("currentScore")
formEl.innerhtml = ("Your final score is" + "currentScore")