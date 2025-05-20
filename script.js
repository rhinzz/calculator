// Global Variable
let numInput1 = null;
let numInput2 = null;
let operatorInput = null;


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

        if (display.textContent.includes(".")) {
            document.getElementById("dot").disabled = true;
        } else {
            document.getElementById("dot").disabled = false;
        }

        if (display.textContent === "0") {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    })
});

function operator(action) {
    action.addEventListener("click", () => {
        numInput1 = +display.textContent;
        operatorInput = action.textContent;
        display.textContent = null;
    })
};

sum.addEventListener("click", operator(sum));
minus.addEventListener("click", operator(minus));
product.addEventListener("click", operator(product));
division.addEventListener("click", operator(division));


result.addEventListener("click", () => {
    numInput2 = +display.textContent;
    if (operatorInput == "/") {
        if (numInput1 == "0" || numInput2 == "0") {
            display.textContent = "NOPE";
        } else if (operate(numInput1, numInput2, operatorInput).toString().length > 8){
            display.textContent = operate(numInput1, numInput2, operatorInput);
            display.textContent = display.textContent.substring(0, 8);
        } else {
            display.textContent = operate(numInput1, numInput2, operatorInput);
        }
    } else {
        display.textContent = operate(numInput1, numInput2, operatorInput);
    }
    
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
            return 0;
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