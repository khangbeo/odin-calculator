import "./style.css";
import { operate } from "./helpers/operate";

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let resetFlag = false;

const output = document.querySelector("#output");
const buttons = document.querySelectorAll("#buttons button");

function handleButtonClick(value) {
    if (resetFlag) {
        firstNum = "";
        resetFlag = false;
    }

    if (operator === "") {
        firstNum += value;
        output.textContent = firstNum;
    } else {
        secondNum += value;
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
        result = operate(
            parseFloat(firstNum),
            parseFloat(secondNum),
            operator
        ).toString();
        secondNum = "";
        operator = "";
        output.textContent = result;
        firstNum = result;
        resetFlag = true;
    }
}

function handleClear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    output.textContent = "";
}

function handleUnary(value) {
    /**
     * I think if number is positive, then append a negative to the front of the number, if number is negative, then just remove the negative
     */
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
        }
    });
});
