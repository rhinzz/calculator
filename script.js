// Global Variable
let numInput1 = null;
let numInput2 = null;
let operatorInput = null;
let resultShown = false;
let operatorPressed = false;

// Selector Variable
const buttons = document.querySelectorAll(".buttonRow button.number");
const display = document.querySelector(".displayContainer");
const secondaryDisplay = document.querySelector(".secondaryDisplayContainer");
const sum = document.querySelector("#sum");
const minus = document.querySelector("#subtract");
const product = document.querySelector("#multiply");
const division = document.querySelector("#divide");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let value = e.target.value;

        if (display.textContent.includes(".")) {
            document.getElementById("dot").disabled = true;
        } else {
            document.getElementById("dot").disabled = false;
        }

        if (display.textContent === "0" || resultShown) {
            display.textContent = value;
            document.getElementById("dot").disabled = false;
            resultShown = false;
        } else {
            display.textContent += value;
        }
    })
});

function operator(action) {
    action.addEventListener("click", () => {
        if (operatorPressed) {
            numInput2 = +display.textContent;
            numInput1 = operate(numInput1, numInput2, operatorInput);
            display.textContent = null; 
            secondaryDisplay.textContent = `${numInput1} ${action.textContent}`;
        } else {
            numInput1 = +display.textContent;
            display.textContent = null;
            secondaryDisplay.textContent = `${numInput1} ${action.textContent}`;
            operatorPressed = true;
        }
        operatorInput = action.value;
        operatorPressed = true;
    });
}

operator(sum);
operator(minus);
operator(product);
operator(division);


result.addEventListener("click", () => {
    if (!operatorInput || display.textContent === null) return;
    numInput2 = +display.textContent;
    display.textContent = operate(numInput1, numInput2, operatorInput);
    secondaryDisplay.textContent += ` ${numInput2} =`
    resultShown = true;
    operatorPressed = false;
});

clear.addEventListener("click", () => {
    numInput1 = null;
    numInput2 = null;
    operatorInput = null;
    operatorPressed = false;
    document.getElementById("dot").disabled = false;
    secondaryDisplay.textContent = "";
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
            return 'ERROR';
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
    return roundToSeven(num1 / num2);
}

function roundToSeven(num) {
    return +(Math.round(num + "e+7")  + "e-7");
}

// console.log(operate(3, 4, "+"));