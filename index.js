'use strict';

const QUESTIONS = [{
        question: "1)   What was the color of Mace Windu's lightsaber?",
        answers: [
            "Green",
            "Red",
            "Blue",
            "Purple"
        ],
        ans: "D"
    },

    {
        question: "2)   Who is Darth Vader?",
        answers: [
            "Senator Palpatine",
            "Darth Maul",
            "Anakin Skywalker",
            "Wedge Antilles"
        ],
        ans: "C"
    },

    {
        question: "3)   Who is Anakin Skywalker's mother?",
        answers: [
            "Padame",
            "Shmi",
            "Sade",
            "Jen"
        ],
        ans: "B"
    },
    {
        question: "4)   Why does Jar Jar suck?",
        answers: [
            "Wildly Racist",
            "Stupid",
            "Useless Distraction",
            "All the Above"
        ],
        ans: "D"
    },
    {
        question: "5)   What is the name of Han Solo's ship?",
        answers: [
            "The Enterprise",
            "Serenity",
            "Millennium Falcon",
            "Endeavour"
        ],
        ans: "C"
    },
    {
        question: "6)   Who is Darth Maul's brother?",
        answers: [
            "Qui-gon",
            "Darth Sidious",
            "Savage Opress",
            "Kycina"
        ],
        ans: "C"
    },
    {
        question: "7)   What was the occupation of Luke's Aunt & Uncle",
        answers: [
            "Droid repair",
            "Moisture Farmers",
            "Nerd Herders",
            "Bantha Ranchers"
        ],
        ans: "B"
    },
    {
        question: "8)   How fast can the Millennium Falcon do the Kessel Run?",
        answers: [
            "12 parsecs",
            "1/2 a light year",
            "Warp 4",
            "24 quantums"
        ],
        ans: "A"
    },
    {
        question: "9)   Who or What is Dejarik?",
        answers: [
            "Rebel Commander",
            "Droid",
            "Bonthan spy",
            "Chess game"
        ],
        ans: "D"
    },
    {
        question: "10)  What is the source of a lightsaber's power?",
        answers: [
            "Jedi Crystals",
            "Kyber Crystals",
            "Midichlorians Crystals",
            "The Force"
        ],
        ans: "B"
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
            <input type="radio" name="question0" class="checkedAnswer" value="A">${currentQuestion[questionIndex].answers[0]}<br>
            <input type="radio" name="question0" class="checkedAnswer" value="B">${currentQuestion[questionIndex].answers[1]}<br>
            <input type="radio" name="question0" class="checkedAnswer" value="C">${currentQuestion[questionIndex].answers[2]}<br>
            <input type="radio" name="question0" class="checkedAnswer" value="D">${currentQuestion[questionIndex].answers[3]}<br>
        </li>
        
        <button class = "answers"action = "submit"> Ans </button>
        <h3>You have answered ${score} out of 10 correctly<h3>
        
    `);
}

function handleQuizAnswer() {
    $('.game').submit(function(event) {
        event.preventDefault();
        let answer = $('input[name=question0]:checked').val();
        console.log(answer);
        checkAnswer(answer);
    });
}

function checkAnswer(answer) {
    let currentAnswer = answer;
    let correctAnswer = QUESTIONS[questionIndex].ans;
    if (currentAnswer === correctAnswer) {
        $('.questions').empty();
        $('.rightAns').addClass('show');
        score++;
    }
    else {
        $('.questions').empty();
        $('.wrongAns').addClass('show');
    }
}

function handleQuizContinue() {
    $('.caption').on('click', '.continueQuiz', event => {
        questionIndex++;
        if (questionIndex <= 9) {
            $('.rightAns').removeClass('show');
            $('.wrongAns').removeClass('show');
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
