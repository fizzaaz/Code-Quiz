//getting HTML elements using DOM
var highScoreEl = document.querySelector('#highscore-button');
var timerEl = document.querySelector('#time-remaining');
var startEl = document.querySelector('#start-button');
var quizEl = document.querySelector('#quiz-container');
var introEl = document.querySelector('#intro-container')
//delcaring elements to create Q/A as rows and coloums
var rowEl,colEl;
//setting timer 
var timer = 0;
//Quiz Questions Saved in an array object
function loadQuestion() {
    var questions = [
        {
            Question: "Question 1: Commonly used data types DO NOT include:",
            Options: ["strings", "booleans", "alerts", "numbers"],
            Answer: "alerts"
        },
        {
            Question: "Question 2: The condition in an if / else statement is enclosed within ____.",
            Options: ["quotes", "curly brackets", "parentheses", "square brackets"],
            Answer: "parentheses"
        },
        {
            Question: "Question 3: The instructions for a function are enclosed within ____.",
            Options: ["quotes", "curly brackets", "parentheses", "square brackets"],
            Answer: "curly brackets"
        },
        {
            Question: "Question 4: A property of an object that is a function is called a ____.",
            Options: ["method", "string", "stylesheet", "boolean"],
            Answer: "method"
        },
        {
            Question: "Question 5: The logical operator that represents 'or' is ____.",
            Options: ["||", "OR", "&&", "==="],
            Answer: "||"
        }
    ];
    return questions;
}
//when start button is click this function will be called
function loadQuiz() {
    // calculates and sets the timer 15 seconds for each question
    numOfQA=loadQuestion().length;
    timer = QA.length * 15;
    timerEl.value = timer;
    //hides intro section and displays quiz
    introEl.setAttribute('class', 'container d-none');
    quizEl.setAttribute('class', 'container');
    //creating rows and coloums to display Q/A
    rowEl=document.createElement('h2');
    rowEl.setAttribute('class','row');
  

    colEl=document.createElement('div');
    colEl.setAttribute('class','col-12 ');
    colEl.textContent="you"
    rowEl.append(colEl);

    colEl=document.createElement('div');
    colEl.setAttribute('class','col-12 ');
    colEl.textContent="ayu"
    rowEl.append(colEl);

    colEl=document.createElement('div');
    colEl.setAttribute('class','col-12 ');
    colEl.textContent="ayu"
    rowEl.append(colEl);
    for (let i = 0; i < numOfQA; i++) {
        if (timer > 0) {
            rowEl.textContent=loadQuestion.Question[i];
            quizEl.append(rowEl);
            for()
            colEl.textContent="you"
            rowEl.append(colEl);
        }
    }


};


//  Clicking the "Start" button starts the quiz, hides the Intro container, and displays the quiz container
startEl.addEventListener("click", loadQuiz);

