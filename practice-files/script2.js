// // //code from squad review
// // for (let i=0; i<10; i++){
// //     setTimeout(() => {console.log(i)}, 500 * i)
// // }

// // SIMON SPELLS
// //********** INSTRUCTIONS MODAL ****************/
//     // grab how to play div, grab close div, grab modal itself
//     let howToPlayBtn = document.querySelector('#instructions-btn')
//     let closeBtn = document.querySelector('#close-btn')
//     let instructionsModal = document.querySelector('#instructions-modal')
//     //write function for opening modal and closing modal
//     let openHowTo = () => {
//         instructionsModal.style.display = 'block';
//     }
//     let closeHowTo = () => {
//         instructionsModal.style.display = 'none';
//     }
//     //add event listeners for div "btns"
//     howToPlayBtn.addEventListener('click', openHowTo)
//     closeBtn.addEventListener('click', closeHowTo)

// //********** GAME ****************/
// // let newGame = document.querySelector('#start-btn')
// let startGame = document.querySelector('#start-btn')
// let resetGame = document.querySelector('#reset-btn')
// let levelTracker = document.querySelector('#level-number')
// levelTracker.innerText = ("--")
// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// // let allKeys = [aKey, bKey, cKey, dKey, eKey, fKey, gKey, hKey, iKey, jKey, kKey, lKey, mKey, nKey, oKey, pKey, qKey, rKey, sKey, tKey, uKey, vKey, wKey, xKey, yKey, zKey]
// let simonSequence = []
// let playerSequence= []
// let level = 1;
// let levelWon;
// let playerTurn = false;

// // let gameWon = false;
// // let canPlay = false;
// // let aKey = document.querySelector('#a')
// // let bKey = document.querySelector('#b')
// // let cKey = document.querySelector('#c')
// // let dKey = document.querySelector('#d')
// // let eKey = document.querySelector('#e')
// // let fKey = document.querySelector('#f')
// // let gKey = document.querySelector('#g')
// // let hKey = document.querySelector('#h')
// // let iKey = document.querySelector('#i')
// // let jKey = document.querySelector('#j')
// // let kKey = document.querySelector('#k')
// // let lKey = document.querySelector('#l')
// // let mKey = document.querySelector('#m')
// // let nKey = document.querySelector('#n')
// // let oKey = document.querySelector('#o')
// // let pKey = document.querySelector('#p')
// // let qKey = document.querySelector('#q')
// // let rKey = document.querySelector('#r')
// // let sKey = document.querySelector('#s')
// // let tKey = document.querySelector('#t')
// // let uKey = document.querySelector('#u')
// // let vKey = document.querySelector('#v')
// // let wKey = document.querySelector('#w')
// // let xKey = document.querySelector('#x')
// // let yKey = document.querySelector('#y')
// // let zKey = document.querySelector('#z')
// let allKeys = document.querySelectorALL('.key')

// // let allKeys = document.querySelector(`#${alphabet[i]}`)
// // let i=0;
// // let e;

// startGame.addEventListener("click", playGame)
// resetGame.addEventListener("click", reset)
// playerGoes()

// function playGame(e = null) {
//     if (e) {
//         e.preventDefault();
//     }

//         // if(levelWon == true || gameOn == true) {
//             //show what level player is on
//             levelTracker.innerText = `${level}`;
//             //determine who's turn it is, and allow that person to go
//             if (playerTurn == false) {   
//                 console.log("it's simon's turn");
//                 simonGoes();
//                 // playerTurn = true;
//             } 
//             if (playerTurn == true) {
//                 console.log("it's players turn");
//                 // playerGoes();
//                 //playerTurn= = false;
//             }
//     // }
// }

// //simonGoes function copys part of alphabet array to simonSequence array. i.e for level 4 it will copy alphabet array from [0] to [3]
// function simonGoes() {
//     console.log('simon will go now');
//     playerTurn = false;
//     simonSequence = alphabet.slice(0,level)
//     //light up key by taking simonSequence.length and light up each the key that i pertains to. i.e. when i = 0, light up A && when i=1, light up B
// setTimeout(() => {
//     for (let i=0; i < simonSequence.length; i++) {
//         setTimeout(() => {
//             let specificKey = document.querySelector(`#${alphabet[i]}`)
//             specificKey.style.opacity = 0.25
//             setTimeout(() => {
//                 specificKey.style.opacity = 1
//             }, 1000)
//         }, 500 * i) 
//     }
// }, 1000)
    
//     playerTurn = true
//     console.log(simonSequence);
// }

// //playerGoes function listens to event of keys clicked, lights up keys clicked by toggling opacity, and pushes id of clicked keys into an array called playerSequence
// function playerGoes() {
//     for(let i=0; i < 26; i++) {
//     allKeys[i].addEventListener("click", (e) => {
//         e.preventDefault();
//         setTimeout(() => {
//             allKeys.style.opacity = 0.25
//             setTimeout(() => {
//                 allKeys.style.opacity = 1
//             }, 500)
//         },10 * i)
//         let playerAnswer = e.target.id
//         playerSequence.push(playerAnswer)
//         console.log(playerSequence);
//         console.log(playerAnswer);
//         console.log(simonSequence);
//         console.log(level);
//         // console.log(allKeys);
//         if (playerSequence.length == level){
//             //need checkAnswer to wait for user to be done clicking...
//             let win = checkAnswer();
//             //when win is true, increase level
//             if (win) {
//                 console.log('level won');
//                 levelUp();
//                 console.log(playerSequence);
//                 playGame();
//             } else {
//                 console.log('sorry, wrong answer! click the reset button to try again!');
//             }
//         }        
//     })
//     }
// }

// //can i create an event listener to the keys that says if the amount of times keys clicked = level && playerSeq string = simonSeq string then level up?


// //checkAnswer function compares playerSequence to simonSequence. if matches up, player moves on to next level
// function checkAnswer(){
//     if (playerSequence.toString() == simonSequence.toString()) {
//         console.log(`correct! you clicked ${simonSequence}`);
//         return true
//     } else {
//         // console.log('sorry, wrong answer! to try again, click the reset button');
//         return false
//     }
// }
// //function to levelUp
// function levelUp(){
//     level += 1
//     simonSequence = [];
//     playerSequence = [];
//     playerTurn = false;
// }

// //function to reset game when reset button clicked
// function reset(e) {
//     e.preventDefault();
//     level = 1;
//     levelTracker.innerText = ("--")
//     playerTurn = false;
//     simonSequence = []
//     playerSequence = []
//     // console.log(simonSequence);
//     // console.log(playerSequence);
// }



// //gameWon function when player wins last level of the game, they get congratulated...
// // function gameWon(){

// // }
// //********************************************* */

// // e.preventDefault();
// // console.log('player is clicking');
// //if event target class = key - then light up and add id to playerSequence array

// //could span displaying whose turn it is(i.e. "Simons Turn" and "Your turn"), be the event that causes the playGame() to repeat?

