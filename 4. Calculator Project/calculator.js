console.log("This is my calculator project for Frontend Masters course \"Complete intro to Web Development\"");

const resultText = document.querySelector(".result");

const clearButton = document.querySelector(".btn-clear");
const backspaceButton = document.querySelector(".btn-backspace");
const equalsButton = document.querySelector(".btn-equals");

const plusButton = document.querySelector(".btn-plus");
const minusButton = document.querySelector(".btn-minus");
const multiplyButton = document.querySelector(".btn-multiply");
const divideButton = document.querySelector(".btn-divide");

const button0 = document.querySelector(".btn-0");
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const button4 = document.querySelector(".btn-4");
const button5 = document.querySelector(".btn-5");
const button6 = document.querySelector(".btn-6");
const button7 = document.querySelector(".btn-7");
const button8 = document.querySelector(".btn-8");
const button9 = document.querySelector(".btn-9");

let acc = "";
let op1 = 0;
let op2 = 0;

/* Possible values: 0, +, -, *, / */
let opcode = "0";

function textToNumber(text) {
    return Number.parseInt(text);
}

function update() {
    resultText.innerHTML = acc;
}

function clear() {
    op1 = 0;
    op2 = 0;
    opcode = "0";
    acc = "0";
    update();
}

function backspace() {
    acc = acc.substring(0, acc.length - 1);
    update();
}

function addDigit(digit) {
    if (acc === "0")
        acc = digit;
    else
        acc += digit;

    update();
}

function enterOperand(numberString) {
    let num = textToNumber(acc);

    if (opcode === "0")
        op1 = num;
    else
        op2 = num;

    acc = "";
    update();
}

function calculate() {
    if (opcode === "0")
        return;

    let result = 0;

    switch (opcode) {
        case "+":
            result = op1 + op2;
            break;
        case "-":
            result = op1 - op2;
            break;
        case "*":
            result = op1 * op2;
            break;
        case "/":
            result = op1 / op2;
            break;
    }

    opcode = "0";
    return result;
}

function plus() {
    enterOperand();
    opcode = "+";
}

function minus() {
    enterOperand();
    opcode = "-";
}

function multiply() {
    enterOperand();
    opcode = "*";
}

function divide() {
    enterOperand();
    opcode = "/";
}

function equals() {
    enterOperand();
    acc = calculate();
    update();
}

clearButton.addEventListener("click", () => { clear(); });
backspaceButton.addEventListener("click", () => { backspace(); });

button0.addEventListener("click", () => { addDigit("0"); });
button1.addEventListener("click", () => { addDigit("1"); });
button2.addEventListener("click", () => { addDigit("2"); });
button3.addEventListener("click", () => { addDigit("3"); });
button4.addEventListener("click", () => { addDigit("4"); });
button5.addEventListener("click", () => { addDigit("5"); });
button6.addEventListener("click", () => { addDigit("6"); });
button7.addEventListener("click", () => { addDigit("7"); });
button8.addEventListener("click", () => { addDigit("8"); });
button9.addEventListener("click", () => { addDigit("9"); });

plusButton.addEventListener("click", () => { plus(); });
minusButton.addEventListener("click", () => { minus(); });
multiplyButton.addEventListener("click", () => { multiply(); });
divideButton.addEventListener("click", () => { divide(); });
equalsButton.addEventListener("click", () => {equals(); });
