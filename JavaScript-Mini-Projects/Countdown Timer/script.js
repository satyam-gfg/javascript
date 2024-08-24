document.addEventListener('DOMContentLoaded', function() {
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');

    let countdownInterval;
    let remainingTime = 0; // Time in seconds
    let isPaused = false;

    function updateDisplay() {
        const mins = Math.floor(remainingTime / 60);
        const secs = remainingTime % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startCountdown() {
        if (countdownInterval) clearInterval(countdownInterval);

        if (remainingTime <= 0) return;

        countdownInterval = setInterval(function() {
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                timerDisplay.textContent = '00:00';
                return;
            }

            remainingTime--;
            updateDisplay();
        }, 1000);
    }

    function pauseCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        isPaused = true;
    }

    function resetCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        remainingTime = 0;
        updateDisplay();
        isPaused = false;
    }

    startButton.addEventListener('click', function() {
        if (!isPaused) {
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            remainingTime = minutes * 60 + seconds;
        }
        startCountdown();
        isPaused = false;
    });

    pauseButton.addEventListener('click', function() {
        pauseCountdown();
    });

    resetButton.addEventListener('click', function() {
        resetCountdown();
    });
});
