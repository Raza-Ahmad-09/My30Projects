const questions = [
    {
        question: "Which is not a programming language ?",
        answers: [
            {text: "Java" , correct : false},
            {text: "HTML" , correct : true},
            {text: "JavaScript" , correct : false},
            {text: "C++" , correct : false},
        ]
    },
    {
        question: "Which type of language is JavaScript ?",
        answers: [
            {text: "Compiler" , correct : false},
            {text: "Interpreter" , correct : false},
            {text: "Both of given" , correct : true},
            {text: "None of these" , correct : false},
        ]
    },{
        question: "What is the output of console.log(typeof null) in JavaScript? ?",
        answers: [
            {text: "Object" , correct : true},
            {text: "Null" , correct : false},
            {text: "Undefined" , correct : false},
            {text: "String" , correct : false},
        ]
    },{
        question: "What does === operator check in JavaScript ?",
        answers: [
            {text: "Only value" , correct : false},
            {text: "Only Type" , correct : false},
            {text: "Both of a b " , correct : true},
            {text: "None of these" , correct : false},
        ]
    },{
        question: "What will console.log(1 + \"1\") output ?" ,
        answers: [
            {text: "2" , correct : false},
            {text: "11" , correct : true},
            {text: "NaN" , correct : false},
            {text: "Error" , correct : false},
        ]
    },{
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            {text: "array.unshift()" , correct : false},
            {text: "array.push()" , correct : true},
            {text: "array.pull()" , correct : false},
            {text: "array.shift()" , correct : false},
        ]
    },{
        question: "JavaScript was Developed by ?",
        answers: [
            {text: "Brandon Each" , correct : true},
            {text: "Bill Gates" , correct : false},
            {text: "Elon Musk" , correct : false},
            {text: "None of these" , correct : false},
        ]
    },{
        question: "What does the Promise object represent in JavaScript?",
        answers: [
            {text: "A completed operation" , correct : false},
            {text: "A value that may be available now, later, or never" , correct : true},
            {text: "A synchronous task" , correct : false},
            {text: "An error handler++" , correct : false},
        ]
    },{
        question: "What is the output of console.log([] == ![])?",
        answers: [
            {text: "true" , correct : true},
            {text: "false" , correct : false},
            {text: "undefined" , correct : false},
            {text: "error" , correct : false},
        ]
    },{
        question: "Full form of CSS is",
        answers: [
            {text: "No full form" , correct : false},
            {text: "Cascading style Sheet" , correct : true},
            {text: "Computer Syling Supervision" , correct : false},
            {text: "Compiler style system" , correct : false},
        ]
    }
];

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.options');
const submitBtn = document.getElementById('submit');
const myScore = document.getElementById('score-text')

let currentQuestionidx = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
    currentQuestionidx = 0;
    score = 0;
    startCountdown();
    showQuestion();
}

function showQuestion() {
    // Reset selection and button state
    selectedOption = null;
    submitBtn.innerHTML = "Submit Answer";
    submitBtn.style.display = "none";
    submitBtn.removeEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', checkAnswer);

    let currentQuestion = questions[currentQuestionidx];
    questionElement.innerHTML = `${currentQuestionidx + 1}. ${currentQuestion.question}`;
    
    // Reset and populate options
    optionButtons.forEach((button, index) => {
        // Reset classes and events
        button.classList.remove('correct', 'incorrect', 'selected');
        button.onclick = null; // Remove previous event listeners
        
        if (index < currentQuestion.answers.length) {
            const optionText = button.querySelector('.inneropt');
            optionText.textContent = currentQuestion.answers[index].text;
            button.dataset.correct = currentQuestion.answers[index].correct;
            button.style.display = "flex"; // or "block" depending on your layout
            
            // Add click event
            button.onclick = () => {
                // Deselect all options first
                optionButtons.forEach(btn => btn.classList.remove('selected'));
                // Select this option
                button.classList.add('selected');
                selectedOption = button;
                submitBtn.style.display = "block";
            };
        } else {
            button.style.display = "none";
        }
    });
}

function checkAnswer() {
    if (!selectedOption) return;
    
    const isCorrect = selectedOption.dataset.correct === "true";
    
    // Highlight correct/incorrect
    optionButtons.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else if (button === selectedOption && !isCorrect) {
            button.classList.add('incorrect');
        } 
        button.onclick = null; 
    });
    myScore.textContent = `${score + (isCorrect ? 1 : 0)}/${questions.length}`;
    if (isCorrect) score++;
    
    // Change button to move to next question
    submitBtn.innerHTML = "Next Question";
    submitBtn.removeEventListener('click', checkAnswer);
    submitBtn.addEventListener('click', nextQuestion);
}

function nextQuestion() {
   
}

// Initialize quiz
startQuiz();

const startBtn = document.getElementById("start");
startBtn.addEventListener('click' , function(){
    displayContent();
})
function displayContent(){
    startBtn.style.display = "none";
    document.querySelector(".container").style.display = "block";
}
const restartBtn = document.getElementById("restart");





function showResult() {
    questionElement.innerHTML = `Quiz Completed! Your score: ${score}/${questions.length}`;
    optionButtons.forEach(button => button.style.display = "none");
    submitBtn.style.display = "none";
    if (restartBtn) {
        restartBtn.style.display = "block";
        restartBtn.onclick = () => {
            restartBtn.style.display = "none";
            startQuiz();
        };
    }
}

// Update nextQuestion to use showResult
function nextQuestion() {
    currentQuestionidx++;
    if (currentQuestionidx < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Optionally, show restart button hidden by default
if (restartBtn) restartBtn.style.display = "none";


























































































function startCountdown() {
    clearInterval(timeInterval);
    timeLeft = 60;
    timerBar.style.width = `${(timeLeft / 60) * 100}%`;
    tiemrText.textContent = `${timeLeft} ${timeLeft !== 1 ? 's' : ''}`;
    isRunning = true;

    timeInterval = setInterval(() => {
        timeLeft--;
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;
        tiemrText.textContent = `${timeLeft} ${timeLeft !== 1 ? 's' : ''}`;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            isRunning = false;
            tiemrText.textContent = "Time's up!";
            // Optionally, auto-submit or move to next question
            checkAnswer();
        }
    }, 1000);
}

// Start timer on quiz start and on every new question
const originalShowQuestion = showQuestion;
showQuestion = function() {
    originalShowQuestion.apply(this, arguments);
    startCountdown();
};

// Also restart timer when quiz restarts
const originalStartQuiz = startQuiz;
startQuiz = function() {
    originalStartQuiz.apply(this, arguments);
    startCountdown();
};
//timer
const timerBar = document.getElementById('timerBar');
const tiemrText = document.getElementById('timerText');

let timeLeft = 60;
let timeInterval;
let isRunning = false;

timerBar.style.width =  `${(timeLeft / 60) * 100}%`;
tiemrText.textContent = `${timeLeft} ${timeLeft !== 1 ? 's' : ''}`;








// Functions for SUbmit and timeUp buttons

/*function startTimer() {
            if (isRunning) return;
            
            isRunning = true;
            startBtn.disabled = true;
            resetBtn.disabled = false;
            
            timerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    startBtn.disabled = true;
                    timerText.textContent = "Time's up!";
                }
            }, 1000);
        }
        
        function resetTimer() {
            clearInterval(timerInterval);
            timeLeft = 60;
            isRunning = false;
            updateDisplay();
            startBtn.disabled = false;
            resetBtn.disabled = true;
        }
        
        startBtn.addEventListener('click', startTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        // Initialize
        updateDisplay(); */