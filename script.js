// --Variables for later use:

let firstNumber = '',
    secondNumber = '',
    operator = '';

// --Allowing the screen to be updated:
const lowerScreen = document.getElementById("screen_bottom");
function updateScreen() {
    lowerScreen.textContent = firstNumber + operator + secondNumber;
}

// --Click handlers to update variables:

// Click handler to update variables on number clicks:
function handleNumberClick(number) {
    if (!operator && !secondNumber) {
        if (firstNumber === '0') {
            firstNumber = number;
        } else {
            firstNumber += number;
        }
    } else if (firstNumber && operator) {
        if (secondNumber === '0') {
            secondNumber = number;
        } else {
            secondNumber += number;
        }
    } else {
        // Update screen to read "ERROR" later!
    }
    updateScreen()
}

// Click handler to update operator variable on operator clicks:
function handleOperatorClick(operatorEntry) {
    if (firstNumber && !firstNumber == '0' && !operator) {
        operator = operatorEntry
    } else {
        // Update screen to read "ERROR" later! 
    }
    updateScreen()
}

// --Event listeners to listen for a button click:

// Numbers:

const zeroButton = document.getElementById("zero_Button");
zeroButton.addEventListener("click", () =>
    handleNumberClick('0'));
const oneButton = document.getElementById("one_Button");
oneButton.addEventListener("click", () =>
    handleNumberClick('1'));
const twoButton = document.getElementById("two_Button");
twoButton.addEventListener("click", () =>
    handleNumberClick('2'));
const threeButton = document.getElementById("three_Button");
threeButton.addEventListener("click", () =>
    handleNumberClick('3'));
const fourButton = document.getElementById("four_Button");
fourButton.addEventListener("click", () =>
    handleNumberClick('4'));
const fiveButton = document.getElementById("five_Button");
fiveButton.addEventListener("click", () =>
    handleNumberClick('5'));
const sixButton = document.getElementById("six_Button");
sixButton.addEventListener("click", () =>
    handleNumberClick('6'));
const sevenButton = document.getElementById("seven_Button");
sevenButton.addEventListener("click", () =>
    handleNumberClick('7'));
const eightButton = document.getElementById("eight_Button");
eightButton.addEventListener("click", () =>
    handleNumberClick('8'));
const nineButton = document.getElementById("nine_Button");
nineButton.addEventListener("click", () =>
    handleNumberClick('9'));


// Operators:

const addButton = document.getElementById("add_Button");
addButton.addEventListener("click", () =>
    handleOperatorClick('+'));
const subtractButton = document.getElementById("subtract_Button");
subtractButton.addEventListener("click", () =>
    handleOperatorClick('-'));
const multiplyButton = document.getElementById("multiply_Button");
multiplyButton.addEventListener("click", () =>
    handleOperatorClick('*'));
const divideButton = document.getElementById("divide_Button");
divideButton.addEventListener("click", () =>
    handleOperatorClick('/'));

// Other buttons:

const powerButton = document.getElementById("power_Button");
powerButton.addEventListener("click", function () {
    // Add function here!
});
const acButton = document.getElementById("ac_Button");
acButton.addEventListener("click", function () {
    // Add function here!
});
const cButton = document.getElementById("c_Button");
cButton.addEventListener("click", function () {
    // Add function here!
});
const pointButton = document.getElementById("point_Button");
pointButton.addEventListener("click", function () {
    // Add function here!
});
const equalsButton = document.getElementById("equals_Button");
equalsButton.addEventListener("click", function () {
    // Add function here!
});


// Operator functions:

const add = function (a, b) {
    return (a + b)
};

const subtract = function (a, b) {
    return (a - b)
};

const multiply = function (a, b) {
    return (a * b)
};

const divide = function (a, b) {
    return (a / b)
};

const operate = function (a, b, operator) {
    if (operator === addButton) {
        return add(a, b);
    } else if (operator === subtractButton) {
        return subtract(a, b);
    } else if (operator === multiplyButton) {
        return multiply(a, b);
    } else if (operator === divideButton) {
        return divide(a, b);
    } else {
        // Display an error on the screen!
    }
};

const clearLast = function () {

};

const clearAll = function () {

};

const togglePower = function () {

}