var quizArr = JSON.parse(localStorage.getItem("quizHigh")) || []
var fieldQuiz = document.getElementById("initalHighscore");
var clearButton = document.getElementById("clear")
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

function buttonClear(){
    localStorage.clear() 
    localStorage.removeItem("initalHighscore")
    window.location.assign('./winner.html');
}

clearButton.addEventListener("click",buttonClear);
