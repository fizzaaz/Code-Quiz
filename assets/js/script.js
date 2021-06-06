//array of an object to store the quiz Q/A 
var questions = [{
    Que: "Which operator has highest precedence?",
    Opt: ["()", "=", "*", "+"],
    Ans: "()"
},
{
    Que: "Can we overload functions in C++?",
    Opt: ["Yes", "No", "Compilation Error", "Runtime Error"],
    Ans: "Yes"
},
{
    Que: "Question 5: The logical operator that represents 'or' is ____.",
    Opt: ["||", "OR", "&&", "==="],
    Ans: "||"
},
{
    Que: "Can we assign null to void pointer?",
    Opt: ["Yes","No"],
    Ans: "Yes( )"
},
{
    Que: "Which of the following function of String object combines the text of two strings and returns a new string?",
    Opt: ["add()", "concat()", " merge()", "append()"],
    Ans: "concat()"
}
]


var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//when user clicks start button timer should be started
function start() {

timeLeft = questions.length*15;
document.querySelector("#timeLeft").textContent = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.querySelector("#timeLeft").textContent = timeLeft;
    //proceed to end the game function when timer is below 0 at any time
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); 
    }
}, 1000);

next();
}

//stop the timer to end the game 
function endGame() {
clearInterval(timer);

var quiEl = document.getElementById("quizBody");

var h2El=document.createElement("h2");
h2El.textContent="Game over!";
quiEl.append(h2El);

var h3El=document.createElement("h3");
h3El.textContent="You got a " + score +  "/100!<";
quiEl.append(h3El);

var h3El2=document.createElement("h3");
h3El2.textContent="That means you got " + score / 20 +  " questions correct";
quiEl.append(h3El2);

var Firstname=document.createElement("input");
Firstname.setAttribute("type", "text");
Firstname.setAttribute("id", "name");

Firstname.placeholder="First name"
quiEl.append(Firstname);

//set score button element
var scoreBtn=scoreBtn=document.createElement("Button");
scoreBtn.setAttribute("id","setscore")
scoreBtn.textContent="Set score";
quiEl.append(scoreBtn);

scoreBtn.addEventListener("click", function () {
    setScore();
});
}
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("playerName",  document.getElementById('name').value);
    getScore();
    }
    
    
//store the scores on local storage

function getScore() {

var quizBodyEl = document.getElementById("quizBody");
var h2=document.createElement("h2");
h2.textContent=localStorage.getItem("playerName") + "'s highscore is:";
quizBodyEl.append(h2);
var h1=document.createElement("h1");
h1.textContent=localStorage.getItem("highscore") ;
quizBodyEl.append(h1);
}
//clears the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("playerName",  "");
resetGame();
}

//reset the game 
function resetGame() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeLeft = 0;
timer = null;

document.getElementById("timeLeft").innerHTML = timeLeft;

var quizContent = `
<h1>
    JavaScript Quiz!
</h1>
<h3>
    Click to play!   
</h3>
<button onclick="start()">Start!</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 15seconds from the timer if user chooses an incorrect answer
function incorrect() {
timeLeft -= 15; 
next();
}

//increases the score by 20points if the user chooses the correct answer
function correct() {
score += 20;
next();
}

//loops through the questions 
function next() {
currentQuestion++;

if (currentQuestion > questions.length - 1) {
    endGame();
    return;
}

var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].Opt.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].Opt[buttonLoop]);
    if (questions[currentQuestion].Opt[buttonLoop] == questions[currentQuestion].Ans) {
        buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
}


document.getElementById("quizBody").innerHTML = quizContent;
}
function onload()
{

var quizbody=document.createElement('div');
quizbody.setAttribute("id","quizBody")
var h1=document.createElement('h1');
h1.textContent="Coding Quiz!"
quizbody.append(h1);
var h3=document.createElement('h3');
h3.textContent="Click Start to "
quizbody.append(h3);

//start the quiz
var startBtn=document.createElement("Button");
startBtn.textContent="Start Quiz";
quiEl.append(startBtn);

scoreBtn.addEventListener("click", function () {
    start();
});
}
onload();