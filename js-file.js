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

// add an click event listener for the number button. and add the "number" to the array. 
one.addEventListener("click", () => {
    calculation.push(one.id);
    updateDisplay();
});

two.addEventListener("click", () => {
    calculation.push(two.id);
    updateDisplay();
});

three.addEventListener("click", () => {
    calculation.push(three.id);
    updateDisplay();
});

four.addEventListener("click", () => {
    calculation.push(four.id);
    updateDisplay();
});

five.addEventListener("click", () => {
    calculation.push(five.id);
    updateDisplay();
});

six.addEventListener("click", () => {
    calculation.push(six.id);
    updateDisplay();
});

seven.addEventListener("click", () => {
    calculation.push(seven.id);
    updateDisplay();
});

eight.addEventListener("click", () => {
    calculation.push(eight.id);
    updateDisplay();
});

nine.addEventListener("click", () => {
    calculation.push(nine.id);
    updateDisplay();
});

zero.addEventListener("click", () => {
    calculation.push(zero.id);
    updateDisplay();
});


// event listeners for the operators
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


// event listeners for the control buttons. 
clear.addEventListener("click", () => {
    calculation = [];
    updateDisplay();
})

enter.addEventListener("click", () => {
    console.log("THis is the calculation we will do:")
    console.log(calculation);

    // start the function for doing the calculation
    
    // Check for multiplications via a loop over the calculation array
    for (let i = 0; i < calculation.length; i++) {

        // variables to keep track of what to replace in the initial array. Will be used when spliceing the calculation array. 
        let startIndex = 0;
        let deleteCount = 0;
        // variable to keep track of the result 
        let result = 0;

        // and store the multiplication sign in the variable operation. 
        if (calculation[i] === "*") {
            operation = calculation[i];
            console.log("operator is stored.")
            console.log(operation);
            console.log("i");
            console.log(i);
            console.log(typeof(calculation[0]));
            console.log(typeof(calculation[i]));


            // multiple the two numbers before and after the multiplication sign
            // check before the sign and store the first number in the variable "number1"
            for (let j = 1; i - j >= 0; j++) {
                if (calculation[i-j] >= "0" && calculation[i-j] <= "9") {
                    console.log("testing for a number 1 at i =", i-j);
                    if (i-j == 0) {
                        // store the number before the * sign in the variable "number1".
                        number1 = parseInt(calculation.slice(0, i).join(""));
                        console.log("number1", number1);
                        startIndex = 0;
                        break;
                    }
                    continue;
                } else {
                    // store the number before the * sign in the variable "number1".
                    number1 = parseInt(calculation.slice(i - j + 1, i).join(""));
                    console.log("number1", number1);
                    startIndex = (i - j + 1);
                    console.log("startIndex: ", startIndex);
                    break;
                };
            };


            // check after the sign and store the second number in the variable "number2"
            for (let k = 1; i + k < calculation.length; k++) {
                if (calculation[i+k] >= "0" && calculation[i+k] <= "9") {
                    console.log("testing for a number 2 at i = ", i+k);
                    if (i+k == calculation.length - 1) {
                        number2 = parseInt(calculation.slice(i + 1).join(""));
                        console.log("number2", number2);
                        deleteCount = calculation.length - 1 - startIndex;
                        break;
                    }
                    continue;
                }else {
                    // store the number before the * sign in the variable "number1".
                    number2 = parseInt(calculation.slice(i + 1, i + k).join(""));
                    console.log("number2", number2);
                    deleteCount = i + k - startIndex;
                    console.log("deleteCount: ", deleteCount);
                    break;
                };
            };

            
            // check if number1 and number2 is greater then Zero 
            if (number1 > 0 && number2 > 0) {
                // calculate the result
                result = operate(number1, number2, "m");
                console.log("result: ", result);
                
                // Make the result in to and array 
                result = result.toString().split("").map(Number);
                console.log("result as an array: ", result);

                // use slice to insert the calculate value in the initial array and replace the calcualtion. 
                calculation.splice(startIndex, deleteCount, ...result);
                console.log("the updated calculation array: ", calculation);

            }

        }

    }


    updateDisplay();




   // repeat until no more multiplication sign is present. 
    

    
    // Do same thing but for division

    // Do same thing but for addition

    // Do same thing but for subtraction

    // Update the display with the result. 
    // updateDisplayWithResult(result);


})

// update the display element with the text from the calculation array. 
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = calculation.join("");
};

function updateDisplayWithResult(result) {
    const display = document.getElementById("display");
    display.textContent = result;
}


