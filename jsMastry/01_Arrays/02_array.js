const heroes = ['Hulk', 'Iron Man', 'Spiderman'];
console.log(heroes);
const dcHeroes =['Batman','Flush','Wonder Women'];
console.log(dcHeroes);

heroes.push(dcHeroes);//Array push operations

console.log(heroes)

console.log(heroes[3][1]) // Accessing nested array elements

console.log(heroes.length); // Length of the array
console.log(heroes[0].length); // Length of the first element in the array  

const kunal= [...heroes, ...dcHeroes]; // Spread operator to combine arrays
console.log('kunal',kunal);

const anotherArray = [1,2,3,4,5,[6,7,8,9,[10,11]],73, 93]; // Nested array

const useArray = anotherArray.flat(Infinity); // Flattening the nested array
console.log(useArray);

//concatenation of arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2); // Using concat method
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

/*
Most important JavaScript array methods and concepts for interviews:

// Creation
let arr = [1, 2, 3];

// Access
arr[0]; // First element

// Length
arr.length;

// Adding/Removing
arr.push(4);      // Add to end
arr.pop();        // Remove from end
arr.unshift(0);   // Add to start
arr.shift();      // Remove from start

// Iteration
arr.forEach((item, idx) => { /* ... */ //});
for (let item of arr) { /* ... */ }
for (let idx in arr) { /* ... */ }

// Searching
arr.indexOf(2);   // Index of value
arr.lastIndexOf(2);
arr.includes(2);  // Boolean

// Finding
arr.find(x => x > 1);
arr.findIndex(x => x > 1);

// Filtering/Mapping
arr.filter(x => x > 1);
arr.map(x => x * 2);

// Sorting
arr.sort((a, b) => a - b);
arr.reverse();

// Slicing/Splicing
arr.slice(1, 3);      // Returns new array
arr.splice(1, 2);     // Removes/replaces/adds in place

// Reducing
arr.reduce((acc, curr) => acc + curr, 0);

// Joining/Splitting
arr.join(',');        // String
'1,2,3'.split(',');   // Array

// Copying
let copy = arr.slice();
let copy2 = [...arr];

// Flattening
arr.flat();
arr.flat(Infinity);

// Concatenation
arr.concat([4, 5]);
[...arr, 4, 5];

// Checking type
Array.isArray(arr);

// Destructuring
let [first, ...rest] = arr;

// Other
arr.every(x => x > 0);
arr.some(x => x > 0);
arr.fill(0);          // Fill with value
arr.at(-1);           // Last element

// Remove duplicates
[...new Set(arr)];

// Multidimensional arrays
let matrix = [[1,2],[3,4]];
matrix[0][1]; // Access

// Important concepts:
// - Mutability vs immutability
// - Shallow vs deep copy
// - Array-like objects (arguments, NodeList)
// - High-order functions (map, filter, reduce)
// - Performance implications (push/pop vs shift/unshift)
// - ES6 features (spread, destructuring)

// Number to String
let num = 42;
let numStr = String(num); // "42"

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
