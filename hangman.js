"use strict";
var word = ['TEST', 'FALSE PROPHET', 'INTERLOPER'];
var chosenWord;
var guessedLetters = [];
var totalGuesses;

//TODO convert this to a closure maybe? 
function initializeWord() {
    //TODO read in a dictionary, get a word out of it. 
    chosenWord = String(word[Math.floor(Math.random() * Math.floor(2))]);
    console.log("INITIALIZING CHOSEN WORD TO: " + chosenWord);
    totalGuesses = chosenWord.length;
    document.getElementById("result").innerHTML = createAnswer(chosenWord, guessedLetters);
}

function guess(inputGuess) {

    let guess = String(inputGuess).toUpperCase();

    if (guess.length == 1) {
        if (chosenWord.includes(guess)) {
            console.log("Your guess of: ", guess, " was correct! Adding to the list of guessed characters.");
            guessedLetters.push(guess);
            totalGuesses--;
            document.getElementById("result").innerHTML = createAnswer(chosenWord, guessedLetters);
        }
    }
}

function createAnswer(chosenWord, guessedLetters) {
    let result = "";

    for (let i of Array.from(chosenWord)) {
        if (guessedLetters.includes(i)) {
            result += (i + " ");
        } else {
            result += "_ ";
        }
    }
    return result;
}