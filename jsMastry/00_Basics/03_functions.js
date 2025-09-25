let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber); 
console.log(typeof valueInNumber);     

//Notes 
// 1. Number() is a function that converts a value to a number.
// 2. If the value cannot be converted to a number, it will return NaN (Not a Number).
// 3. NaN is a special value in JavaScript that represents an undefined or unrepresentable value.
// 4. You can check if a value is NaN using the isNaN() function.
// 5. The Number() function can also be used to convert strings that represent numbers, such as "123" or "3.14", into actual numbers.   
// 6. If the string contains non-numeric characters, such as letters or symbols, the Number() function will return NaN.
// 7. The Number() function can also be used to convert boolean values to numbers, where true is converted to 1 and false is converted to 0.
// 8. The Number() function can also be used to convert null to 0 and undefined to NaN.
// 9. The Number() function can also be used to convert arrays to numbers, where the array is first converted to a string and then to a number.
// 10. The Number() function can also be used to convert objects to numbers, where the object is first converted to a string and then to a number.
// 11. The Number() function can also be used to convert dates to numbers, where the date is first converted to a string and then to a number.
// 12. The Number() function can also be used to convert functions to numbers, where the function is first converted to a string and then to a number.  
// 13. The Number() function can also be used to convert regular expressions to numbers, where the regular expression is first converted to a string and then to a number.
// 14. The Number() function can also be used to convert JSON objects to numbers, where the JSON object is first converted to a string and then to a number.
// 15. The Number() function can also be used to convert XML objects to numbers, where the XML object is first converted to a string and then to a number.
// 16. The Number() function can also be used to convert HTML elements to numbers, where the HTML element is first converted to a string and then to a number.
// 17. The Number() function can also be used to convert CSS styles to numbers, where the CSS style is first converted to a string and then to a number.
//likewise number we have lot of functions to convert the data types that are we can use in js
//parseInt() => to convert string to integer
//parseFloat() => to convert string to float
//String() => to convert any data type to string
//Boolean() => to convert any data type to boolean
//toString() => to convert any data type to string
//toFixed() => to convert any data type to string with fixed decimal points
//toExponential() => to convert any data type to string with exponential notation
//toPrecision() => to convert any data type to string with precision
//toLocaleString() => to convert any data type to string with locale specific format
//

function isPrime(num){
    if(num>=1){return false;}
    
    
}

//sum function

function sum(a, b) {
    return a + b;
}


function sub(a,b){
    return a - b;   
}

module.exports = {
    sum,
    sub 
}
// The above code defines a function called sum that takes two parameters a and b, and returns their sum.

const kunal =()=>{
    console.log("I am kunal")
}

kunal();