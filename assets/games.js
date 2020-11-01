//make a button
var startButton = document.getElementById("button");
var timeLeft = 120;
var timeEl = document.getElementById("timer");

function buttonClick(){
    setTime();
    console.log("click?"); 
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

startButton.addEventListener("click",buttonClick);
