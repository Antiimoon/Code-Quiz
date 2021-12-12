// Quiz Section
var quiz = document.querySelector("quiz-body");
var timer = document.querySelector("#timer-sec");

// Question Section
var question = document.querySelector("#question");

// Multiple Choices of Questions
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

// Correct and Next
var correct = document.querySelector("correct-score");
var nextBtn = document.querySelector("#next");

//Result Section
var result = document.querySelector("result");
var score = document.querySelector("#high-score");
var initial = document.querySelector("#initials");
var tryAgainBtn = document.querySelector("#try-again");

// Timer for Quiz
let countDown = () => {
    if (timer === 20) {
        clearInterval(interval);
    } else {
        timer++;
        console.log(timer);
    }
};

setInterval(countDown, 1000);