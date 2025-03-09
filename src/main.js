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
    return parseFloat(parseFloat(num).toFixed(2));
}

function handleButtonClick(value) {
    if (resetFlag) {
        firstNum = "";
        resetFlag = false;
    }

    if (operator === "") {
        firstNum += value;
        firstNum = formatNumber(firstNum).toString();
        output.textContent = firstNum;
    } else {
        secondNum += value;
        secondNum = formatNumber(secondNum).toString();
        output.textContent = firstNum + " " + operator + " " + secondNum;
    }
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
    output.textContent = firstNum + " " + operator;
}

function handleEqual() {
    if (firstNum !== "" && secondNum !== "") {
        result = operate(parseFloat(firstNum), parseFloat(secondNum), operator);

        firstNum = formatNumber(result).toString();
        secondNum = "";
        operator = "";
        output.textContent = firstNum;
    }
}

function handleClear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    output.textContent = "";
}

function handleUnary(value) {
    if (operator === "") {
        firstNum = firstNum.startsWith("-")
            ? firstNum.slice(1)
            : "-" + firstNum;
        output.textContent = firstNum;
    } else {
        secondNum = secondNum.startsWith("-")
            ? secondNum.slice(1)
            : "-" + secondNum;
        output.textContent = firstNum + " " + operator + " " + secondNum;
    }
}

function handleDot() {
    if (operator === "") {
        if (!firstNum.includes(".")) {
            firstNum += firstNum === "" ? "0." : ".";
            output.textContent = firstNum;
        }
    } else {
        if (!secondNum.includes(".")) {
            secondNum += secondNum === "" ? "0." : ".";
            output.textContent = firstNum + " " + operator + " " + secondNum;
        }
    }
}

function handlePercentage() {
    if (operator === "") {
        firstNum = formatNumber(parseFloat(firstNum) / 100).toString();
        output.textContent = firstNum;
    } else if (secondNum !== "") {
        secondNum = formatNumber(
            parseFloat(firstNum) * (parseFloat(secondNum) / 100)
        ).toString();
        output.textContent = firstNum + " " + operator + " " + secondNum;
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
