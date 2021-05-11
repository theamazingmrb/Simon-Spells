//SIMON SPELLS

//********** INSTRUCTIONS MODAL ****************/
    // grab how to play div, grab close div, grab modal itself
    let howToPlayBtn = document.querySelector('#instructions-btn')
    let closeBtn = document.querySelector('#close-btn')
    let instructionsModal = document.querySelector('#instructions-modal')
    //write function for opening modal and closing modal
    let openHowTo = () => {
        instructionsModal.style.display = 'block';
    }
    let closeHowTo = () => {
        instructionsModal.style.display = 'none';
    }
    //add event listeners for div "btns"
    howToPlayBtn.addEventListener('click', openHowTo)
    closeBtn.addEventListener('click', closeHowTo)

//********** GAME ****************/
let newGame = document.querySelector('start-btn')
let keyboard = document.querySelector('.keyboard')
let levelTracker = document.querySelector('#level-number')

let alphabet = ["a", "b", "c", "d"]
let simonSeqence = []
let playerSequence = []
let level;
let playerTurn = false;
let levelWon = false;
let gameWon = false;

newGame.addEventListener("click", playGame)
keyboard.addEventListener("click", playerGoes)

function playGame(e) {
    e.preventDefault()
    console.log('start button clicked');
    level = 1
        levelTracker.innerText = `${level}`;
        if (playersTurn == false) {   
            console.log("simon's turn");
            simonGoes();
        }
        if (playersTurn == true) {
            console.log("players turn");
            playerGoes();
            checkAnswer   
        }
        level +=1
        console.log(level);
}

function simonGoes() {
    console.log('simon will go now');
    simonSequence.push(alphabet.slice(0,level))
    lightUpKey();
    playersTurn = true;
}

function playerGoes(e){
    e.preventDefault();
    lightUpKey()
}

function lightUpKey() {
    setTimeout(() => {
        keyboard.style.opacity = 0.5
        console.log('clicked');
        setTimeout(() => {
            keyboard.style.opacity = 1
        }, 250)
    }, 500 * i) 
}
