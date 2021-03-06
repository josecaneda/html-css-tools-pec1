
import toast from 'toast-me';



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('quiz-results');
const submitButton = document.getElementById('quiz-submit');

function buildQuiz() {
    const output = [];
    myQuestions.forEach( (currentQuestion, indexQuestion) => {
        const answers = [];
        for (let option in currentQuestion.answers) {
            answers.push(
                `<div>
                <input  type="radio" id="question${indexQuestion}" name="question${indexQuestion}" value="${option}">
                <label class="quiz-option" for="question${indexQuestion}">${currentQuestion.answers[option]}</label>
                </div>`
            );
        }

        output.push(
            `<div class="question">
                <p><strong>${indexQuestion + 1}. ${currentQuestion.question}</strong></p>
                <div class="quiz-answers">${answers.join('')}</div>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.quiz-answers');
    let numCorrect = 0;
    let isCoveredQuiz;
    isCoveredQuiz = myQuestions.every( (currentQuestion, indexQuestion) => {
        const answerContainer = answerContainers[indexQuestion];
        const selector = `input[name=question${indexQuestion}]:checked`;
        try {
            answerContainer.querySelector(selector).value;
            return true;
        } catch (error) {
            return false;

        }
    });

    if (isCoveredQuiz) {
        myQuestions.forEach( (currentQuestion, indexQuestion) => {
            const answerContainer = answerContainers[indexQuestion];
            const selector = `input[name=question${indexQuestion}]:checked`;
            const userAnswer = answerContainer.querySelector(selector).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[indexQuestion].style.color = 'lightgreen';
            } else {
                answerContainers[indexQuestion].style.color = 'red'; 
            }
        });

        toast(`${numCorrect} repuestas correctas de ${myQuestions.length} `);

    } else {
        toast(`Por favor, no dejes ninguna pregunta en blanco`);
    }
}



const myQuestions = [
    {
        question: 'Neil Armstrong fue el primer hombre en pisar la luna. ??Qui??n fue el segundo?',
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
        question: 'Un m??dulo lunar en funcionamiento se traslad?? por separado del m??dulo de comando por primera vez durante esta misi??n',
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
        question: '??Verdadero o falso? Al m??dulo de comando de la misi??n Apolo 10 se nombr?? Charlie Brown, y su m??dulo lunar, Snoopy',
        answers:
        {
            a: 'Verdadero',
            b: 'Falso'
        },
        correctAnswer: 'a'
    },
    {
        question: '??Cu??l de las misiones Apolo fue la primera en incluir el veh??culo de exploraci??n lunar ???el primer veh??culo en desplazarse por la luna????',
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
        question: 'La misi??n Apolo 13 se considera la m??s famosa porque se tuvo que rescatar a la tripulaci??n completa tras una explosi??n devastadora. ??La misi??n lleg?? a la luna antes de que ocurriera esa explosi??n?',
        answers:
        {
            a: 'S??',
            b: 'No'
        },
        correctAnswer: 'b'
    },
    {
        question: '??En qu?? a??o se realiz?? la ??ltima de las misiones Apolo?',
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
    submitButton.addEventListener('click', showResults);
    
      
    
}







