// Global Variable
let numInput1;
let numInput2;
let operatorInput;

// Selector Variable
const buttons = document.querySelectorAll(".buttonRow button");
const display = document.querySelector(".displayContainer");
const sum = document.querySelector("#sum");
const minus = document.querySelector("#subtract");
const product = document.querySelector("#multiply");
const division = document.querySelector("#divide");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let value = e.target.value;

        if (display.textContent === "0") {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    })
});

sum.addEventListener("click", () => {
    numInput1 = +display.textContent;
    operatorInput = sum.textContent;
    display.textContent = null;
});

minus.addEventListener("click", () => {
    numInput1 = +display.textContent;
    operatorInput = minus.textContent;
    display.textContent = null;
});

product.addEventListener("click", () => {
    numInput1 = +display.textContent;
    operatorInput = product.textContent;
    display.textContent = null;
});

division.addEventListener("click", () => {
    numInput1 = +display.textContent;
    operatorInput = division.textContent;
    display.textContent = null;
});

result.addEventListener("click", () => {
    numInput2 = +display.textContent;
    if (operatorInput == "/") {
        if (numInput1 == "0" || numInput2 == "0") {
            display.textContent = "NOPE";
        } else {
            display.textContent = operate(numInput1, numInput2, operatorInput).toFixed(2);
        }
    } else {
        display.textContent = operate(numInput1, numInput2, operatorInput);
    }
    numInput1 = +display.textContent;
});

clear.addEventListener("click", () => {
    numInput1 = null;
    numInput2 = null;
    operatorInput = null;
    display.textContent = "0"
});

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid Operator!";
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// console.log(operate(3, 4, "+"));