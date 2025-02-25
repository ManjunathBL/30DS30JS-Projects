const questions = [
    {
        question: "National animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
    {
        question: "National Bird of India?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Peacock", correct: true }
        ]
    },
    {
        question: "Gujarat is famous for?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Peacock", correct: false }
        ]
    },
    {
        question: "Kerala is famous for?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Disable all buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
