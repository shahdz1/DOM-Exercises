const againBtn = document.querySelector("#again-btn");
const checkBtn = document.querySelector("#check");
var message = document.querySelector("#message");
var score = 20;
var highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guessInput = document.querySelector(".guess");
const main = document.querySelector(".main");
let guessNumber;

function displayMessage(msg) {
    message.textContent = msg;
};
function checkNumber() {
    guessNumber = Number(guessInput.value);
    if (!guessNumber || guessNumber < 1 || guessNumber > 20) {
        displayMessage("⚠️ Enter a number between 1 & 20 to check!")
        main.classList.replace("bg-body-tertiary", "bg-danger")
    }
    else {
        if (secretNumber !== guessNumber) {
            compareGuessNumber();
            main.classList.replace("bg-danger", "bg-body-tertiary");
        }
        else {
            document.querySelector("#secert-number").textContent = secretNumber;
            displayMessage("🥳 correct , you win!");
            main.classList.replace("bg-body-tertiary", "bg-success");
            main.classList.replace("bg-danger", "bg-success");
            checkHighScore();
        };
    };
};

function compareGuessNumber() {
    score--;
    document.querySelector("#score").textContent = `💯 score: ${score}`;
    guessNumber > secretNumber ? displayMessage("📉 too high") : displayMessage("📈 too low");
    if (score <= 0) {
        displayMessage("💥 You lost the game!");
        score = 0;
        document.querySelector("#score").textContent = `💯 score: ${score}`;
        main.classList.replace("bg-body-tertiary", "bg-danger");
        checkBtn.disabled = true;
    }
};

function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        document.querySelector("#highscore").textContent = `🏆 highscore : ${highScore}`;
    };
};

function again() {
    document.querySelector("#secert-number").textContent = "?";
    score = 20;
    document.querySelector("#score").textContent = `💯 score: ${score}`;
    main.classList.replace("bg-success", "bg-body-tertiary");
    main.classList.replace("bg-danger", "bg-body-tertiary");
    displayMessage("start guessing...");
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    guessInput.value = "";
    checkBtn.disabled = false;
};

checkBtn.addEventListener("click", checkNumber);
againBtn.addEventListener("click", again);