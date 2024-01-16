const scoreCounter =  document.querySelector('.score-counter');
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again")

const totalCells = 100;
const totalBombs = 10;
const maxScore = 10;
const bombsList  =[];

let score = 0;
let gameOver = false;

function updateScore() {
    if (!gameOver) {
        score++;
        scoreCounter.innerText = score.toString().padStart(5, '0');
    
        if (score === maxScore) {
            endGame(true); 
        }
    }
}


for (let i = 1; i <= 100; i++ ) {
    const cell = document.createElement('div');
    // Cell = <div> </div>
    cell.classList.add('cell');
    // Cell = <div ="cell"> </div>

    cell.addEventListener('click', function () {
        if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb');
            endGame(false);
        } else if (!cell.classList.contains('cell-clicked')) {
            cell.classList.add('cell-clicked');
            updateScore();
        }
    });

    grid.appendChild(cell);
};

while (bombsList.length < totalBombs) {
    const randomNumber = Math.floor(Math.random() * totalCells) + 1;
    
    if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber)
    }
}

function endGame (isVictory) {
    gameOver = true;
    if (isVictory) {
        endGameText.innerHTML = ("YOU <br>WON!");
        endGameScreen.classList.add('win')
    }
    endGameScreen.classList.remove('hidden');
}

playAgainButton.addEventListener('click', function() {
    window.location.reload();
});
