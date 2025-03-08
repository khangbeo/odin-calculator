function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error("Cannot divide by zero");
    return x / y;
}

export function operate(x, y, operator) {
    const operations = {
        "+": add,
        "-": subtract,
        "×": multiply,
        "÷": divide,
    };

    return operations[operator](x, y);
}
