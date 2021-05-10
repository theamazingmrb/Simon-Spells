// //code from squad review
// for (let i=0; i<10; i++){
//     setTimeout(() => {console.log(i)}, 500 * i)
// }

// //SIMON SPELLS
// -----1) instruction modal ------//
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


//********************************************* */

let newGame = document.querySelector('#start-btn')
// let aKey = document.querySelector('#a')
// let bKey = document.querySelector('#b')
// let cKey = document.querySelector('#c')
// let dKey = document.querySelector('#d')
let keyboard = document.querySelectorAll('.key')
// let keyboard = [aKey, bKey, cKey, dKey]
let simonSequence = ['a','b','c','d']
let playerSequence= []
let level = 0;
let levelWon = false;
let playersTurn = false;
let gameOver;


newGame.addEventListener("click", playGame())
keyboard[i].addEventListener("click", playerGoes)

function lightUpKey() {
    setTimeout(() => {
        keyboard[i].style.opacity = 0.5
        console.log('light me up');
        setTimeout(() => {
            keyboard[i].key.style.opacity = 1
        }, 250)
    }, 500 * i)    
}

function simonGoes() {
    console.log('simon will go now');
    playersTurn = false;
    lightUpKey();
    playersTurn = true;
}

function playerGoes() {
    console.log('player can go');
    keyboard[i].addEventListener("click", function(e) {
        console.log('player is clicking');
        //function that changes opacity of key
        lightUpKey();
        //pushing player answer into empty array
        let playerAnswer = e.target.id
        playerSequence.push(playerAnswer)
        console.log(playerSequence);
        //getting comp to recognize whether player won level or has to restart game
        //if else statement to check player's answer
        playersTurn = false
        
        if(playerSequence[i] == simonSequence[i]) {
            console.log('congrats! time to level up!');
            levelUp()
            return levelWon = true;
        } else {
            console.log('sorry, wrong answer. click the restart button to try again');
            return levelWon = false;
        }
    })
}
function levelUp() {
    if (levelWon == true) {
        level += 1 ;
        console.log(`player leveled up ${level}`);
    } else {
        console.log('sorry try again!');
    }
}

function playGame() {
    console.log('start button clicked');
    for (let i=0; i < simonSequence.length; i++) {
        if (playersTurn == false) {
            console.log("simon's turn");
            simonGoes();
        } else 
            playerGoes();
        }
        
    }
}


/* user clicks start/restart button */
//for loop 
//simonGoes lightsUp A key --> simonSequence splice (0,0)
    //if user clicks aKey --> levelUp...
        //simonGoes lightsUp aKey and bKey --> simonSequence splice (0,1)
            //if user clicks aKey then bKey --> levelUp
                //simonGoes lightsUp aKey, bKey, and cKey --> simonSequence slice(0,2)
                    //if user clicks aKey, bKey, and cKey --> levelUp
                        //simonGoes lightsUp aKey, bKey,cKey, and dKey --> simonSequence splice(0,3)
                            //if user clicks aKey, bKey,cKey, and dKey --> gameWon
                            //if user clicks different keys --> game over, try again, click restart button
                    //if user clicks different keys --> game over, try again, click restart button
            //if user clicks diff keys --> game over, try again, clicks restart button
    //if user selects different key --> game over, try again, click restart button





//********************************************* */



//     let newGame = document.querySelector('#start-btn')
//     let levelWon = false

//     newGame.addEventListener('click', function (e) {
//         game.playersTurn = false
//         level = 0
//         playGame()
//         console.log('start/restart button works');
//     });


// let game = {
//     simonSequence:  ['a', 'b', 'c', 'd'],
//     answerSequence: [],
//     playerSequence: [],
//     playersTurn: false,
//     // let i = 0
//     level: 1,
// }
// let i = 0

// function simonGoes() {
//     // game.playersTurn = false;
//         setTimeout (() => {
//             let lightUpKey = document.querySelector(`#${game.simonSequence[i]}`)
//             lightUpKey.style.opacity = 0.5
//                 setTimeout(() => {
//                     lightUpKey.style.opacity = 1
//                 }, 500)
//         },1000 * i)
//         console.log('simon went');
//         // //push simons answers into answerSequence array 
//         //     game.answerSequence.push(game.simonSequence.splice(0,i))
//         //     console.log(game.answerSequence);
//         //     console.log(game.answerSequence.length);
//         game.playersTurn = true
//         console.log(game.playersTurn);
//     }

//     let playerGoes = () => {
//         let playerMove = document.querySelector(`#${game.simonSequence[i]}`)
//         console.log(`${playerMove} this is players move`);
//         playerMove.addEventListener('click', () => {
//             playerMove.style.opacity = 0.5
//             setTimeout(() => {
//                 playerMove.style.opacity = 1
//             }, 500)
//             //push clicked key into array
//             playerAnswer();
//             //compare array contents to simonSeqence splice (0, i)
//             let compareSimon = game.answerSequence.push(game.simonSequence.slice(0,i));
//             let comparePlayer = game.playerSequence
//                 if (compareSimon === comparePlayer) {
//                     game.level += 1;
//                     console.log(`player leveled up ${game.level}`);
//                     return levelWon = true;
//                 } else {
//                 console.log('sorry, wrong answer! click the restart button to try again!');
//                 game.answerSequence.length = 0
//                 return levelWon = false;
//                 }
//             //if (/*if array content is same as simonSequence splice */){
//                 //player answer is correct
//                 //level+1 
//                 //playersTurn to false
//             //} else {
//                 //alert that game over suggest to click restart button
//             //}
//             console.log('player is clicking');
//             game.playersTurn=false;
//         })
//         console.log('player went')
//     }
   
//     //compares players answer to correct answer
// function playerAnswer () { 
//     let pushAnswer = document.querySelector(`#${game.simonSequence[i]}`).id
//     game.playerSequence.push(pushAnswer)
//         // console.log('this event is going through');
//         // console.log(game.playerSequence);
//     }

// // function levelUp () {
// //         //playerSequence has to match simonSequence for player to levelup
// //         // const compareAnswer = game.simonSequence.splice(0,i);
// //         // if (level = i) {
// //         //     if (compareAnswer === playerSequence ) {
// //         //         game.level++ ;
// //         //         console.log(`player leveled up ${game.level}`);
// //         //         game.answerSequence.length = 0
// //         //         return levelWon = true;
// //         //     } else {
// //         //     console.log('sorry try again!');
// //         //     player
// //         //     return levelWon = false;
// //         //     }
// //         // }
// //     }

// function playGame () {
//     for (let i=0; i < game.simonSequence.length; i++) {
//         if (game.playersTurn == false) {
//             //simonGoes needs to track simon movement, right now only doing one move at a time
//             //forEach goes here?
//             simonGoes();
//         } else {
//             playerGoes()
//         }
        
//     }
// }



// ////RETRYING DIFF CODE
// //User clicks restart/start button






// let simonSequence = ['a','b','c','d'];
// let playerSequence = [];
// let highlightKey;
// let level;
// let playerTurn;
// let startGame = false;
// let gameWon

// const whatLevel = document.querySelector('#level-number')
// let aKey = document.querySelector('#a')
// let bKey = document.querySelector('#b')
// let cKey = document.querySelector('#c')
// let dKey = document.querySelector('#d')
// let startButton = document.querySelector('start-btn')

// // startButton.addEventListener('click', (e) => {
// //     if(on ) {
// //         startGame = true; 
// //         whatLevel.innerHTML = "--"

// //     } else {
// //         startGame = false;
// //     }
// // })


// function game (){
//     gameWon = false;
//     playerOrder = [];
//     highlightKey = 0;
//     level = 1;
//     whatLevel.innerHTML = 1;
//     levelWon = true
//     playerTurn = false;
//     intervaId = setInterval(whoseTurn, 800);
// }

// function whoseTurn () {
//     if (highlightKey == level) {
//         playerTurn = true
//     }
//     if (playerTurn = false) {
//         setTimeout (() => {
//             let lightUpKey = document.querySelector(`#${game.simonSequence[i]}`)
//             lightUpKey.style.opacity = 0.5
//                 setTimeout(() => {
//                     lightUpKey.style.opacity = 1
//                 }, 500)
//         },1000 * i)
//     }
// }

// function simonGoes() {
//     playersTurn = false;
//     setTimeout (() => {
//         let lightUpKey = document.querySelector('#a')
//         lightUpKey.style.opacity = 0.5
//             setTimeout(() => {
//                 lightUpKey.style.opacity = 1
//             }, 500)
//     },1000 * i)
//     console.log('simon went');
// }