const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", loadQuestion);

// Start Quiz
loadQuestion();
