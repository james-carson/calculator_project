let firstNumber,
    secondNumber,
    operator;

// Need to add event listeners next:

// // Select the equals button div
// const equalsButton = document.getElementById("equalsButton");

// // Add event listener for click event
// equalsButton.addEventListener("click", function() {
//     // Call a function or execute logic when the equals button is clicked
// });


    const add = function(a, b) {
        return (a + b)
    };
    
    const subtract = function(a, b) {
        return (a - b)
    };

    const multiply = function(a, b) {
        return (a * b)
    };

    const divide = function(a, b) {
        return (a / b)
    };

    const operate = function (a, b, operator){
        if (operator === addButton){
            return add (a, b);
        } else if (operator === subtractButton){
            return subtract (a, b);
        } else if (operator === multiplyButton){
            return multiply (a, b);
        } else if (operator === divideButton){
            return divide (a, b);
        } else{
            // Display an error on the screen!
        }
    };

    const clearLast = function() {

    };

    const clearAll = function() {

    };

    const togglePower = function(){

    }