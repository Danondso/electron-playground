"use strict";
var word = ['TEST', 'FALSE PROPHET', 'INTERLOPER'];
var chosenWord;
var guessedLetters;
var totalGuesses;

function initializeGame() {
    totalGuesses = 6;
    guessedLetters = [];
    chosenWord = String(word[Math.floor(Math.random() * Math.floor(3))]);
    document.getElementById("result").innerHTML = createWordState(chosenWord, guessedLetters);
    document.getElementById("guessResultMessage").innerHTML = "Input a letter to start playing!";
}

function guess(inputGuess) {

    let guess = String(inputGuess).toUpperCase();

    if (totalGuesses != 0) {

        if (guess.length == 1) {

            if (!guessedLetters.includes(guess)) {
                guessedLetters.push(guess);
            } else {
                document.getElementById("guessResultMessage").innerHTML = "You've already guessed '" + guess + "', try again.";
                return;
            }

            if (chosenWord.includes(guess)) {
                let currentStateOfWord = createWordState(chosenWord, guessedLetters);

                if (currentStateOfWord == chosenWord) {
                    totalGuesses = 0;
                    document.getElementById("guessResultMessage").innerHTML = "You guessed the word! Congratulations.";
                } else {
                    document.getElementById("guessResultMessage").innerHTML = "You guessed correctly!";
                }
                document.getElementById("result").innerHTML = currentStateOfWord;
            } else {
                totalGuesses--;
                document.getElementById("guessResultMessage").innerHTML = "You guessed incorrectly! Guesses remaining: " + totalGuesses;
            }
            document.getElementById("guessedLetters").innerHTML = guessedLetters;
        } else {
            document.getElementById("guessResultMessage").innerHTML = "Your guess length was greater than one.";
        }
    } else {
        document.getElementById("guessResultMessage").innerHTML = "You've run out of guesses, game over ^_^";
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