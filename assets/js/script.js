//getting HTML elements using DOM
var highScoreEl = document.querySelector('#highscore-button');
var timerEl = document.querySelector('#time-remaining');
var startEl = document.querySelector('#start-button');
var quizEl = document.querySelector('#quiz-container');
var introEl = document.querySelector('#intro-container')
//delcaring elements to create Q/A as rows and coloums
var rowEl, colEl;
//setting timer 
var timer = 0;
var curentQues=0;

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

let clickTimeout = false;
//when start button is click this function will be called
function loadQuiz() {

    // calculates and sets the timer 15 seconds for each question
    numOfQA = loadQuestion().length;
    timer = numOfQA * 15;
    timerEl.value = timer;
    var myInterval = setInterval(function () {
        if (timer < 1) {
            clearInterval(myInterval);
            /* When the final question is answered or the timer reaches zero, the quiz container is hidden
            and the score container is displayed, where the user enters their initials*/
            quizEl.setAttribute("class", "container d-none");
            finalContainerEl.setAttribute("class", "container");
            return;
        }
        timer--;
        timerEl.value = timer;
    }, 1000);
    let Timeout = false;
    function generateQuestion(curentQues) {
    //hides intro section and displays quiz
    introEl.setAttribute('class', 'container d-none');
    quizEl.setAttribute('class', 'container');
    //creating rows and coloums to display Q/A

    rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row");
    quizEl.append(rowEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-0 col-sm-3");
    rowEl.append(colEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-12 col-sm-8");
    rowEl.append(colEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-0 col-sm-2");
    rowEl.append(colEl);

    colEl = rowEl.children[1];
    rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row mb-6");
    colEl.append(rowEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-11");
    rowEl.append(colEl);

    headerEl = document.createElement("h3");
    headerEl.innerHTML = loadQuestion()[curentQues].Question;
    colEl.append(headerEl);

    for (let i = 0; i < loadQuestion()[curentQues].Options.length; i++) {
        let rowEl2 = document.createElement("div");
        rowEl2.setAttribute("class", "row mb-1");
        colEl.append(rowEl2);

        let colEl2 = document.createElement("div");
        colEl2.setAttribute("class", "col-11");
        rowEl2.append(colEl2);

        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-primary");
        buttonEl.setAttribute("type", "button");
        buttonEl.innerHTML = loadQuestion()[curentQues].Options[i];
        colEl2.append(buttonEl);
    }
    buttonEl.addEventListener("click", function () {
        /* When the user clicks one of the answer buttons, if it is the correct answer, the message "Correct" is displayed, 
        and if not, the message "Incorrect" is displayed and 15 seconds deducted from the timer*/
        if (Timeout) {
            return;
        }
        Timeout = true;
        clearInterval(myInterval);
        colEl = quizContainerEl.children[0].children[1];
        rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row border-top");
        colEl.append(rowEl);

        colEl = document.createElement("div");
        colEl.setAttribute("class", "col-12");
        rowEl.append(colEl);

        let display = document.createElement("p");
        colEl.append(display);
        if (buttonEl.innerHTML === loadQuestion()[curentQues].Answer) {
            display.textContent = "Correct!";
        } else {
            display.textContent = "Incorrect";
            timer = timer - 15;
            if (timer < 0) {
                timer = 0;
            }
            timerEl.value =timer;
        }
        curentQues++;
        if (curentQues > numOfQA) {
            score = timer;
        }
        setTimeout(function () {
            // When an answer is chosen, pause the timer and show the result for 2 seconds before loading the next question
            if (curentQues > numOfQA) {
                // Move to the results page
                quizEl.setAttribute("class", "container d-none");
                finalContainerEl.setAttribute("class", "container");
                finalScoreEl.value=score;
            } else {
                generateQuestion(curentQues);
                Timeout = false;
                myInterval = setInterval(function () {
                    if (timer < 1) {
                        clearInterval(myInterval);
                        quizEl.setAttribute("class", "container d-none");
                        finalContainerEl.setAttribute("class", "container");
                        return;
                    }
                    timer = timer - 1;
                    timer.setAttribute("value", timer);
                }, 1000);
            }
        }, 2000);
    });
}



/* for (let q = 0; q < numOfQA; q++) {
     optionEl = document.createElement('ul');
     optionEL.setAttribute()
     var ques = document.createElement('h2');
     ques.textContent = loadQuestion()[q].Question;
     quizEl.append(ques);
     ques.append(optionEl);
     for (let i = 0; i < loadQuestion()[q].Options.length; i++) {
         liEl = document.createElement('li');
         alert(loadQuestion()[q].Options[i])
         liEl.textContent = loadQuestion()[q].Options[i];
         optionEL.append(liEl);
     }
 }*/




//  Clicking the "Start" button starts the quiz, hides the Intro container, and displays the quiz container
startEl.addEventListener("click", loadQuiz);

