
var formEl = document.querySelector("#highscoreWinner");
var listEl = document.querySelector("#initals");
var currentScore = localStorage.getItem("currentScore")
var submitButton = document.getElementById("submit")
//print your score 
// console.log(currentScore)
if (typeof(Storage) !== "undefined") {
   document.getElementById("highscoreWinner").innerHTML = "Your final score is " + currentScore;
} else {
    document.getElementById("highscoreWinner").innerHTML = "N/A";
}

var quizArr = JSON.parse(localStorage.getItem("quizHigh")) || []
console.log(quizArr)
function buttonSubmit(event){
    event.preventDefault()
    var saveScore= {
        inital: listEl.value,
        final: currentScore
    }
    quizArr.push(saveScore)
    quizArr.sort( function( a,b ){
        return b.final - a.final
    })
    quizArr.splice(5);
    localStorage.setItem("quizHigh", JSON.stringify(quizArr));
    window.location.assign('./winner.html');
    // console.log(quizArr)
}

submitButton.addEventListener("click",buttonSubmit);
