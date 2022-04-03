import popupS from "popups";

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('quiz-results');
const submitButton = document.getElementById('quiz-submit');

function buildQuiz() {
    const output = [];
    myQuestions.forEach( (currentQuestion, indexQuestion) => {
        const answers = [];
        for (let option in currentQuestion.answers) {
            answers.push(
                `<input type="radio" id="question${indexQuestion}" name="question${indexQuestion}" value="${option}">
                <label for="question${indexQuestion}">${currentQuestion.answers[option]}</label>`
            );
        }

        output.push(
            `<div class="question">
                <p><strong>${currentQuestion.question}</strong></p>
                <div class="quiz-answers">${answers.join('')}</div>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.quiz-answers');
    let numCorrect = 0;

}



submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: 'Neil Armstrong fue el primer hombre en pisar la luna. ¿Quién fue el segundo?',
        answers:
        {
            a: 'Michael Collins',
            b: 'Buzz Aldrin',
            c: 'Jim Lovell',
            d: 'Alan Shepard'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Un módulo lunar en funcionamiento se trasladó por separado del módulo de comando por primera vez durante esta misión',
        answers:
        {
            a: 'Apolo 7',
            b: 'Apolo 9',
            c: 'Apolo 10',
            d: 'Apolo 13'
        },
        correctAnswer: 'c'
    },
    {
        question: '¿Verdadero o falso? Al módulo de comando de la misión Apolo 10 se nombró Charlie Brown, y su módulo lunar, Snoopy',
        answers:
        {
            a: 'Verdadero',
            b: 'Falso'
        },
        correctAnswer: 'a'
    },
    {
        question: '¿Cuál de las misiones Apolo fue la primera en incluir el vehículo de exploración lunar —el primer vehículo en desplazarse por la luna—?',
        answers:
        {
            a: 'Apolo 11',
            b: 'Apolo 12',
            c: 'Apolo 15',
            d: 'Apolo 17'
        },
        correctAnswer: 'c'
    },
    {
        question: 'La misión Apolo 13 se considera la más famosa porque se tuvo que rescatar a la tripulación completa tras una explosión devastadora. ¿La misión llegó a la luna antes de que ocurriera esa explosión?',
        answers:
        {
            a: 'Sí',
            b: 'No'
        },
        correctAnswer: 'b'
    },
    {
        question: '¿En qué año se realizó la última de las misiones Apolo?',
        answers:
        {
            a: '1972',
            b: '1974',
            c: '1976',
            d: '1978'
        },
        correctAnswer: 'a'
    },

];


window.onload = function() {
    buildQuiz();
    popupS.alert({content: 'Hello World!'});

}