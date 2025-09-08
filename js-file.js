
// function that takes two number and one operation and calls the correct function to correct function to the the operation. 
function operate(number1, number2, operator) {
    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operator === "*") {
        return multiply(number1, number2);
    } else if (operator === "/") {
        return divide(number1, number2);
    } else {
        console.log("Error: not a correct operator!");
    }
};

// variable to store the input
let input = 0;


// variable to store the first number. 
let number1 = "";
let number1_value = false;

// variable to store the second number. 
let number2 = "";
let number2_value = false;

// variable to store the variable. 
let operation = "";

// create an array for storing the calculation in 
let calculation = [];

// create a variable to store the result
let result = 0;

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

// add an click event listener for the number button. and add the "number" to the array. 
one.addEventListener("click", () => {
    input = collectInput(input, one.id);
    updateDisplay(input);
});

two.addEventListener("click", () => {
    input = collectInput(input, two.id);
    updateDisplay(input);
});

three.addEventListener("click", () => {
    input = collectInput(input, three.id);
    updateDisplay(input);
});

four.addEventListener("click", () => {
    input = collectInput(input, four.id);
    updateDisplay(input);
});

five.addEventListener("click", () => {
    input = collectInput(input, five.id);
    updateDisplay(input);
});

six.addEventListener("click", () => {
    input = collectInput(input, six.id);
    updateDisplay(input);
});

seven.addEventListener("click", () => {
    input = collectInput(input, seven.id);
    updateDisplay(input);
});

eight.addEventListener("click", () => {
    input = collectInput(input, eight.id);
    updateDisplay(input);
});

nine.addEventListener("click", () => {
    input = collectInput(input, nine.id);
    updateDisplay(input);
});

zero.addEventListener("click", () => {
    input = collectInput(input, zero.id);
    updateDisplay(input);
});


// event listeners for the operators
addition.addEventListener("click", () => {
    // Store the number from the input in the number1 variable. 
    number1 = input;

    // store the operator in the operation variable. 
    operation = "+";

    // reset the input variable to 0
    input = 0;

    updateDisplay(operation);
});

subtraction.addEventListener("click", () => {
    // Store the number from the input in the number1 variable. 
    number1 = input;

    // store the operator in the operation variable. 
    operation = "-";

    // reset the input variable to 0
    input = 0;

    updateDisplay(operation);
});

multiplication.addEventListener("click", () => {
    // Store the number from the input in the number1 variable. 
    number1 = input;

    // store the operator in the operation variable. 
    operation = "*";

    // reset the input variable to 0
    input = 0;

    updateDisplay(operation);
});

division.addEventListener("click", () => {
    // Store the number from the input in the number1 variable. 
    number1 = input;

    // store the operator in the operation variable. 
    operation = "/";

    // reset the input variable to 0
    input = 0;

    updateDisplay(operation);
});


// event listeners for the control buttons. 
clear.addEventListener("click", () => {
    calculation = [];
    number1 = 0;
    number2 = 0;
    number1_value = false;
    number2_value = false;
    operation = "";
    input = 0;
    result = 0;
    updateDisplay();
})

enter.addEventListener("click", () => {
    console.log("THis is the calculation we will do:")

    // store the input in the variable number2
    number2 = input;

    // do the operation
    result = operate(number1, number2, operation);

    updateDisplay(result);

})

// update the display element with the text from the calculation array. 
function updateDisplay(text) {
    const display = document.getElementById("display");
    display.textContent = text;
};

// function updateDisplayWithResult(result) {
//     const display = document.getElementById("display");
//     display.textContent = result;
// }

function collectInput(input, id) {
    return input * 10 + parseInt(id);
}


