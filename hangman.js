"use strict";
var word = ['TEST', 'FALSE PROPHET', 'INTERLOPER']; //TODO expand the dictionary. 
var chosenWord;
var guessedLetters;
var totalGuesses;

function initializeGame() {
    //TODO read in a dictionary, get a word out of it. 
    totalGuesses = 6;
    guessedLetters = [];
    chosenWord = String(word[Math.floor(Math.random() * Math.floor(3))]);
    document.getElementById("result").innerHTML = createWordState(chosenWord, guessedLetters);
}

function guess(inputGuess) {

    let guess = String(inputGuess).toUpperCase();

    if (totalGuesses != 0) {

        if (guess.length == 1) {

            if (chosenWord.includes(guess)) {

                if (!guessedLetters.includes(guess)) {
                    guessedLetters.push(guess);
                    let currentStateOfWord = createWordState(chosenWord, guessedLetters);

                    if (currentStateOfWord == chosenWord) {
                        document.getElementById("remainingGuesses").innerHTML = "You guessed the word! Congratulations.";
                    } else {
                        document.getElementById("remainingGuesses").innerHTML = "You guessed correctly!";
                    }
                    document.getElementById("result").innerHTML = currentStateOfWord;

                } else {
                    document.getElementById("remainingGuesses").innerHTML = "You've already guessed " + guess + ", try again.";
                }

            } else {
                totalGuesses--;
                document.getElementById("remainingGuesses").innerHTML = "You guessed incorrectly! Guesses remaining: " + totalGuesses;
            }
        } else {
            document.getElementById("remainingGuesses").innerHTML = "You might want to check the length of your guesses stranger..";
        }
    } else {
        document.getElementById("remainingGuesses").innerHTML = "You've run out of guesses, game over ^_^";
    }
}

function createWordState(chosenWord, guessedLetters) {
    let result = "";

    for (let i of Array.from(chosenWord)) {
        if (guessedLetters.includes(i))
            result += (i);
        else if (i == " ")
            result += " ";
        else
            result += "-";
    }
    return result;
}