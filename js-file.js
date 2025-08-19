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



// create an array for storing the calculation in 
let calculation = [];

// select the html element with different numbers
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

// select the html elements with different operators
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");

// select the html elements with the different controls. 
const clear = document.getElementById("clear");
const enter = document.getElementById("enter");

// add an click event listener for the "1" button. and add the "number" to the array. 
one.addEventListener("click", () => {
    calculation.push(one.id);
    updateDisplay();
});

two.addEventListener("click", () => {
    calculation.push(two.id);
    updateDisplay();
});



addition.addEventListener("click", () => {
    calculation.push("+");
    updateDisplay();
});

subtraction.addEventListener("click", () => {
    calculation.push("-");
    updateDisplay();
});

multiplication.addEventListener("click", () => {
    calculation.push("*");
    updateDisplay();
});

division.addEventListener("click", () => {
    calculation.push("/");
    updateDisplay();
});



clear.addEventListener("click", () => {
    calculation = [];
    updateDisplay();
})

enter.addEventListener("click", () => {
    // start the function for doing the calculation 

    // update the display with the result
    
})

// update the display element with the text from the calculation array. 
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = calculation.join("");
};


