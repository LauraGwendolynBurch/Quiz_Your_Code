//set var 
var quizArr = JSON.parse(localStorage.getItem("quizHigh")) || []
var fieldQuiz = document.getElementById("initalHighscore");
var clearButton = document.getElementById("clear")
// console.log(quizArr)

// calls the highscore function, adds an elemet to append list to
function highscore (){
    for (var i = 0; i < quizArr.length; i++) {
        var listEl =  quizArr[i].inital + " " + quizArr[i].final;
        var quizP = document.createElement("p");
        quizP.textContent=listEl
        fieldQuiz.append(quizP)
    }
}

//call to run highscore function 
highscore()

//runs the clearing of local storage 
function buttonClear(){
    localStorage.clear() 
    localStorage.removeItem("initalHighscore")
    window.location.assign('./winner.html');
}

//create button event to call the clearing of local storage 
clearButton.addEventListener("click",buttonClear);
