//create variables
    const length = 5;
    const guesses = 6;
    let gameOver = false;
    let attempt = 0;
    const column = 0;
    let guess = "";

//create wordlist array
    const wordList = ["abysm", "awoke", "birch", "bagel", "cadet", "curly", "dashy", "drunk", "earth", "envoy", "facet", "forge", "galop", "gyoza", "havoc", "heard", "intel", "imbue", "jacal", "juvie", "kendo", "kudos", "laugh", "lucid", "money", "manic", "nacho", "nuked", "optic", "ogles", "pacer", "petal", "quick", "quiet", "roman", "rivet", "snake", "swift", "teach", "token", "uncle", "ultra", "vegas", "virgo", "wacky", "worst", "xeric", "xenon", "yacht", "yield", "zebra", "zingy"];

//create variable for random word
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
    const guessResult = [-1, -1, -1, -1, -1];
    //compare guess to word
    if(guess === word){
        //if guess is correct, you win
        gameOver = true;
    } else {
    //if guess is incorrect
    //loop through each letter in guess
        for(i = 0; i < guess.length; i++){
            //split word into array of letters
            const guessArray = guess.split("");
            console.log(guessArray[i]);
            const wordArray = word.split("");
            console.log(wordArray[i]);
            //if letter is in word and in correct spot, make green
                if(guessArray[i] === wordArray[i]){
                    guessResult[i] = 1;
                }
                //if letter is in word but in incorrect spot, turn yellow
                else if(wordArray.indexOf(guessArray[i]) > -1){
                    guessResult[i] = 0
                }
        }
    }

//get the game blocks in last game row in the game board
    let lastBlocks = document.querySelectorAll('.gameBlock_last');
    console.log(lastBlocks)
    //for each of each game block in last game row
    lastBlocks.forEach(element => {
        //if guess result = 0, add inWord
        console.log(element)
            if(guessResult[i] === 0) {
                element.classList.add("gameBlock_inWord");
            }
        //else if result = 1, add correct
            else if(guessResult[i] === 1) {
                element.classList.add("gameBlock_correct");
            }
        //else add notInWord
            else {
                element.classList.add("gameBlock_notInWord");
            }
    });

//if attempt is greater than or equal to guesses
    //game over
    function checkGameOver() {
    if(attempt >= guesses) {
        gameOver = true;
    }
}

    //game over
//add new empty row
    //create new div element gameRowDiv
    //add class gamerow to div element
    //loop 5 times
        //create new div element
        //add class gameblock to div element 
        //append new div to gamerow
    //append gamerow to gameboard







}

)

