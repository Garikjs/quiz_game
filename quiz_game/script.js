const questions = [
    {
        question: "Сколько планет в Солнечной системе?",
        answers: ["7", "8", "9", "10"],
        correct: 1
    },
    {
        question: "Как называется столица Франции?",
        answers: ["Рим", "Лондон", "Париж", "Берлин"],
        correct: 2
    },
    {
        question: "Сколько будет 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    resultElement.textContent = "";
    nextButton.style.display = "none";

    let q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(index) {
    let q = questions[currentQuestionIndex];
    let buttons = answersElement.getElementsByTagName("button");

    if (index === q.correct) {
        resultElement.textContent = "Правильно!";
        buttons[index].classList.add("correct");
    } else {
        resultElement.textContent = "Неверно!";
        buttons[index].classList.add("wrong");
    }

    for (let btn of buttons) {
        btn.onclick = null;
    }

    nextButton.style.display = "block";
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Игра окончена!";
        answersElement.innerHTML = "";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    }
};

loadQuestion();
