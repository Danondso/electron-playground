"use strict";
var fs = require("fs");
var words = [];
var chosenWord;
var guessedLetters;
var totalGuesses;

function initializeGame() {

    if (words.length <= 0) {
        loadDictionary();
    }

    totalGuesses = 6;
    drawHangman(totalGuesses);
    guessedLetters = [];
    chosenWord = String(words[Math.floor(Math.random() * Math.floor(370099))]);
    document.getElementById("result").innerHTML = createWordState(chosenWord, guessedLetters);
    document.getElementById("guessResultMessage").innerHTML = "Input a letter to start playing!";
    document.getElementById("guessedLetters").innerHTML = "Guessed letters: []";
}

function loadDictionary() {
    let text = fs.readFileSync("assets/dictionary/words_alpha.txt").toString('utf-8');
    words = text.split("\n");
}

function guess(inputGuess) {

    document.getElementById("inputGuess").value = '';
    let guess = String(inputGuess).toUpperCase().trim();

    if (totalGuesses > 0) {

        if (guess.length <= 1 && guess.length > 0) {

            let isNewLetter = isGuessedLetterNew(guess);

            if (isNewLetter) {
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
                    decrementGuessCounter();
                }
            } else {
                return;
            }
            document.getElementById("guessedLetters").innerHTML = "Guessed letters: " + guessedLetters;
        } else {
            document.getElementById("guessResultMessage").innerHTML = "Your guess must consist of a single letter.";
        }
    } else {
        document.getElementById("guessResultMessage").innerHTML = "You've run out of guesses, the word was: " + chosenWord;
    }
}

function isGuessedLetterNew(guess) {
    if (!guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        return true;
    } else {
        document.getElementById("guessResultMessage").innerHTML = "You've already guessed '" + guess + "', try again.";
        return false;
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

function decrementGuessCounter() {
    if (totalGuesses > 0) {
        totalGuesses--;
        document.getElementById("guessResultMessage").innerHTML = "You guessed incorrectly! Guesses remaining: " + totalGuesses;
        drawHangman(totalGuesses);
    } else {
        document.getElementById("guessResultMessage").innerHTML = "You've run out of guesses, game over ^_^";
    }
}

function drawHangman(level) {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    switch (level) {
        case 6: // GALLOWS
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(250, 100);
            context.lineTo(250, 125);
            context.moveTo(250, 100);
            context.lineTo(325, 100);
            context.lineTo(325, 300);
            context.rect(265, 300, 120, 75);
            context.stroke();
            break;
        case 5: // HEAD
            context.beginPath();
            context.arc(250, 135, 10, 0, 2 * Math.PI);
            context.stroke();
            break;
        case 4: // BODY
            context.moveTo(250, 145);
            context.lineTo(250, 200);
            context.stroke();
            break;
        case 3: // LEFT ARM
            context.moveTo(250, 165);
            context.lineTo(230, 190);
            context.stroke();
            break;
        case 2: // RIGHT ARM
            context.moveTo(250, 165);
            context.lineTo(270, 190);
            context.stroke();
            break;
        case 1: //LEFT LEG
            context.moveTo(250, 200);
            context.lineTo(230, 230);
            context.stroke();
            break;
        case 0: //RIGHT LEG
            context.moveTo(250, 200);
            context.lineTo(270, 230);
            context.stroke();
            break;
        default:
            break;
    }
}