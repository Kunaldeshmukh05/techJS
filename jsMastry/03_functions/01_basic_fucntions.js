function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {//(q,b) this are the parameters of the fucntions 
    return a + b;
}


console.log(add(2,3));  // 2,3 we call arguments in this way 

function isEven(num) {
    return num % 2 === 0;
}

// Example usage:
console.log(greet('Alice'));      // Hello,       // 8
console.log(isEven(10));          // true


function sayMyName(){
    console.log(`My name is Kunal Deshmukh`);
}

sayMyName();  //Output the name () in this way we execute the functions 

 //Output the sum of two numbers

 function  addNumbers(number1,number2){
    // result = number1 + number2;
    // return result;
    // console.log(addNumbers(5,10));  //Output the sum of two numbers  // so here this is not gonna be print because function alreday retruning a value 
return number1 + number2;  //Returning the sum of two numbers 

}

const result = addNumbers(5, 10);  //Calling the function and storing the result
console.log(result);  //Output the result of the function call

console.log(addNumbers(5,10));  //Output the sum of two numbers


const myNewArray =[2,3,4,5,6,6,7]

function getarrayelement(getArray){
console.log(getArray[0]);
}

getarrayelement(myNewArray);
getarrayelement([2,3,4,5,6,6,7])