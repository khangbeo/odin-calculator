import "./style.css";
import { operate } from "./helpers/operate";

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

// elements
const output = document.querySelector("#output");
const buttons = document.querySelectorAll("#buttons button");

// functions

function handleButtonClick(value) {
    if (!isNaN(value)) {
        if (operator === "") {
            firstNum += value;
            output.textContent = firstNum;
        } else {
            secondNum += value;
            output.textContent = firstNum + " " + operator + " " + secondNum;
        }
    }
}

function handleOperator(value) {
    if (firstNum === "") return;

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
    console.log(firstNum);
    if (firstNum !== "" && secondNum !== "") {
        result = operate(
            parseFloat(firstNum),
            parseFloat(secondNum),
            operator
        ).toString();
        secondNum = "";
        operator = "";
        output.textContent = result;
        firstNum = result; // Show result
    }
}

function handleClear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    output.textContent = "";
}

// event listeners
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        console.log(value);
        if (!isNaN(value)) {
            handleButtonClick(value); // Call number handler
        } else if (["+", "-", "×", "÷"].includes(value)) {
            handleOperator(value); // Call operator handler
        } else if (value === "=") {
            handleEqual(); // Call equal handler
        } else if (value === "C") {
            handleClear(); // Call clear handler
        }

        // console.log(`
        //   firstNum: ${firstNum}
        //   secondNum: ${secondNum}
        //   operator: ${operator}`);
    });
});
