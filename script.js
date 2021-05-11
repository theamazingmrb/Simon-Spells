// //code from squad review
// for (let i=0; i<10; i++){
//     setTimeout(() => {console.log(i)}, 500 * i)
// }

// //SIMON SPELLS
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
// let newGame = document.querySelector('#start-btn')
//try reset button instead of restart button
let restartGame = document.querySelector('#restart-btn')
// let allKeys = document.querySelector('.keyboard')
let levelTracker = document.querySelector('#level-number')
let alphabet = ['a','b','c','d']
let simonSequence = []
let playerSequence= []
let level = 1;
let levelWon;
let playerTurn = false;
let gameWon = false;
// let canPlay = false;
let aKey = document.querySelector('#a')
let bKey = document.querySelector('#b')
let cKey = document.querySelector('#c')
let dKey = document.querySelector('#d')
let allKeys = document.querySelectorAll('.key')
// let keyboard = [aKey, bKey, cKey, dKey]

// newGame.addEventListener("click", on)
restartGame.addEventListener("click", playGame)
// keyboard.addEventListener("click", playGame)

// function on(e) {
//     e.preventDefault();
//     gameOn = true;
// }

function playGame(e) {
    e.preventDefault();
    console.log('start button clicked');
    //set to level 1
    // for (let j = 0; j < alphabet.length; j++) {
        // if(levelWon == true || gameOn == true) {
            //show what level player is on
            levelTracker.innerText = `${level}`;
            //determine who's turn it is, and allow that person to go
            if (playerTurn == false) {   
                console.log("it's simon's turn");
                simonGoes();
            } 
            if (playerTurn == true) {
                console.log("it's players turn");
                playerGoes();
            }
        // } else {
        //     console.log('sorry, click the restart button to try again!');
        // }
    // }
}

//simonGoes function copys part of alphabet array to simonSequence array. i.e for level 4 it will copy alphabet array from [0] to [3]
function simonGoes() {
    console.log('simon will go now');
    playerTurn = false;
    simonSequence = alphabet.slice(0,level)
    //light up key by taking simonSequence.length and light up each the key that i pertains to. i.e. when i = 0, light up A && when i=1, light up B
    for (let i=0; i < simonSequence.length; i++) {
        setTimeout(() => {
            allKeys[i].style.opacity = 0.25
            console.log('light me up');
            setTimeout(() => {
                allKeys[i].style.opacity = 1
            }, 250)
        }, 500 * i)    
    }
    playerTurn = true
    console.log(simonSequence);
}

//playerGoes function listens to event of keys clicked, lights up keys clicked by toggling opacity, and pushes id of clicked keys into an array called playerSequence
function playerGoes() {

    for(let i=0; i < allKeys.length; i++) {
        allKeys[i].addEventListener("click", function(e){
            e.preventDefault();
            console.log('click a key');
            setTimeout(() => {
                allKeys[i].style.opacity = 0.25
                console.log('light me up');
                setTimeout(() => {
                    allKeys[i].style.opacity = 1
                }, 200)
            },10 * i)
            let playerAnswer = e.target.id
            playerSequence.push(playerAnswer)
            console.log(playerSequence);
            console.log(simonSequence);
        console.log(level);
        checkAnswer()
        if (levelWon == true) {
            playerTurn = false;
            simonSequence = []
            playerSequence= []
            level += 1
            playGame(e)
        } else {
            console.log('sorry!');
        }t
        })
        
    }
    
}


//checkAnswer function compares playerSequence to simonSequence. if matches up, player moves on to next level
function checkAnswer(){
    if (playerSequence.toString() == simonSequence.toString()) {
        console.log(`correct! you clicked ${simonSequence}`);
        return levelWon = true
    } else {
        console.log('sorry, wrong answer! to try again, click the restart button');
        return levelWon = false
    }
}

//function to levelUp
// function levelUp(){
//     level += 1
//     if(levelWon == true) {
//         playGame()
//     } else {
//         console.log('sorry, wrong answer! to try again, click the restart button');
//     }
// }
//gameWon function when player wins last level of the game, they get congratulated...
// function gameWon(){

// }


//function to reset game when reset button clicked
function reset() {
    level=0;
    playerTurn = false;
    simonSequence = []
    playerSequence= []
}
//********************************************* */

// e.preventDefault();
// console.log('player is clicking');
//if event target class = key - then light up and add id to playerSequence array


// if(e.target.className == "key") {
//     setTimeout(() => { 
//         keyboard.style.opacity  =0.5
//         setTimeout(() => {
//             keyboard.style.opacity = 1
//         }, 250)
//     }, 500)
// }


// function lightUpKey() {
//     //need to add something here to tell how many keys to light up - amount of keys is equal to level #
//     for (let i=0; i < answerKey.length; i++) {
//         setTimeout(() => {
//             keyboard.style.opacity = 0.5
//             console.log('light me up');
//             setTimeout(() => {
//                 keyboard.style.opacity = 1
//             }, 250)
//         }, 500 * i)    
//     }
// }

// // if (level == 1) {
// //     setTimeout(() => {
// //         aKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             aKey.style.opacity = 1
// //         }, 250)
// //     }, 500)    
// // }
// // if (level == 2) {
// //     setTimeout(() => {
// //         aKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             aKey.style.opacity = 1
// //         }, 250)
// //     }, 500) 
// //     setTimeout(() => {
// //         bKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             bKey.style.opacity = 1
// //         }, 250)
// //     }, 500) 
// // }
// // if (level == 3) {
// //     setTimeout(() => {
// //         aKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             aKey.style.opacity = 1
// //         }, 250)
// //     }, 500) 
// //     setTimeout(() => {
// //         bKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             bKey.style.opacity = 1
// //         }, 250)
// //     }, 500) 
// //     setTimeout(() => {
// //         cKey.style.opacity = 0.5
// //         setTimeout(() => {
// //             cKey.style.opacity = 1
// //         }, 250)
// //     }, 500) 
// // }

// function checkAnswer (){
//     if (answerKey.toString() === playerAnswer.toString()) {
//         console.log ('correct!')
//         level += 1
//     } else {
//         console.log('sorry, try again!');
//     }
//     playersTurn = false
// }



// function playerGoes() {
//     i = 0
//     console.log('player can go');
//     keyboard[i].addEventListener("click", function(e) {
//         console.log('player is clicking');
//         //function that changes opacity of key
//         lightUpKey();
//         //pushing player answer into empty array
//         let playerAnswer = e.target.id
//         playerSequence.push(playerAnswer)
//         console.log(playerSequence);
//         //getting comp to recognize whether player won level or has to restart game
//     })
//     playersTurn = false
// }




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

// let aKey = document.querySelector('#a')
// let bKey = document.querySelector('#b')
// let cKey = document.querySelector('#c')
// let dKey = document.querySelector('#d')
// let keyboard = [aKey, bKey, cKey, dKey]
// let keyPlayed = 0

        // if(playerSequence[i] == simonSequence[i]) {
        //     console.log('congrats! time to level up!');
        //     levelUp()
        // } else {
        //     console.log('sorry, wrong answer. click the restart button to try again');
        // }

        // function levelUp() {
//     if (levelWon == true) {
//         level += 1;
//         console.log(`player leveled up ${level}`);
//     } else {
//         console.log('sorry try again!');
//     }
// }

//********************************************* */
// let newGame = document.querySelector('#start-btn')
// let aKey = document.querySelector('#a')
// let bKey = document.querySelector('#b')
// let cKey = document.querySelector('#c')
// let dKey = document.querySelector('#d')
// // let keyboard = [aKey, bKey, cKey, dKey]
// let keyboard = document.querySelectorAll('.key')
// let levelTracker = document.querySelector('#level-number')
// let alphabet = ['a','b','c','d']
// let simonSequence = []
// let playerSequence= []
// let level = 0;
// // let numberKeys = 0;
// let levelWon = false;
// let playersTurn = false;
// let gameWon = false

// newGame.addEventListener("click", game)


// function game() {
//     //set level to 1
//     //have level # pop up in level-number area
// //simon to play 1 key --> simon goes
// for (let j=0; j < alphabet.length; j++) {
//     level += 1
//     simonSequence.push(alphabet.slice(0,level))
//     if (playersTurn == false) {
//         simonGoes()
//     } else {
//         //playerGoes --> to click key
//         playerGoes()
//     }
// }
        
// //compare answer to simons
//     //if wrong, prompt to restart game
//     //if correct, level + 1 
//     //level 2 - level = 2, pop that number up in to area, simon has to play 2 keys
// }



// function simonGoes () {
//     for (let i=0; i < simonSequence.length; i++) {
//         setTimeout(() => {
//             keyboard[i].style.opacity = 0.5
//             console.log('light me up');
//             setTimeout(() => {
//                 keyboard[i].style.opacity = 1
//             }, 250)
//         }, 500 * i)    
//         console.log(simonSequence);
//         // simonSequence = []
//         }
//         // console.log(simonSequence);
// }

// function playerGoes(e) {
//     e.preventDefault();
//     console.log('player is clicking');
//     keyboard[i].addEventListener("click", playerGoes() => {
//         //pushing player answer into empty array
//         let playerAnswer = e.target.id
//         playerSequence.push(playerAnswer)
//         console.log(playerSequence);
//         //function that changes opacity of key
//         setTimeout(() => {
//             keyboard[i].style.opacity = 0.5
//             console.log('light me up');
//             setTimeout(() => {
//                 keyboard[i].style.opacity = 1
//             }, 250)
//         }, 500 * i)   
//     }
//     //giving turn back to simon
//     playersTurn = false
//     simonSequence = []
// }
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



