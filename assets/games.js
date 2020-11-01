//make a button
var startButton = document.getElementById("button");
var timeLeft = 120;
var timeEl = document.getElementById("timer");
var questionsEl = document.getElementById("question");

var questions = [
    {   
        text:"hfoab",
        choices:["ajo","ojfa","foafjk","jaksfjo",],
        answer:"ojfa"
    },
    {
        text:"",
        choices:"",
        answer:"",
    },
    {
        text:"",
        choices:"",
        answer:"",
    },
    {
        text:"",
        choices:"",
        answer:"",
    },
    {
        text:"",
        choices:"",
        answer:"",
    }, 
]


function buttonClick(){
    setTime();
    showQuestion();
    // console.log("click?"); 
}

function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      console.log("time is up")
    }

  }, 1000);
}

function showQuestion(){
    questionsEl.textContent = questions[0].text;


}

startButton.addEventListener("click",buttonClick);
