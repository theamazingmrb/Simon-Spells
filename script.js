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

//-----3) MVP during computer sequence, have buttons light up with color white to show which buttons were played -------------//
    //create a way to select all .key, change its color for a set amount of time then change it back to orginal color

        let simonSequence =  ["a","b","c","d"];
        let playerSequence = [];
        let playersTurn = false;
       
    //player presses start key
        let level = 0


        //turn computerSequence[0] to white and then back to blue for a set time
for (let i=0; i < simonSequence.length; i++) {
    let simonGoes = () => {
        playersTurn = false;
        setTimeout (() => {
            const lightUpKey = document.querySelector(`#${simonSequence[i]}`)
            lightUpKey.style.opacity = 0.5
            setTimeout(() => {
                lightUpKey.style.opacity = 1
            }, 800 * i)
        }, 800 * i)
    }
    if (i == simonSequence.length) {
        i=0;
        playersTurn=true
        playerGoes()
    } else if (i < simonSequence.length) {
        simonGoes();
    }
}

    let playerGoes = () => {
       
    }




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
   