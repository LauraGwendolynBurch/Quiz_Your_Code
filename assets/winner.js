var quizArr = JSON.parse(localStorage.getItem("quizHigh")) || []
var fieldQuiz = document.getElementById("initalHighscore");
console.log(quizArr)
function highscore (){
    for (var i = 0; i < quizArr.length; i++) {
        var listEl =  quizArr[i].inital + " " + quizArr[i].final;
        var quizP = document.createElement("p");
        quizP.textContent=listEl
        fieldQuiz.append(quizP)
    }
}

highscore()