import "./style.css";
import { operate } from "./helpers/operate";

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let resetFlag = false;

const output = document.querySelector("#output");
const buttons = document.querySelectorAll("#buttons button");

function formatNumber(num) {
    /**
     * parseFloat(num) converts output to a floating number
     * toFixed converts float to a string and ensure it only has two decimals
     * second parseFloat turn it back into a floating number
     */
    return parseFloat(parseFloat(num).toFixed(2));
}

function updateDisplay() {
    output.textContent =
        firstNum +
        (operator ? " " + operator : "") +
        (secondNum ? " " + secondNum : "");
}

function handleButtonClick(value) {
    // if reset flag is true, then clear out number and set it back to false
    if (resetFlag) {
        firstNum = "";
        resetFlag = false;
    }

    if (operator === "") {
        firstNum += value;
        firstNum = formatNumber(firstNum).toString();
    } else {
        secondNum += value;
        secondNum = formatNumber(secondNum).toString();
    }
    updateDisplay();
}

function handleOperator(value) {
    if (firstNum === "") return;

    if (resetFlag) resetFlag = false;

    if (secondNum !== "") {
        firstNum = operate(
            parseFloat(firstNum),
            parseFloat(secondNum),
            operator
        ).toString();
        secondNum = "";
    }

    operator = value;
    updateDisplay();
}

function handleEqual() {
    if (firstNum !== "" && secondNum !== "") {
        result = operate(parseFloat(firstNum), parseFloat(secondNum), operator);

        firstNum = formatNumber(result).toString();
        secondNum = "";
        operator = "";
        resetFlag = true;
        updateDisplay();
    }
}

function handleClear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    updateDisplay();
}

function handleUnary(value) {
    if (firstNum === "") return;
    if (operator === "") {
        firstNum = firstNum.startsWith("-")
            ? firstNum.slice(1)
            : "-" + firstNum;
        updateDisplay();
    } else {
        secondNum = secondNum.startsWith("-")
            ? secondNum.slice(1)
            : "-" + secondNum;
        updateDisplay();
    }
}

function handleDot() {
    if (operator === "") {
        if (!firstNum.includes(".")) {
            firstNum += firstNum === "" ? "0." : ".";
            updateDisplay();
        }
    } else {
        if (!secondNum.includes(".")) {
            secondNum += secondNum === "" ? "0." : ".";
            updateDisplay();
        }
    }
}

function handlePercentage() {
    if (firstNum === "") return;
    if (operator === "") {
        firstNum = formatNumber(parseFloat(firstNum) / 100).toString();
        updateDisplay();
    } else if (secondNum !== "") {
        secondNum = formatNumber(
            parseFloat(firstNum) * (parseFloat(secondNum) / 100)
        ).toString();
        updateDisplay();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (!isNaN(value)) {
            handleButtonClick(value);
        } else if (["+", "-", "×", "÷"].includes(value)) {
            handleOperator(value);
        } else if (value === "+/-") {
            handleUnary(value);
        } else if (value === "=") {
            handleEqual();
        } else if (value === "C") {
            handleClear();
        } else if (value === ".") {
            handleDot();
        } else if (value === "%") {
            handlePercentage();
        }
    });
});
