const ROUNDS = 6;
const WORD_LENGTH = 5;

const letters = document.querySelectorAll(".scoreboard-letter");
const loading = document.querySelector(".loading");

let word = "";
let wordParts = null;
let wordMap = null;
let guess = "";
let guessParts = null;
let row = 0;
let isLoading = false;
let isDone = false;

async function getWordOfTheDay() {
    const API_URL = "https://words.dev-apis.com/word-of-the-day";
    const res = await fetch(API_URL);
    const resObj = await res.json();
    return resObj.word.toUpperCase();
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

function makeMap(partsArray) {
    const map = {};

    for (let i = 0; i < partsArray.length; i++) {
        const letter = partsArray[i];
        if (map[letter])
            map[letter]++;
        else
            map[letter] = 1;
    }

    return map;
}

function markCurrentRowInvalid(isInvalid) {
    for (let i = 0; i < WORD_LENGTH; i++)
        letters[row * WORD_LENGTH + i].classList.toggle("invalid", isInvalid);
}

function markCurrentGuessLetters() {
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
            letters[row * WORD_LENGTH + i].classList.add("correct");
            wordMap[guessParts[i]]--;
        }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
            // do nothing, we already did it
        } else if (word.includes(guessParts[i]) && wordMap[guessParts[i]] > 0) {
            letters[row * WORD_LENGTH + i].classList.add("close");
            wordMap[guessParts[i]]--;
        } else {
            letters[row * WORD_LENGTH + i].classList.add("wrong");
        }
    }
}

function invalidWord() {
    markCurrentRowInvalid(true);
}

function checkGuess() {
    guessParts = guess.split("");
    wordMap = makeMap(wordParts);

    markCurrentGuessLetters();
    checkWin();

    guess = "";
    row++;
}

function checkWin() {
    if (guess === word) {
        isDone = true;
        alert("You win!");
    }
}

async function commit() {
    if (guess.length !== WORD_LENGTH)
        return;

    setLoading(true);
    isWordValid = await validateWord(guess);
    setLoading(false);

    if (isWordValid)
        checkGuess();
    else
        invalidWord();

    if (row === ROUNDS && !isDone) {
        isDone = true;
        alert(`You lose... The word was ${word}`);
    }
}

function backspace() {
    if (guess.length <= 0)
        return;

    letters[row * WORD_LENGTH + guess.length - 1].innerText = "";
    guess = guess.substring(0, guess.length - 1);
    markCurrentRowInvalid(false);
}

function addLetter(letter) {
    letter = letter.toUpperCase();
    if (guess.length < WORD_LENGTH)
        guess += letter;
    else
        guess = guess.substring(0, guess.length - 1) + letter;

    letters[row * WORD_LENGTH + guess.length - 1].innerText = letter;
}

function handleInput() {
    document.addEventListener("keydown", (event) => {
        if (isDone || isLoading) {
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

function setLoading(isEnabled) {
    isLoading = isEnabled;
    loading.classList.toggle("show", isEnabled);
}

async function init() {
    setLoading(true);
    word = await getWordOfTheDay();
    wordParts = word.split("");
    console.log(`Today's word: ${word}`);
    setLoading(false);

    handleInput();
}

init();