// //code from squad review
// for (let i=0; i<10; i++){
//     setTimeout(() => {console.log(i)}, 500 * i)
// }

//SIMON SPELLS
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


//--- start button --->
//-----7) As the user, I want to have a start/restart button so that I can restart the game whenever I want -------------//
    // let gameOn = document.querySelector('#start-btn')
    // let game = false
    // let levelWon = false
    // gameOn.addEventListener('click', (event) => {
    //     //when start button is clicked it needs to start game or when player has won level
    //    if(game == true || levelWon == true) {
    //        simonGoes();
    //     }
    // });

//-----3) MVP during computer sequence, have buttons light up with color white to show which buttons were played -------------//
    //create a way to select all .key, change its color for a set amount of time then change it back to orginal color

// let simonSequence =  ["a","b","c","d"];
// let answerSequence = []
// let playerSequence = [];
// let playersTurn = false;
let i = 0
// let level = 0

let game = {
    simonSequence:  ['a', 'b', 'c', 'd'],
    //clone simonSequence? 
    answerSequence: [],
    playerSequence: [],
    playersTurn: false,
    // let i = 0
    level: 1,
}

    let simonGoes = () => {
        game.playersTurn = false;
        setTimeout (() => {
        let lightUpKey = document.querySelector(`#${game.simonSequence[i]}`)
        lightUpKey.style.opacity = 0.5
            setTimeout(() => {
                lightUpKey.style.opacity = 1
            }, 500)
        },1000 * i)
        console.log('simon went');
        //push simons answers into answerSequence array 
        game.answerSequence.push(game.simonSequence.splice(0,i))
        console.log(game.answerSequence);
        console.log(game.answerSequence.length);
        game.playersTurn = true
        console.log(game.playersTurn);
    }

    let playerGoes = () => {
        let playerMove = document.querySelector(`#${game.simonSequence[i]}`)
        console.log(`${playerMove} this is players move`);
        playerMove.addEventListener('click', () => {
            playerMove.style.opacity = 0.5
            setTimeout(() => {
                playerMove.style.opacity = 1
            }, 500)
            console.log('player is clicking');
            game.playersTurn=false;
        })
        console.log('player went')
    }
   
    //compares players answer to correct answer
    let playerAnswer = () => { 
        let pushAnswer = document.querySelector(`#${game.simonSequence[i]}`).textContent
        game.playerSequence.push(pushAnswer)
        console.log('this event is going through');
        console.log(game.playerSequence);
    }

    let levelUp = levelUp => {
        //playerSequence has to match simonSequence for player to levelup
        const playerAnswer = game.answerSequence.shift();
        if (playerAnswer === levelUp) {
            if (game.answerSequence.length === 0) {
                game.level++ ;
                console.log(`player leveled up ${game.level}`);
                game.answerSequence.length = 0
                return true
            } else {
            console.log('sorry try again!');
            return false
            }
        }
    }
    

for (let i=0; i < game.simonSequence.length; i++) {
    if (game.playersTurn == true) {
        playerGoes()
        playerAnswer();
        levelUp();
    } else {
        //simonGoes needs to track simon movement, right now only doing one move at a time
        //forEach goes here?
        simonGoes(i + 1);
        // simonGoes(i+1)
    }
    
}


// //trying something new
// let aKey = document.querySelector('#a')
// let bKey = document.querySelector('#b')
// let cKey = document.querySelector('#c')
// let dKey = document.querySelector('#d')

// let simonGoes = () => {
//     game.playersTurn = false;
//     setTimeout (() => {
//     let lightUpKey = [aKey, bKey, cKey, dKey]
//     lightUpKey.style.opacity = 0.5
//         setTimeout(() => {
//             lightUpKey.style.opacity = 1
//         }, 500)
//     },1000 * i)
//     console.log('simon went');
//     //push simons answers into answerSequence array 
//     game.answerSequence.push(game.simonSequence.splice(0,i))
//     console.log(game.answerSequence);
//     console.log(game.answerSequence.length);
//     game.playersTurn = true
//     console.log(game.playersTurn);
// }





//---- 6) As the user, I want to know what level I'm on so I know how many letters are in each sequence ---//


    //player clicks on key A, A turns white and back to original color
    //level changes to level 2

    //computer turns key A and B -- white and back, and then B white and back
    //player clicks on key A, then B, 
    



    // let playerSequence = [];
    // let gameWon = false;
    // const aKeyLit = document.querySelector('#a')
    // const bKeyLit = document.querySelector('#b')
    // const cKeyLit = document.querySelector('#c')
    // const dKeyLit = document.querySelector('#d')
  

    // let computerSequence =  [
    //     aKeyLit, 
    //     bKeyLit, 
    //     cKeyLit, 
    //     dKeyLit,
    // ];


    //     //for loop with set timeout to play sequence
    //     for (let i=0; i < computerSequence.length; i++){
    //             setTimeout(() => {
    //                 //change color to white using set timeout
    //                 computerSequence[i].style.backgroundColor = "white"
    //                 // console.log(i)
    //             }, 900 * i)
    //             const removeLight = document.querySelector(`#${computerSequence[i]}`).removeAttribute("style");
                
    //             //change color back here!!! maybe another setTimeout??
    //                 // clearTimeout()
    //                 //return computerSequence[i].style.backgroundColor
    //     }


        // for (let i=0; i < computerSeqeunce.length; i++) {
        //     if() {

        //     }
        //     else {
        //         //playersTurn
        //     }
        // }


        // function computerPlays (computerSequence) {
        //     // gameOver = false
        //     // computerSequence =  [];
        //     // playerSequence = [];
        //     setTimeout(() => {
        //         key.
        //         console.log(i)}, 500 * i)}
    
        // // aKeyLit.addEventListener('click', computerPlays(event))