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