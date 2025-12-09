
let alienX = 80;
let alienY = 20;
let guessX = 0;
let guessY = 0;
let shotsRemaining = 8;
let shotsMade = 0;
let gameState = "";
let gameWon = false;

let cannon = document.getElementById("cannon");
let alien = document.getElementById("alien");
let missile = document.getElementById("missile");
let explosion = document.getElementById("explosion");

let inputX = document.getElementById("inputX");
let inputY = document.getElementById("inputY");
let output = document.getElementById("output");

let button = document.getElementById("button")
button.style.cursor = "pointer"
button.addEventListener("click", clickHandler, false);

function render() {
    alien.style.left = `${alienX}px`;
    alien.style.top = `${alienY}px`;

    cannon.style.left = `${guessY}px`;

    missile.style.left = `${guessX}px`;
    missile.style.top = `${guessY}px`;

    
    if(gameWon) {
        explosion.style.display = "block";
        explosion.style.left = `${alienX}px`;
        explosion.style.top = `${alienY}px`;

        alien.style.display = "none";
        missile.style.display = "none";
    }
   

}

function clickHandler() {
    playGame();

}

function playGame() {
    shotsRemaining = shotsRemaining - 1;
    shotsMade = shotsMade + 1;
    gameState = `Shots: ${shotsMade}, Remaining: ${shotsRemaining}`;

    guessX = parseInt(inputX.value);
    guessY = parseInt(inputY.value);

    if (guessX >= alienX && guessX <= alienX + 20) {
        if (guessY >= alienY && guessY <= alienY + 20) {
            gameWon = true;
            endGame();
        }
    } else {
        output.innerHTML = `Miss! ${gameState}`;
        if (shotsRemaining < 1) {
            endGame();
        }
    }
    if (!gameWon) {
        alienX = Math.floor(Math.random() * 280);
        alienY = alienY + 30;
    }
    render();
    console.log("X:" + alienX);
    console.log("Y:" + alienY);
}

function endGame() {

    if (gameWon === true) {
        output.innerHTML = `You Hit IT!!! and safe the earth as well!!!, <br> It only took you ${shotsMade} shots to did that.`;
        
    } else {
        output.innerHTML = ` Haaa you lost! <br> The earth has ben invaded!`;
    }
    button.removeEventListener("click", clickHandler, false);
    button.disable = true;
    inputX.disable = true;
    inputY.disable = true;

}

