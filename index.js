'use strict';

const QUESTIONS = [{
        question: "1)   What was the color of Mace Windu's lightsaber?",
        answers: [
            "Green",
            "Red",
            "Blue",
            "Purple"
        ],
        ans: "D",
        reveal: "Purple"
    },

    {
        question: "2)   Who is Darth Vader?",
        answers: [
            "Senator Palpatine",
            "Darth Maul",
            "Anakin Skywalker",
            "Wedge Antilles"
        ],
        ans: "C",
        reveal: "Anakin Skywalker"
    },

    {
        question: "3)   Who is Anakin Skywalker's mother?",
        answers: [
            "Padame",
            "Shmi",
            "Sade",
            "Jen"
        ],
        ans: "B",
        reveal: "Shmi"
    },
    {
        question: "4)   Why does Jar Jar suck?",
        answers: [
            "Wildly Racist",
            "Stupid",
            "Useless Distraction",
            "All the Above"
        ],
        ans: "D",
        reveal: "All the Above"
    },
    {
        question: "5)   What is the name of Han Solo's ship?",
        answers: [
            "The Enterprise",
            "Serenity",
            "The Millennium Falcon",
            "Endeavour"
        ],
        ans: "C",
        reveal: "The Millennium Falcon"
    },
    {
        question: "6)   Who is Darth Maul's brother?",
        answers: [
            "Qui-gon",
            "Darth Sidious",
            "Savage Opress",
            "Kycina"
        ],
        ans: "C",
        reveal: "Savage Opress"
    },
    {
        question: "7)   What was the occupation of Luke's Aunt & Uncle",
        answers: [
            "Droid repair",
            "Moisture Farmers",
            "Nerd Herders",
            "Bantha Ranchers",
        ],
        ans: "B",
        reveal: "Moisture Farmers"
    },
    {
        question: "8)   How fast can the Millennium Falcon do the Kessel Run?",
        answers: [
            "12 parsecs",
            "1/2 a light year",
            "Warp 4",
            "24 quantums"
        ],
        ans: "A",
        reveal: "12 parsecs"
    },
    {
        question: "9)   Who or What is Dejarik?",
        answers: [
            "Rebel Commander",
            "Droid",
            "Bonthan spy",
            "Chess game"
        ],
        ans: "D",
        reveal: "Chess game"
    },
    {
        question: "10)  What is the source of a lightsaber's power?",
        answers: [
            "Jedi Crystals",
            "Kyber Crystals",
            "Midichlorians Crystals",
            "The Force"
        ],
        ans: "B",
        reveal: "Kyber Crystals"
    }
];

let questionIndex = 0;
let score = 0;

function handleStartOfQuiz() {
    $('.intro-form').submit(function(event) {
        event.preventDefault();
        $('.intro-form').remove();
        renderQuizQuestions();

    });
}

function renderQuizQuestions() {
    let currentQuestion = QUESTIONS;
    $('.questions').append(`
        <li>
            <h2>${currentQuestion[questionIndex].question}</h2>
            <input type="radio" name="question0" id="choice1" class="checkedAnswer" value="A">
            <label for = "choice1">${currentQuestion[questionIndex].answers[0]}</label><br>
            <input type="radio" name="question0" id="choice2" class="checkedAnswer" value="B">
            <label for = "choice2">${currentQuestion[questionIndex].answers[1]}</label><br>
            <input type="radio" name="question0" id="choice3" class="checkedAnswer" value="C">
            <label for = "choice3">${currentQuestion[questionIndex].answers[2]}</label><br>
            <input type="radio" name="question0" id="choice4" class="checkedAnswer" value="D">
            <label for = "choice4">${currentQuestion[questionIndex].answers[3]}</label><br>
            
        </li>
        
        <button class = "answers"action = "submit"> Ans </button>
        <h3>You have answered ${score} out of 10 correctly<h3>
        
    `);
}

function handleQuizAnswer() {
    $('.game').submit(function(event) {
        event.preventDefault();
        let answer = $('input[name=question0]:checked').val();
        checkAnswer(answer);
    });
}

function checkAnswer(answer) {
    let currentAnswer = answer;
    let correctAnswer = QUESTIONS[questionIndex].ans;
    let revealAns = QUESTIONS[questionIndex].reveal;
    if (currentAnswer === correctAnswer) {
        $('.questions').empty();
        $('.rightAns').addClass('show');
        score++;
    }
    else {
        $('.questions').empty();
        $('.wrongAns').addClass('show');
        $('.wrongAns').append(`<div class="reveal"><h2> The Correct Answer is ${revealAns}!<h2/></div>`);
    }
}

function handleQuizContinue() {
    $('.giff').on('click', '.continueQuiz', event => {
        console.log("click");
        questionIndex++;
        if (questionIndex <= 9) {
            $('.rightAns').removeClass('show');
            $('.wrongAns').removeClass('show');
            $('.reveal').empty();
            renderQuizQuestions();
        }
        else {
            gameConclusion();
        }
    });
}

function gameConclusion() {
    if (score <= 7) {
        $('.rightAns').removeClass('show');
        $('.wrongAns').removeClass('show');
        $('.questions').append(`
        <h2> You answered ${score} out of 10 correctly!<h2>
        <h2>All too easy! Perhaps you are not as powerful as the Emperor thought.<h2>
        <button class = "resetQuiz">Try Again?</button>
        `);
    }
    else if (score === 8) {
        $('.rightAns').removeClass('show');
        $('.wrongAns').removeClass('show');
        $('.questions').append(`
        <h2> You answered ${score} out of 10 correctly!<h2>
        <h2> Impressive! Very Impressive! <h2>
        <button class = "resetQuiz">Try Again?</button>
        `);
    }
    else if (score === 9) {
        $('.rightAns').removeClass('show');
        $('.wrongAns').removeClass('show');
        $('.questions').append(`
        <h2> You answered ${score} out of 10 correctly!<h2>
        <h2> Obi Wan has taught you well! Now join me and complete your training!<h2>
        <button class = "resetQuiz">Try Again?</button>
        `);
    }
    else {
        $('.rightAns').removeClass('show');
        $('.wrongAns').removeClass('show');
        $('.questions').append(`
        <h2> You answered ${score} out of 10 correctly!<h2>
        <h2> You are indeed powerful! Now Join me and together we will rule the Empire!!!<h2>
        <button class = "resetQuiz">Try Again?</button>
        `);
    }
}

function handleQuizRestart() {
    $('.questions').on('click', '.resetQuiz', event => {
        event.preventDefault();
        questionIndex = 0;
        score = 0;
        $('.questions').empty();
        renderQuizQuestions();
    });
}




function quizGameApp() {
    handleStartOfQuiz();
    handleQuizAnswer();
    handleQuizContinue();
    handleQuizRestart();
}

$(quizGameApp);
