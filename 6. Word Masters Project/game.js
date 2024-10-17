const ROUNDS = 6;
const ANSWER_LENGTH = 5;

const letterBoxes = document.querySelectorAll(".scoreboard-letter");

let word = "";
let currentGuess = "";
let currentRow = 0;
let isDone = false;

async function getWordOfTheDay() {
    const API_URL = "https://words.dev-apis.com/word-of-the-day";
    const res = await fetch(API_URL);
    const resObj = await res.json();
    return resObj.word;
}

async function validateWord(word) {
    const API_URL = "https://words.dev-apis.com/validate-word";
    const options = {
        method: "POST",
        body: JSON.stringify({ word: word })
    };
    const res = await fetch(API_URL, options);
    const resObj = await res.json();
    return resObj.validWord;
}

function isLetter(key) {
    return /^[a-zA-Z]$/.test(key);
}

function invalidWord() {
    console.log("Invalid word!");
}

function checkGuess() {
    console.log(`Current guess: ${currentGuess}`);

    checkWin();

    currentGuess = "";
    currentRow++;
}

function checkWin() {
    if (currentGuess === word) {
        isDone = true;
        console.log("You win!");
    }
}

async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH)
        return;

    isWordValid = await validateWord(currentGuess);
    if (isWordValid)
        checkGuess();
    else
        invalidWord();

    if (currentRow === ROUNDS) {
        isDone = true;
        console.log("You lose...");
    }
}

function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
}

function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH)
        currentGuess += letter;
    else
        currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
}

function handleInput() {
    document.addEventListener("keydown", (event) => {
        if (isDone) {
            return;
        }

        if (event.key === "Enter")
            commit();
        else if (event.key === "Backspace")
            backspace();
        else if (isLetter(event.key))
            addLetter(event.key);
    });
}

async function init() {
    word = await getWordOfTheDay();
    console.log(`Today's word: ${word}`);

    handleInput();
}

init();