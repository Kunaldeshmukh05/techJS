//switch case example
const addThree = function(num) {
    return num + 3;
}
// This function adds 3 to the input number
const subtractTwo = function(num) {
    return num - 2;
}       
// This function subtracts 2 from the input number      
const multiplyByFour = function(num) {
    return num * 4;
}
// This function multiplies the input number by 4

const divideByTwo = function(num) {
    return num / 2;
}
// This function divides the input number by 2
// This function checks the value of the input number and returns a corresponding function
const getOperation = function(operation) {
    switch(operation) {
        case 'add':
            return addThree;
        case 'subtract':
            return subtractTwo;
        case 'multiply':
            return multiplyByFour;
        case 'divide':
            return divideByTwo;
        default:
            return function(num) { return num; }; // returns the number unchanged if no valid operation is found
    }
}
// Example usage of the getOperation function
const operation = getOperation('add');
const result = operation(5); // This will add 3 to 5
console.log(result); // Output: 8
// Example usage of the getOperation function with different operations
const operationSubtract = getOperation('subtract');
const resultSubtract = operationSubtract(5); // This will subtract 2 from 5
console.log(resultSubtract); // Output: 3
const operationMultiply = getOperation('multiply');
const resultMultiply = operationMultiply(5); // This will multiply 5 by 4
console.log(resultMultiply); // Output: 20
// Example usage of the getOperation function with division
const operationDivide = getOperation('divide');
const resultDivide = operationDivide(8); // This will divide 8 by 2

console.log(resultDivide); // Output: 4
// Example usage of the getOperation function with an invalid operation

const operationInvalid = getOperation('invalid');
const resultInvalid = operationInvalid(5); // This will return the number unchanged 
console.log(resultInvalid); // Output: 5
// This code demonstrates how to use switch statements to select different operations based on input


const month = 5; // May
switch(month) { 
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}


//break statement example
const day = 3; // Wednesday
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//break and continue example
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        console.log("Skipping number 5");
        continue; // Skip the rest of the loop for this iteration
    }
    if(i === 8) {
        console.log("Breaking at number 8");
        break; // Exit the loop when i is 8
    }
    console.log(i); // This will print numbers 1 to 4 and 6 to 7
}
console.log("Loop ended at number 8"); // This will execute after the loop ends

