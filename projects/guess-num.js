const userInput = document.getElementById("guess-input");
const submit = document.getElementById("submit-btn");
const prevoiusGuesses = document.getElementById("prev-guesses");
const chances = document.getElementById("chances");
const lowOrHi = document.getElementById("low-or-hi");
const resultBox = document.querySelector(".result-box");

const btn = document.createElement("button");

let randomnumber = Math.floor(Math.random() * 100) + 1;
console.log(randomnumber);

let prevGuess = [];
let numberOfGuesses = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = userInput.value;
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numberOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! The number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  guess = Number(guess);
  if (guess === randomnumber) {
    displayMessage(`🎉 Congratulations! You guessed ${randomnumber} correctly!`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`⬇️ Your guess is too low!`);
  } else if (guess > randomnumber) {
    displayMessage(`⬆️ Your guess is too high!`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevoiusGuesses.innerHTML += `${guess}, `;
  numberOfGuesses++;
  chances.innerHTML = `${10 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  btn.classList.add("btn");
  btn.innerHTML = "Start New Game";
  resultBox.appendChild(btn);
  playGame = false;
  StartGame();
}

function StartGame() {
  btn.addEventListener("click", function () {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numberOfGuesses = 0;
    prevoiusGuesses.innerHTML = "";
    chances.innerHTML = `${10 - numberOfGuesses}`;
    lowOrHi.innerHTML = "";
    userInput.removeAttribute("disabled");
    resultBox.removeChild(btn);
    playGame = true;
  });
}
