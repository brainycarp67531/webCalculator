

function doTheCalculation(calculation, method){

    if (method == "*") {
        operator = "m";
    } else if (method == "/") {
        operator = "d";
    } else if (method == "+") {
        operator = "a";
    } else if (method == "-") {
        operator = "s";
    };


    // Check for multiplications via a loop over the calculation array
    for (let i = 0; i < calculation.length; i++) {

        // variables to keep track of what to replace in the initial array. Will be used when spliceing the calculation array. 
        let startIndex = 0;
        let deleteCount = 0;
        // variable to keep track of the result 
        let result = 0;

        // and store the multiplication sign in the variable operation. 
        if (calculation[i] === method) {
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
                        deleteCount = calculation.length - startIndex;
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
                result = operate(number1, number2, operator);
                console.log("result: ", result);
                
                // Make the result in to and array 
                result = result.toString().split("").map(Number);
                console.log("result as an array: ", result);

                // use slice to insert the calculate value in the initial array and replace the calculation. 
                calculation.splice(startIndex, deleteCount, ...result);
                console.log("the updated calculation array: ", calculation);

            }

        }

    }

    return calculation;
}