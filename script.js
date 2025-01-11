// script.js
let score = 0;
let highScore = localStorage.getItem('highScore') || 0; // Load high score from localStorage
let timeLeft = 10; // Game duration in seconds
let timer;

// Update high score display
document.getElementById('high-score').textContent = highScore;

// Start game logic
document.getElementById('start-btn').addEventListener('click', () => {
  score = 0;
  timeLeft = 10;
  document.getElementById('score').textContent = score;
  document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
  document.getElementById('click-btn').disabled = false;
  document.getElementById('start-btn').disabled = true;

  // Countdown timer
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
});

// Click button logic
document.getElementById('click-btn').addEventListener('click', () => {
  score++;
  document.getElementById('score').textContent = score;
});

// End game logic
function endGame() {
  document.getElementById('click-btn').disabled = true;
  document.getElementById('start-btn').disabled = false;

  // Update high score if the current score is greater
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore); // Save high score to localStorage
    document.getElementById('high-score').textContent = highScore;
  }

  alert(`Game Over! Your Score: ${score}`);
}
