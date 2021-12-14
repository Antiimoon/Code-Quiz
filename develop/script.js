class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a Question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// Display Question
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgess();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

//show quiz progress
function showProgess() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =  `${currentQuestionNumber} / ${quiz.questions.length}`;
}

// Show Score
function showScores() {
    let quizEndHTML = 
    `<h1>Quiz Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} / ${quiz.questions.length}</h2>
    <div class="quiz-repeat"> <a href="index.html">Try Again!</a></div>`;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [

    new Question(
        "Inside which HTML element do we put the JavaScript?", ["js", "script", "scripting", "javascript"], "script"
    ),
    new Question(
        "How do you create a function in JavaScript?", ["function myFunction()", "function:myFunction()", "function = myFunction()", "myFunction="], "function myFunction()"
    ),
    new Question(
        "How do you write an IF statement in JavaScript?", ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"], "if (i == 5)"
    ),
    new Question(
        "How does a FOR loop start?", ["for (i <= 5; i++)", "for i = 1 to 5", "for (i=0; i <= 5; i++)", "for (i = 0; i <= 5)"], "for (i=0; i <= 5; i++)"
    ),
    new Question(
        "How can you add a comment in a JavaScrpit?", ["//This is a comment", "!--This is a comment--", "-This is a comment-", "'This is a comment'"], "//This is a comment"
    ),
    new Question(
        "How does a WHILE loop start", ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10)", "while i === 10"], "while (i <= 10)"
    ),
    new Question(
        "How do you find the number with the highest value of x and y?", ["Math.ceil(x, y)", "ceil(x, y)", "top(x, y)", "Math.max(x, y)"], "Math.max(x, y)"
    ),
    new Question(
        "Which event occurs when the user clicks on an HTML element?", ["onmouseclick", "onclick", "onmouseover", "clickedon"], "onclick"
    ),
    new Question(
        "How do you declare a JavaScript variable?", ["var-thisName", "var thisName", "variable thisName", "v thisName"], "var thisName"
    ),
    new Question(
        "Which operator is used to assign a value to a variable?", ["-", "*", "~", "="], "="
    ),
];

let quiz = new Quiz(questions);

//display question
displayQuestion();

// Add a countdown
let time = 2;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown();