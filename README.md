# Code Quiz

<h4>Designed and coded by <a href="https://github.com/fizzaaz">FIZZA ZAIDI</a></h4>
This project was designed as a homework assignment for UT Austin coding bootcamp. This application emphasizes the use of Javascript to dynamically update the HTML and CSS code to generate the Coding Quiz Challenge.

## Getting Started
This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link. Or, download the sources files to use this as a template.

* [GitHub Repository]()
* [Deployed GitHub IO]()
* [Full Demo Video]()

![Code-Quiz Demo](assets/demo/gif.gif)

### Prerequisites

To install this application, you will need a text editor. I would recommend Visual Studio Code. 

### Installing

To install this code, download the zip file, or use GitHub's guidelines to clone the repository. 

### Summary
This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data. This project utilizes the use of appending HTML pages.

### Features: 
* A Start button 
    * This starts a timer for the user
    * Each question averages 15 seconds each for a total time of 75 seconds. 

![](assets/images/button.PNG)

* Multiple Choice Questions
    * If questions are answered incorrectly, 15 seconds are deducted from the time remaining .
    * Answers are recording using an event listener, "click".

![](assets/images/question1.PNG)

* Score: 
    * Final score which is calculated using time remaining
    * A Summary of how many questions answered correctly 
    * Input area to record initials
    * A Set Score button
    * Set Score buttom saves the initials and score to the local storage.

![](assets/images/final.PNG)

* Highscores
    * This a list summary of intials and final scores
    * Clear button resets the page and local storage

![](assets/images/high.PNG)

### Project Requirements
* WHEN user click the start button THEN a timer starts and the user am presented with a question.
* WHEN user answer a question THEN user is presented with another question.
* WHEN user answer a question incorrectly THEN time is subtracted from the clock
* WHEN all questions are answered or the timer reaches 0 THEN the game is over
* WHEN the game is over THEN user can save his/her initials and score

### This project has script features of:
* Questions contained in an array variable with objects
* Variable declaration area 
* An event listener (onclick) that generates time interval
* A function to render the questions and choices on the page using a for loop
* An event listener on all list choices 
* A comparison statement to compare correct answers to choices
* An appended page showing the final stats of the individual user with input area for initials, captures local storage
* Highscores retreived local storage

### File Types: 
* HTML
    * Index.html 
        * Contains a navgation bar that has highscore and timer on it.
        * Contains quiz section that has Q/A and everything else on it.
* CSS Page
    * Styles.css
        * Contains centering and styling for html list features
* Javascript Page
    * script.js 
        * Variables, including arrays with object
        * Event listeners
        * if/else if statements
        * For Loops
        * Functions 
        * Local Storage set and get function
