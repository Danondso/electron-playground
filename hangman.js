"use strict";
var word = ['TEST', 'FALSE PROPHET', 'INTERLOPER'];
var chosenWord;
var guessedLetters = [];

//TODO convert this to a closure maybe? 
function initializeWord() {
    //TODO read in a dictionary, get a word out of it. 
    chosenWord = String(word[Math.floor(Math.random() * Math.floor(2))]);
    console.log("INITIALIZING CHOSEN WORD TO: " + chosenWord);
}

function guess(inputGuess) {
    let guess = String(inputGuess).toUpperCase();
    
    if (guess.length != 1) {
        console.log("You're guess was blank or greater than one... D: D: D: ");
        //TODO logic to decrement the amout of valid guesses left. 
        return "You might check the length of your guess stranger..";
    } else {
        console.log("wow ya made it to the else statement, the chosen word is: ", chosenWord);
        if (chosenWord.includes(guess)) {

            console.log("Your guess of: ", guess, " was correct! Adding to the list of guessed characters.");
        }
    }
}