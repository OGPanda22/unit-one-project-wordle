//create variables for max guesses and current attempt
    const guesses = 6;
    let guess = '';
    let attempt = 0;
    let letter = '';
    let gameOver = false;

//create wordList array
    const wordList = ["abysm", "awoke", "birch", "bagel", "cadet", "curly", "dashy", "drunk", "earth", "envoy", "facet", "forge", "galop", "gyoza", "havoc", "heard", "intel", "imbue", "jacal", "juvie", "kendo", "kudos", "laugh", "lucid", "money", "manic", "nacho", "nuked", "optic", "ogles", "pacer", "petal", "quick", "quiet", "roman", "rivet", "snake", "swift", "teach", "token", "uncle", "ultra", "vegas", "virgo", "wacky", "worst", "xeric", "xenon", "yacht", "yield", "zebra", "zingy"];

//create variable for random word choice from wordList array that players have to guess
    const word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
        console.log(word);

//create buttons for keys
let button = document.querySelectorAll('.key');
for (i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(event){
//if length of guess is less than 5, add letter to it
if(guess.length < 5){
guess = guess + event.target.dataset.key
}
//render the guess
renderGuess();
console.log(event.target.dataset.key);
})
}
function renderGuess() {
}

//add button for enter
let enter = document.querySelector('#enter');
enter.addEventListener('click', function(event){
let guessResult = [-1, -1, -1, -1, -1];
//compare guess to word
console.log("we are triggering the enter button");
console.log(guess);
console.log(word);
if(guess.toUpperCase() === word){
//if guess is correct, you win
console.log(gameOver);
gameOver = true;
console.log(gameOver);
} else {
//if guess is incorrect
//loop through each letter in guess
for(i = 0; i < guess.length; i++){
    //split word into array of letters
    const guessArray = guess.toUpperCase().split("");
    console.log(guessArray);
    const wordArray = word.split("");
    console.log(wordArray);
    //if letter is in word and in correct spot, make green
        if(guessArray[i] === wordArray[i]){
            guessResult[i] = -1;
        }
        //if letter is in word but in incorrect spot, turn yellow
        else if(wordArray.indexOf(guessArray[i]) > -1){
            guessResult[i] = 0
        } else {
            guessResult[i] = 1;
        }
}
}

//get the game blocks in last game row in the game board
let lastBlocks = document.querySelectorAll('.gameBlock_First');
console.log(guessResult);
//for each of each game block in last game row
lastBlocks.forEach((element, index) => {
//if guess result = 0, add inWord
console.log(element)
    if(guessResult[index] == 0) {
        element.classList.add("gameBlock_inWord");
        console.log(element);
    }
//else if result = 1, add correct
    else if(guessResult[index] == -1) {
        element.classList.add("gameBlock_correct");
        console.log(element);
    }
//else add notInWord
    else {
        element.classList.add("gameBlock_notInWord");
        console.log(element.classList);
    }
});

//if attempt is greater than or equal to guesses
//game over
function checkameOver() {
if(attempt >= guesses) {
gameOver = true;
} else {
console.log(`Attempt ${attempt + 1} of ${guesses}`);
}
}
//add new empty row
//create new div element gameRowDiv
//add class gamerow to div element
const gameRow = document.createElement('div');
gameRow.classList.add('gameRow');
//loop 5 times
for (i = 0; i < 5; i++) {
//create new div element
//add class gameblock to div element 
    const gameBlock = document.createElement('div');
    gameBlock.classList.add('gameBlock');
//append new div to gamerow
    gameRow.appendChild(gameBlock);
}
//append gamerow to gameboard
    // gameBoard.appendChild(gameRow);
}
);