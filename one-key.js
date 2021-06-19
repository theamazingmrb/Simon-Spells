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
let noClick = true;

startGame.addEventListener("click", playGame)
resetGame.addEventListener("click", reset)
playerGoes()

//function for not being able to click
// function clickability() {
//     if(!noClick){     
//         playerGoes()       
//     } else {
//         simonGoes()
//         playerSequence=[]
//      }  
// }
  

//function attached to start game button event listener and to call simonGoes function
function playGame(e = null) {
    // clickability()
    //to account for when playGame is called without event listener in playerGoes function
    if (e) {
        e.preventDefault();
    }
    levelTracker.innerText = `${level}`;
    if (playerTurn == false) { 
        simonGoes();
    }
}

//function for computer/Simon's turn 
function simonGoes() {
    playerTurn = false;
    simonSequence = alphabet.slice(level-1,level)
    info.innerHTML = (`Watch Simon!`)
        //reads which copys part of the alphabet according to the level (i.e. level 2 will pull 'a' and 'b')
    setTimeout(() => {
        for (let i=0; i < simonSequence.length; i++) {
            console.log(simonSequence);
            //changes the opacity of the keys signifying which ones where played
            setTimeout(() => {
                let specificKey = document.querySelector(`#${simonSequence[i]}`)
                specificKey.style.backgroundColor = "#84ADF6";
                setTimeout(() => {
                    specificKey.style.backgroundColor = "";
                    info.innerHTML = ('')
                }, 800)
            }, 800*i)
        }
    }, 1200)
    console.log(simonSequence);
}

//function for playersTurn
function playerGoes() {
    // noClick=false
        for(let i=0; i < 26; i++) {
            //event listener to change opacity of keys when clicked by player
                allKeys[i].addEventListener("click", (e) => {
                    e.preventDefault();
                    setTimeout(() => {
                        allKeys[i].style.backgroundColor = "#84ADF6"
                        setTimeout(() => {
                            allKeys[i].style.backgroundColor = ""
                        }, 500)
                    },5 * i)
                    //pushes which keys where clicked and puts into PlayerSequence array
                    let playerAnswer = e.target.id
                    playerSequence.push(playerAnswer)
                    //checks Players answer with Simon's
                    if (playerSequence.length == 1){
                        //checks if player got answer right or wrong 
                        let win = checkAnswer();
                        //gives conditions if player gets it right
                        if (win) {
                            //gives conditions if player gets it right and completes the entire alphabet
                            if(playerSequence.length == 26) {
                                info.innerHTML = ('Congrats! You Won!')
                                setTimeout(() => {
                                    reset()
                                }, 5000)
                            //gives conditions if player gets it right and has not yet completed the entire alphabet
                            } else {
                                levelUp();
                                playGame();
                            }
                        //gives conditions if player gets it wrong
                        } else {
                            info.innerHTML = (`Sorry! Click RESET to try again!`)
                        }
                    }
                })
        }     
}

//compares player answer with Simon's by turning both arrays into Strings and then comparing
function checkAnswer(){
    if (playerSequence.toString() == simonSequence.toString()) {
        info.innerHTML = ('Correct!')
        return true
    } else {
        return false
    }
}

//function attached to reset button, sets everything back to foundational game settings
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

//function that ups the level and empties playerSequence and simonSequence arrays
function levelUp(){
    level += 1
    simonSequence = [];
    playerSequence = [];
    playerTurn = false;
}
