// Number to String
let num = 42;
let numStr = String(num); // "42"
console.log(numStr); // Output: "42"

// String to Number
let str = "123.45";
let strNum = Number(str); // 123.45

// Boolean to String
let bool = true;
let boolStr = String(bool); // "true"

// String to Boolean
let strBool = Boolean("hello"); // true
let emptyStrBool = Boolean(""); // false

// Parse Int and Float
let intVal = parseInt("100px"); // 100
let floatVal = parseFloat("3.14abc"); // 3.14

// Date to String
let date = new Date();
let dateStr = date.toString();

// Array to String
let arr = [1, 2, 3];
let arrStr = arr.join(","); // "1,2,3"

// Object to JSON String
let obj = { name: "Alice", age: 30 };
let jsonStr = JSON.stringify(obj); // '{"name":"Alice","age":30}'

// JSON String to Object
let parsedObj = JSON.parse(jsonStr); // { name: "Alice", age: 30 }
