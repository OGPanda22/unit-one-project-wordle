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
//create buttons for keys
    let button = document.querySelectorAll('.key');
    for (i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(event){
//if length of guess is less than 5, add letter to it
    if(guess.length < 5 && attempt <= 5 && gameOver == false){
    guess = guess + event.target.dataset.key;
    renderGuess();
}
//render the guess
    
})
}
    function renderGuess() {
    const childNum = attempt + 1;
    let rowEl = document.querySelectorAll("#gameBoard .gameRow:nth-child("+ childNum +") .gameBlock");
    for(i = 0; i < guess.length; i++){
        rowEl[i].innerText = guess[i]
    }
}

//add button for enter
    let enter = document.querySelector('#enter');
    enter.addEventListener('click', function(event){
    let guessResult = [-1, -1, -1, -1, -1];
//compare guess to word
    let guessArray = guess.toUpperCase().split("");
    let wordArray = word.split("");
    let firstBlocks;
    if(attempt == 0){
    firstBlocks = document.querySelectorAll('.gameBlock_First');
    } else if(attempt == 1){
    firstBlocks = document.querySelectorAll('.gameBlock_Second');
    } else if(attempt == 2){
    firstBlocks = document.querySelectorAll('.gameBlock_Third');
    } else if(attempt == 3){
    firstBlocks = document.querySelectorAll('.gameBlock_Fourth');
    } else if(attempt == 4){
    firstBlocks = document.querySelectorAll('.gameBlock_Fifth');
    } else {
    firstBlocks = document.querySelectorAll('.gameBlock_Last');
    }
    if(guess.toUpperCase() === word){ 
//if guess is correct, you win
    gameOver = true;
    }   else {
//if guess is incorrect
//loop through each letter in guess
    for(i = 0; i < guess.length; i++){
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
    if(attempt >= 5){
        gameOver = true;
    }
}

//get the game blocks in first game row in the game board
//create a loop to advance to next row after enter button pressed
//for each of each game block in last game row
firstBlocks.forEach((element, index) => {
//if guess result = 0, add inWord
    if(guessResult[index] == 0) {
        element.classList.add("gameBlock_inWord");
    }
//else if result = 1, add correct
    else if(guessResult[index] == -1) {
        element.classList.add("gameBlock_correct");
    }
//else add notInWord
    else {
        element.classList.add("gameBlock_notInWord");
    }
}
)
guessArray.length = 0;
        guess = "";
            attempt++
        if(gameOver){
            document.querySelector("#message").innerText = `Game Over! The word was ${word}`;
        }
}
);
