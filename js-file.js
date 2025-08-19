// function for adding two numbers
function add(number1, number2) {
    return number1 + number2;
};


// function for subtracting two numbers
function subtract(number1, number2) {
    return number1 - number2;
};


//function for multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
};

// function for dividing two numbers. 
function divide(number1, number2) {
    return number1 / number2;
};


// function that takes two number and one operation and calls the correct function to correct function to the the operation. 
function operate(number1, number2, operator) {
    if (operator === "a") {
        return add(number1, number2);
    } else if (operator === "s") {
        return subtract(number1, number2);
    } else if (operator === "m") {
        return multiply(number1, number2);
    } else if (operator === "d") {
        return divide(number1, number2);
    } else {
        console.log("Error: not a correct operator!");
    }
};


// variable to store the first number. 
let number1 = 0;

// variable to store the second number. 
let number2 = 0;

// variable to store the variable. 
let operation = "";

