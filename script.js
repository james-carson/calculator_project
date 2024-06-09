// ---Variables defined

let firstNumber = '',
    secondNumber = '',
    operator = '',
    firstNumberTop = '',
    operatorTop = '',
    secondNumberTop = '',
    memory = '';

// ---Operator functions:

const add = function (firstNumber, secondNumber) {
    return (parseFloat(firstNumber)) + (parseFloat(secondNumber));
};
const subtract = function (firstNumber, secondNumber) {
    return (parseFloat(firstNumber)) - (parseFloat(secondNumber));
};
const multiply = function (firstNumber, secondNumber) {
    return (parseFloat(firstNumber)) * (parseFloat(secondNumber));
};
const divide = function (firstNumber, secondNumber) {
    if (secondNumber !== '0') {
        return (parseFloat(firstNumber)) / (parseFloat(secondNumber));
    } else {
        return null;
    }
};

const operate = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        const result = divide(firstNumber, secondNumber);
        if (result === null) {
            displayError();
            alert("You can't divide by 0! Click 'AC'")
        }
        return result;
    } else {
        displayError();
        return null;
    }
};

const clearLast = function () {
    if (firstNumber && operator && secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
    } else if (firstNumber && operator && !secondNumber) {
        operator = '';
    } else if (firstNumber && !operator && !secondNumber) {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateLowerScreen();
};

const clearAll = function () {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    firstNumberTop = '';
    operatorTop = '';
    secondNumberTop = '';
    memory = '';
    updateScreen();
};

const deleteAll = function () {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    firstNumberTop = '';
    operatorTop = '';
    secondNumberTop = '';
    memory = '';
}

const lengthCheck = function () {
    if (lowerScreen.textContent.length < 12) {
        return true
    } else {
        alert("Character limit reached!")
        return false
    }
}

const togglePower = function () {
    clearAll();
    screen.classList.toggle("screen_off");
}

// --Allowing the screen to be updated:
const lowerScreen = document.getElementById("screen_bottom");
const upperScreen = document.getElementById("screen_top");
const screen = document.getElementById("screen");

// Adding a class for the screen to be turned on and off:
screen.classList.add('screen_off');


function updateScreen() {
    if (!memory) {
        upperScreen.textContent = '';
        lowerScreen.textContent = firstNumber + operator + secondNumber;
    } else if (memory) {
        upperScreen.textContent = firstNumberTop + operatorTop + secondNumberTop;
        lowerScreen.textContent = memory + firstNumber + secondNumber;
    }
}

function updateLowerScreen() {
    let displayText = '';
    
    if (!memory) {
        displayText = firstNumber + operator + secondNumber;
    } else if (memory) {
        displayText = memory + operator + secondNumber;
    }
    
    if (displayText.length > 10) {
        displayText = displayText.slice(0, 10) + '...';
    }

    lowerScreen.textContent = displayText;
}


// EQUALS BUTTON
function updateScreenAnswer() {
    firstNumberTop = firstNumber;
    operatorTop = operator;
    secondNumberTop = secondNumber;
    upperScreen.textContent = firstNumberTop + operatorTop + secondNumberTop;
    const result = operate(firstNumber, operator, secondNumber);
    memory = result
    if (result !== null) {
        let displayResult = parseFloat(result.toFixed(10));
        if (displayResult.length > 10) {
            displayResult = displayResult.slice(0, 10) + '...';
        }
        lowerScreen.textContent = displayResult;
    }
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

function displayError() {
    console.log("Displaying error...");
    deleteAll();
    upperScreen.textContent = '';
    lowerScreen.textContent = 'ERROR!';
}

// --Click handlers to update variables:

// Click handler to update variables on number clicks:
function handleNumberClick(number) {
    if (lengthCheck()) {
        if (memory && operator) {
            secondNumber += number;
        } else if (!memory) {
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
            }
        } else {
            displayError();
        }
        updateLowerScreen();
    }
}

// Click handler to update operator variable on operator clicks:
function handleOperatorClick(operatorEntry) {
    if (lengthCheck()) {
        if (!operator) {
            if (memory) {
                firstNumber = memory
                operator = operatorEntry;
                secondNumber = '';
                updateLowerScreen()
            } else if (!memory) {
                operator = operatorEntry;
                updateScreen()
            } else {
                displayError();
            }
        } else if (operator) {
            operator = operatorEntry;
            updateLowerScreen();
        }
    }
}

// Click handler to handle decimal point button click:
function handleDecimalPoint() {
    if (lengthCheck()) {
        if (!operator) {
            if (!firstNumber && memory) {
                if (!memory.includes(".")) {
                    memory += '.';
                }
            } else if (firstNumber && !firstNumber.includes(".")) {
                firstNumber += '.';
            } else if (!firstNumber) {
                firstNumber = '0.';
            }
        } else {
            if (secondNumber && !secondNumber.includes(".")) {
                secondNumber += '.';
            } else if (!secondNumber) {
                secondNumber = '0.';
            }
        }
        updateLowerScreen();
    }
}

// --Event listeners to listen for a button click:

// Numbers:

const zeroButton = document.getElementById("zero_button");
zeroButton.addEventListener("click", () => handleNumberClick('0'));
const oneButton = document.getElementById("one_button");
oneButton.addEventListener("click", () => handleNumberClick('1'));
const twoButton = document.getElementById("two_button");
twoButton.addEventListener("click", () => handleNumberClick('2'));
const threeButton = document.getElementById("three_button");
threeButton.addEventListener("click", () => handleNumberClick('3'));
const fourButton = document.getElementById("four_button");
fourButton.addEventListener("click", () => handleNumberClick('4'));
const fiveButton = document.getElementById("five_button");
fiveButton.addEventListener("click", () => handleNumberClick('5'));
const sixButton = document.getElementById("six_button");
sixButton.addEventListener("click", () => handleNumberClick('6'));
const sevenButton = document.getElementById("seven_button");
sevenButton.addEventListener("click", () => handleNumberClick('7'));
const eightButton = document.getElementById("eight_button");
eightButton.addEventListener("click", () => handleNumberClick('8'));
const nineButton = document.getElementById("nine_button");
nineButton.addEventListener("click", () => handleNumberClick('9'));


// Operators:

const addButton = document.getElementById("add_button");
addButton.addEventListener("click", () => handleOperatorClick('+'));
const subtractButton = document.getElementById("subtract_button");
subtractButton.addEventListener("click", () => handleOperatorClick('-'));
const multiplyButton = document.getElementById("multiply_button");
multiplyButton.addEventListener("click", () => handleOperatorClick('*'));
const divideButton = document.getElementById("divide_button");
divideButton.addEventListener("click", () => handleOperatorClick('/'));

// Other buttons:

const powerButton = document.getElementById("power_button");
powerButton.addEventListener("click", function () {
    togglePower();
});
const acButton = document.getElementById("ac_button");
acButton.addEventListener("click", function () {
    clearAll();
});
const cButton = document.getElementById("c_button");
cButton.addEventListener("click", function () {
    clearLast()
});
const pointButton = document.getElementById("point_button");
pointButton.addEventListener("click", function () {
    handleDecimalPoint();
});
const equalsButton = document.getElementById("equals_button");
equalsButton.addEventListener("click", function () {
    updateScreenAnswer();
});

// Here are the event listeners for keyboard input:

Numbers:
document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        handleNumberClick(event.key);
    } else if (event.key === '+') {
        handleOperatorClick('+');
    } else if (event.key === '-') {
        handleOperatorClick('-');
    } else if (event.key === '*') {
        handleOperatorClick('*');
    } else if (event.key === '/') {
        handleOperatorClick('/');
    } else if (event.key === '.') {
        handleDecimalPoint();
    } else if (event.key === 'Enter') {
        updateScreenAnswer();
    } else if (event.key === 'Escape') {
        clearAll();
    } else if (event.key === 'Backspace') {
        clearLast();
    }
});

