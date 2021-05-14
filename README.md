# Simon Spells

## About The Game
Simon Spells puts a virtual, early-education twist on the game, Simon Says. During Simon's turn, players must watch and try to memorize a sequence of keys played by Simon, or in this case, the computer. Then during their turn, they must click the keys in the same order as Simon did. In this version, Simon's growing sequence follows the same sequence as the alphabet and the level number correlates to the amount of letters in the sequence. For example, in level 3, Simon will play keys, A, B, then C. 

<img src="img/Simon-spells-game-051421.png">

### Languages Used
- HTML
- JavaScript
- CSS

### Play: [SIMON SPELLS](https://kaciekomoto.github.io/Simon-Spells/)

## Idea Inspiration
The inspiration for this game was my 3-year-old niece, who likes to sit next to me as I work and imitate a taping-typing motion on the table. Thus, my goal was to create a simple and fun game to help early education learners learn their ABCs while familiarizing them with a computer keyboard layout.


## Wireframe
<img src="img/kacieKomoto_simonSpells_wireframe_project1.png">


## User Walkthrough
- Player may click on the button "how to play" to access a modal explaining the game instructions.
- Player clicks the START button and the game begins with Simon playing the first sequence.
- Player imitates Simon's sequence to the best of their memory
- If player enters correct sequence, they advance to the next level.
- If player enters incorrect sequence, they're informed on the screen to hit the RESET button.
- Once all levels are completed, player is congratulated and the game is reset.
- Player at any time can click the RESET button to clear all inputs


## Major Hurdles & Bugs
Major Hurdles
1. Timing the ```setTimeout()```
2. Creating responsive design for mobile devices


Bugs
1. When RESET is clicked it doesn't immediately stop Simon's Sequence
2. Player is only informed when it's Simon's turn and not their turn

## Ideas for Future Modifications
1. Improving UX/UI elements and Usability Testing
2. Implementing Audio
3. Creating two more versions:
    -  A version that goes through each key, rather than always starting the sequence from key A
    - A version where Simon selects keys at random
4. A feature that allows the user to click the physical keyboard in addition to the virtual keyboard



