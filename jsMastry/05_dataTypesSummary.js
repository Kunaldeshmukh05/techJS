// JavaScript Data Types Summary

// 1. Primitive Types
let str = "Hello";        // String
let num = 42;             // Number
let bigInt = 9007199254740991n; // BigInt
let bool = true;          // Boolean
let und = undefined;      // Undefined
let nul = null;           // Null
let sym = Symbol("id");   // Symbol

// 2. Object Types
let obj = { name: "Alice" }; // Object
let arr = [1, 2, 3];         // Array (object)
let func = function() {};    // Function (object)
let date = new Date();       // Date (object)
let regex = /abc/;           // RegExp (object)

// typeof operator examples
console.log(typeof str);     // "string"
console.log(typeof num);     // "number"
console.log(typeof bigInt);  // "bigint"
console.log(typeof bool);    // "boolean"
console.log(typeof und);     // "undefined"
console.log(typeof nul);     // "object" (special case)
console.log(typeof sym);     // "symbol"
console.log(typeof obj);     // "object"
console.log(typeof arr);     // "object"
console.log(typeof func);    // "function"