// SIMON SPELLS

//********** INSTRUCTIONS MODAL ****************/
    let howToPlayBtn = document.querySelector('#instructions-btn')
    let closeBtn = document.querySelector('#close-btn')
    let instructionsModal = document.querySelector('#instructions-modal')

    let openHowTo = () => {
        instructionsModal.style.display = 'block';
    }
    let closeHowTo = () => {
        instructionsModal.style.display = 'none';
    }

    howToPlayBtn.addEventListener('click', openHowTo)
    closeBtn.addEventListener('click', closeHowTo)

//********** GAME ****************/
let startGame = document.querySelector('#start-btn')
let resetGame = document.querySelector('#reset-btn')
let levelTracker = document.querySelector('#level-number')
let allKeys = document.querySelectorAll('.key')
levelTracker.innerText = ("--")
let info = document.querySelector('.whos-turn')
info.innerHTML = (`Click START`)

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let simonSequence = []
let playerSequence= []
let level = 1;
let levelWon;
let playerTurn = false;

startGame.addEventListener("click", playGame)
resetGame.addEventListener("click", reset)
playerGoes()

function playGame(e = null) {
    if (e) {
        e.preventDefault();
    }
    levelTracker.innerText = `${level}`;
    if (playerTurn == false) { 
        simonGoes();
    }
}


function simonGoes() {
    playerTurn = false;
    simonSequence = alphabet.slice(0,level)
    setTimeout(() => {
        for (let i=0; i < simonSequence.length; i++) {
            info.innerHTML = (`Watch Simon!`)
            setTimeout(() => {
                let specificKey = document.querySelector(`#${alphabet[i]}`)
                specificKey.style.opacity = 0.1
                setTimeout(() => {
                    specificKey.style.opacity = 1
                    info.innerHTML = ('')
                }, 800)
            }, 800 * i) 
        }
    }, 1000)
}


function playerGoes() {
    for(let i=0; i < 26; i++) {
        allKeys[i].addEventListener("click", (e) => {
            e.preventDefault();
            setTimeout(() => {
                allKeys[i].style.opacity = 0.1
                setTimeout(() => {
                    allKeys[i].style.opacity = 1
                }, 500)
            },5 * i)
            let playerAnswer = e.target.id
            playerSequence.push(playerAnswer)
            if (playerSequence.length == level){
                let win = checkAnswer();
                if (win) {
                    if(playerSequence.length == 26) {
                        info.innerHTML = ('Congrats! You Won!')
                        setTimeout(() => {
                            reset()
                        }, 5000)
                    } else {
                        levelUp();
                        playGame();
                    }
                } else {
                    info.innerHTML = (`Sorry! Click RESET to try again!`)
                }
            }        
        })
    }
}

function checkAnswer(){
    if (playerSequence.toString() == simonSequence.toString()) {
        info.innerHTML = ('Correct!')
        return true
    } else {
        return false
    }
}
function reset(e = null) {
    if (e) {
        e.preventDefault();
    }
    level = 1;
    levelTracker.innerText = ("--")
    info.innerHTML = ("Click START")
    playerTurn = false;
    simonSequence = []
    playerSequence = []
}

function levelUp(){
    level += 1
    simonSequence = [];
    playerSequence = [];
    playerTurn = false;
}
