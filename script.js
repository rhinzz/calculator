// Global Variable
let numInput1;
let numInput2;
let operatorInput;

document.querySelectorAll(".buttonRow button").forEach(button => {
    button.addEventListener("click", e => {
        let value = e.target.value;
        if (document.querySelector(".displayContainer").textContent === "0") {
            document.querySelector(".displayContainer").textContent = value;
        } else {
            document.querySelector(".displayContainer").textContent += value;
          }
    })
});

document.querySelector("#sum").addEventListener("click", () => {
    numInput1 = +document.querySelector(".displayContainer").textContent;
    operatorInput = document.querySelector("#sum").textContent;
    document.querySelector(".displayContainer").textContent = null; 
});

document.querySelector("#subtract").addEventListener("click", () => {
    numInput1 = +document.querySelector(".displayContainer").textContent;
    operatorInput = document.querySelector("#subtract").textContent;
    document.querySelector(".displayContainer").textContent = null;
});

document.querySelector("#multiply").addEventListener("click", () => {
    numInput1 = +document.querySelector(".displayContainer").textContent;
    operatorInput = document.querySelector("#multiply").textContent;
    document.querySelector(".displayContainer").textContent = null;
});

document.querySelector("#divide").addEventListener("click", () => {
    numInput1 = +document.querySelector(".displayContainer").textContent;
    operatorInput = document.querySelector("#divide").textContent;
    document.querySelector(".displayContainer").textContent = null;
});

document.querySelector("#result").addEventListener("click", () => {
    numInput2 = +document.querySelector(".displayContainer").textContent;
    document.querySelector(".displayContainer").textContent = operate(numInput1, numInput2, operatorInput); 
});

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector(".displayContainer").textContent = "0"
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