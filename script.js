let isCrashed = false;
let isPlaying = false;

let crashCounter = 1.0;
const crashCounterInterval = 75;
const crashCounterIncrement = 0.01;
let crashRange = Math.random() * (2 - 1) + 1;
let countdownInterval;
let crashInterval;

function gameCountDown() {
  let gameCooldown = 5; // Countdown

  document.getElementById("gameStartupCounter").innerHTML =
    gameCooldown.toFixed(1);

  if (isPlaying === false) {
    countdownInterval = setInterval(() => {
      gameCooldown -= 0.1;
      document.getElementById("gameStartupCounter").innerHTML =
        gameCooldown.toFixed(1);
      if (gameCooldown <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("gameStartupCounter").innerHTML = "GO!";
        document.getElementById("counter").style.color = "#40a578";
        isPlaying = true;
        startGame();
      }
    }, 100);
  }
}

function updateCrashCounter() {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = crashCounter.toFixed(2);

  if (crashCounter >= crashRange) {
    clearInterval(crashInterval);
    isCrashed = true;
    isPlaying = false;
    console.log("Crashed");
    document.getElementById("counter").style.color = "red";

    // 3 Second Wait Before Restart
    document.getElementById("gameStartupCounter").innerHTML = "Crashed!";
    setTimeout(() => {
      crashCounter = 1.0;
      gameCountDown();
    }, 3000);
  } else {
    crashCounter += crashCounterIncrement;
  }
}

function startGame() {
  if (isPlaying) {
    console.log("Game starting...");
    crashRange = Math.random() * (2 - 1) + 1;
    console.log(`New crash range: ${crashRange.toFixed(2)}`);
    crashInterval = setInterval(updateCrashCounter, crashCounterInterval);
  }
}

// Start the game for the first time
gameCountDown();
