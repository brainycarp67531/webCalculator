
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


// variable to store the second number. 
let number2 = "";


// variable to store the variable. 
let operation = "";
let operation_state = false;

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
    collectInput(one.id);
});

two.addEventListener("click", () => {
    collectInput(two.id);
});

three.addEventListener("click", () => {
    collectInput(three.id);
});

four.addEventListener("click", () => {
    collectInput(four.id);
});

five.addEventListener("click", () => {
    collectInput(five.id);
});

six.addEventListener("click", () => {
    collectInput(six.id);
});

seven.addEventListener("click", () => {
    collectInput(seven.id);
});

eight.addEventListener("click", () => {
    collectInput(eight.id);
});

nine.addEventListener("click", () => {
    collectInput(nine.id);
});

zero.addEventListener("click", () => {
    collectInput(zero.id);
});


// event listeners for the operators
addition.addEventListener("click", () => {
    if (operation_state == false) {
        operation = "+";
        operation_state = true;
        updateDisplay(operation);
    } else if (operation_state == true) {
        doTheCalculation();
        operation = "+";
    }
});

subtraction.addEventListener("click", () => {
    if (operation_state == false) {
        operation = "-";
        operation_state = true;
        updateDisplay(operation);
    } else if (operation_state == true) {
        doTheCalculation();
        operation = "-";
    }
});

multiplication.addEventListener("click", () => {
    if (operation_state == false) {
        operation = "*";
        operation_state = true;
        updateDisplay(operation);
    } else if (operation_state == true) {
        doTheCalculation();
        operation = "*";
    }
});

division.addEventListener("click", () => {
    if (operation_state == false) {
        operation = "/";
        operation_state = true;
        updateDisplay(operation);
    } else if (operation_state == true) {
        doTheCalculation();
        operation = "/";
    }
});


// event listeners for the control buttons. 
clear.addEventListener("click", () => {

    clearEverything();

})

enter.addEventListener("click", () => {
    
    console.log("This is the calculation we will do:")

    doTheCalculation();

})

// update the display element with the text from the calculation array. 
function updateDisplay(text) {
    
    const display = document.getElementById("display");
    display.textContent = text;
};


function collectInput(id) {

    if (operation_state == false) {
        number1 = number1 * 10 + parseInt(id);
        updateDisplay(number1);
    } else if (operation_state == true) {
        number2 = number2 * 10 + parseInt(id);
        updateDisplay(number2); 
    };
}


function doTheCalculation() {

    // check that we do not devid with zero. 
    if (operation == "/" && number2 == 0) {
        alert("You should not divide with zero");
        clearEverything();
        return;
    }

    console.log(number1 + " " + operation + " " + number2);
    
    // do the operation
    result = operate(number1, number2, operation);

    // round the number 
    result = Math.round(result * 100) / 100;

    // store the result in input variable to continue the calculation. 
    number1 = result;
    number2 = 0;

    updateDisplay(result);

}


function clearEverything() {
    calculation = [];
    number1 = 0;
    number2 = 0;
    operation = "";
    operation_state = false;
    input = 0;
    result = 0;
    updateDisplay();
};