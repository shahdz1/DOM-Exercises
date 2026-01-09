const playerOne = document.getElementById("player-0");
const playerTwo = document.getElementById("player-1");
const scoreOne = document.getElementById("score-0");
const scoreTwo = document.getElementById("score-1");
const currentOne = document.getElementById("current-0");
const currentTwo = document.getElementById("current-1");
const diceImage = document.getElementById("dice");
const rollBtn = document.getElementById("roll-btn");
const holdBtn = document.getElementById("hold-btn");
const newBtn = document.getElementById("new-btn");
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById("section-0").classList.toggle("non-active-player");
    document.getElementById("section-1").classList.toggle("non-active-player");
};

function rollDice() {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceImage.classList.remove("d-none");
        diceImage.querySelector("img").src = `./images/dice-${dice}.png`
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
};

function holdDice() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceImage.classList.add("d-none");
            document.getElementById(`section-${activePlayer}`).classList.add("winner-player");
        }
        else {
            switchPlayer();
        }
    }
}
function newGame() {
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    currentOne.textContent = 0;
    currentTwo.textContent = 0;

    diceImage.classList.add('d-none');
    document.getElementById(`section-0`).classList.remove("winner-player");
    document.getElementById(`section-1`).classList.remove("winner-player");
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
}



holdBtn.addEventListener("click", holdDice);
rollBtn.addEventListener("click", rollDice);
newBtn.addEventListener("click", newGame);

