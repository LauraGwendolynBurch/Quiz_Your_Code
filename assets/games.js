//make a button
//identify all global variables 
var startButton = document.getElementById("button");
var timeLeft = 60;
var timeEl = document.getElementById("timer");
var questionsEl = document.getElementById("question");
var choicesEl= document.getElementById("choices");
var answerEl = document.getElementById("answer");
var score = 0;
//put quesions and answers into an object
var questions = [
    {   
        text:"1. Which civilization is credited with creating the first circus?",
        choices:["a. Sumerians","b. Romans","c. Chinese","d. Egyptians",],
        answer:"b. Romans"
    },
    {
        text:"2. In 1947, which famous family achieved a seven-person pyramid on a high-wire, 35 feet above the ground?",
        choices:["a. The Barnums", "b. The Wallendas", "c. The Partridge Family", "d. The Wallace Troupe",],
        answer:"b. The Wallendas",
    },
    {
        text:"3. In circus what is a funambulist?",
        choices:["a. A tightrope walker", "b. A clown", "c. A juggler", "d. The Ringmaster",],
        answer:"a. A tightrope walker",
    },
    {
        text:"4. What happened at the Ringling Bros and Barnum and Bailey Circus at Hartford, Connecticut on July 6, 1944?",
        choices:["a. Animal lovers released all the animals", "b. The tent caught on fire", "c. The lion-tamer was eaten by his lions", "d. The high-wire snapped, resulting in the death of several performers",],
        answer:"b. The tent caught on fire",
    },
    {
        text:"5. Who is credited with building the first permanent circus building, and also inventing the circus 'ring' in 1769? ",
        choices:["a. P.T. Barnum", "b. Thomas Edison", "c. Brendan Shelper", "d. Philip Astley",],
        answer:"d. Philip Astley",
    }, 
]

//Set style attributes 
timeEl.setAttribute ("style", "color:blueviolet; padding:5px; margin-right:35px;");

function buttonClick(){
    var introEl = document.getElementById("intro");
    introEl.textContent = "";
    setTime();
    showQuestion(0);
    // console.log("click?"); 
}

function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

function choicesClick(event){
    // console.log(event)
    event.preventDefault();
    if (event.target.value === "Wrong!"){
        // run wrong function
        wrongAnswer();
        
    //     
    } else if (event.target.value === "Correct!"){
        //run correct function
        rightAnswer();
    };
}

function wrongAnswer(){
    var wrongEl = document.createElement("h2") 
    wrongEl.innerHtml = "Wrong!";
    wrongEl.append("h2");
}

function rightAnswer(){
    var rightEl = document.createElement("h2") 
    rightEl.innerHtml = "Correct!"
    rightEl.append("h2");
}

function showQuestion(index){
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
        buttonEl.addEventListener("click",choicesClick);

    };
};

startButton.addEventListener("click",buttonClick);
