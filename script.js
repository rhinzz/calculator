// Global Variable
let numInput1 = null;
let numInput2 = null;
let operatorInput = null;
let resultShown = false;
let operatorPressed = false;


// Selector Variable
const buttons = document.querySelectorAll(".buttonRow button.number");
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
        if (!operatorPressed) {
            numInput1 = +display.textContent;
            display.textContent = null;
        }
        operatorInput = action.value;
        operatorPressed = true;
    })
};

sum.addEventListener("click", operator(sum));
minus.addEventListener("click", operator(minus));
product.addEventListener("click", operator(product));
division.addEventListener("click", operator(division));


result.addEventListener("click", () => {
    if (!operatorInput || display.textContent === null) return;
    numInput2 = +display.textContent;
    if (operatorInput == "/" || operatorInput == "*") {
        if (numInput1 == "0" || numInput2 == "0") {
            display.textContent = "ERROR";
        } else if (operate(numInput1, numInput2, operatorInput).toString().length > 8) {
            display.textContent = operate(numInput1, numInput2, operatorInput);
            display.textContent = display.textContent.substring(0, 8);
        } else {
            display.textContent = operate(numInput1, numInput2, operatorInput);
        }
    } else {
        display.textContent = operate(numInput1, numInput2, operatorInput);
    }
    resultShown = true;
    operatorPressed = false;
});

clear.addEventListener("click", () => {
    numInput1 = null;
    numInput2 = null;
    operatorInput = null;
    operatorPressed = false;
    document.getElementById("dot").disabled = false;
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
    return num1 / num2;
}

// console.log(operate(3, 4, "+"));