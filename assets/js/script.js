//getting HTML elements using DOM
var highScoreEl=document.querySelector('#highscore-button');
var timerEl=document.querySelector('#time-remaining');
var startEl=document.querySelector('#start-button');
var quizEl=document.querySelector('#quiz-container');
var introEl=document.querySelector('#intro-container')
//setting timer 
var timer=0;
//Quiz Questions Saved in an array object
function loadQuestion()
{
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
function loadQuiz()
{
    // calculates and sets the timer 15 seconds for each question
timer=loadQuestion().length*15;
timerEl.value=timer;
//on start hides the first intro section & displays the quiz section
introEl.setAttribute('class','container d-none');
quizEl.setAttribute('class','container');

};


//when start button is click loadQuiz() is called
startEl.addEventListener("click", loadQuiz);

