//make a button
//identify all global variables 
var startButton = document.getElementById("button");
var timeLeft = 60;
var timeEl = document.getElementById("timer");
var questionsEl = document.getElementById("question");
var choicesEl= document.getElementById("choices");
var answerEl = document.getElementById("answer");
var score = 0;
var wrongOrRightText = document.getElementById("wrongOrRight");
//put quesions and answers into an object
var questions = [
    {   
        text:"Which civilization is credited with creating the first circus?",
        choices:["a. Sumerians","b. Romans","c. Chinese","d. Egyptians",],
        answer:"b. Romans"
    },
    {
        text:"In 1947, which famous family achieved a seven-person pyramid on a high-wire, 35 feet above the ground?",
        choices:["a. The Barnums", "b. The Wallendas", "c. The Partridge Family", "d. The Wallace Troupe",],
        answer:"b. The Wallendas",
    },
    {
        text:"In circus what is a funambulist?",
        choices:["a. A tightrope walker", "b. A clown", "c. A juggler", "d. The Ringmaster",],
        answer:"a. A tightrope walker",
    },
    {
        text:"What happened at the Ringling Bros and Barnum and Bailey Circus at Hartford, Connecticut on July 6, 1944?",
        choices:["a. Animal lovers released all the animals", "b. The tent caught on fire", "c. The lion-tamer was eaten by his lions", "d. The high-wire snapped, resulting in the death of several performers",],
        answer:"b. The tent caught on fire",
    },
    {
        text:"Who is credited with building the first permanent circus building, and also inventing the circus 'ring' in 1769? ",
        choices:["a. P.T. Barnum", "b. Thomas Edison", "c. Brendan Shelper", "d. Philip Astley",],
        answer:"d. Philip Astley",
    }, 
]
var questionIndex = 0;

//Set style attributes 
timeEl.setAttribute ("style", "color:blueviolet; padding:5px; margin-right:35px;");

// clears the intro page text and calls next two functions (starts time and shows questions)
function buttonClick(){
    var introEl = document.getElementById("intro");
    introEl.textContent = "";
    setTime();
    showQuestion(questionIndex);
    // console.log("click?"); 
}

// starts timer and stops it to set score
function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft === 0 || questionIndex == questions.length) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
};

// targets if the answer is wrong or right and calls the matching function
function choicesClick(event){
    // console.log(event.target.value)
    event.preventDefault();
    if (event.target.value === "Wrong!"){
        // console.log("wrong")
        // run wrong function
        wrongAnswer();
        
    //     
    } else if (event.target.value === "Correct!"){
        //console.log("right")
        //run correct function
        rightAnswer();
    };
}

// if the answer is wrong it clears the choices, prints wrong, subracts time, and moves to the next question
function wrongAnswer(){
    choicesEl.innerHTML = ""
    var wrongEl = document.createElement("p")
    wrongEl.innerText = "Wrong!";
    timeLeft -= 10;
    wrongOrRightText.append(wrongEl);
    setTimeout(function(){
        wrongOrRightText.innerHTML="";
        questionIndex += 1
        showQuestion(questionIndex);
    },1000)
}

// if the answer is right it clears the choices, prints correct, adds time, and moves to the next question
function rightAnswer(){
    choicesEl.innerHTML = ""
    var rightEl = document.createElement("p") 
    timeLeft += 10;
    rightEl.innerText = "Correct!"
    wrongOrRightText.append(rightEl);
    setTimeout(function(){
        wrongOrRightText.innerHTML="";
        questionIndex += 1
        showQuestion(questionIndex);
    },1000)
}

// last function to call at the end of the loop, saves score to local storage, sets score, moves to next html page
function gameOver(){
    score = timeLeft;
    var gameOverEl = document.createElement("p") 
    gameOverEl.innerText = ("Final Score " + score)
    wrongOrRightText.append(gameOverEl);
    
    setTimeout (function(){
        window.location.assign('./score.html');
        }, 3000);
    localStorage.setItem("currentScore", JSON.stringify(score));
    // console.log("currentScore")
    // console.log(localStorage)
}

// shows questions and answers, set elements for them in html, and calls clickevent to set answers, once loop through questions calls the game over function
function showQuestion(index){
    if (index < questions.length){
    questionsEl.textContent = questions[index].text;
    for (var i = 0; i < questions[index].choices.length; i++) {
       
        var buttonEl = document.createElement("button");
        var pEl = document.createElement("p");
        if (questions[index].choices[i] === questions[index].answer){
            buttonEl.setAttribute("value", "Correct!")
        } else {
            buttonEl.setAttribute("value", "Wrong!")
        }
        pEl.append(questions[index].choices[i]);
        pEl.append(buttonEl);
        choicesEl.append(pEl);
        questionsEl.append(choicesEl);
        questionsEl.append(wrongOrRightText);
        buttonEl.addEventListener("click",choicesClick);
    };
   } else {
     gameOver();
     
   };
    
};

// starts the entire game and calls the next functions inside buttonClick
startButton.addEventListener("click",buttonClick);
