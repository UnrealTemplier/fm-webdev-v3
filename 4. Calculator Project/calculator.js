const screen = document.querySelector(".screen");
let buffer = "0";
let runningTotal = 0;
let prevOperation = null;

function rerender() {
    screen.innerText = buffer;
}

function clear() {
    buffer = "0";
}

function backspace() {
    if (buffer.length === 1)
        buffer = "0";
    else
        buffer = buffer.substring(0, buffer.length - 1);
}

function commitOperation(intBuffer) {
    if (intBuffer === 0 && (prevOperation === "×" || prevOperation === "÷"))
        return;

    if (prevOperation === "+")
        runningTotal += intBuffer;
    else if (prevOperation === "-")
        runningTotal -= intBuffer;
    else if (prevOperation === "×")
        runningTotal *= intBuffer;
    else if (prevOperation === "÷")
        runningTotal /= intBuffer;
}

function handleMath(operation) {
    if (operation === null)
        return;

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0)
        runningTotal = intBuffer;
    else
        commitOperation(intBuffer);

    prevOperation = operation;
    buffer = "0";
}

function handleEquals() {
    if (prevOperation === null)
        return;

    commitOperation(parseInt(buffer));
    
    prevOperation = null;
    buffer = "" + runningTotal;
    runningTotal = 0;
}

function handleSymbol(symbol) {
    if (symbol === null)
        return;

    switch (symbol) {
        case "C":
            clear();
            break;
        case "←":
            backspace();
            break;
        case "=":
            handleEquals();
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function handleNumber(number) {
    if (buffer === "0")
        buffer = number;
    else
        buffer += number;
}

function handleButtonClick(buttonText) {
    if (buttonText === null)
        return;

    if (isNaN(parseInt(buttonText)))
        handleSymbol(buttonText);
    else
        handleNumber(buttonText);

    rerender();
}

function init() {
    document.querySelector(".calc-buttons")
        .addEventListener("click", (event) => {
            handleButtonClick(event.target.innerHTML);
        });
}

init();