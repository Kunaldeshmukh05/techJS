const arr =[1,2,3,4,5];
//filter always returns 
const ans = arr.filter((num)=>(num>2));

console.log(ans)


//for of
for (const num of arr) {
    console.log(num);
}   


// for each
arr.forEach((num) => {
    console.log(num);
});

// for in
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// difference between for in and for of
// for in is used for objects and arrays, iterates over keys
// for of is used for arrays, iterates over values
// for in example
const person = {name: "John", age: 30, city: "New York"};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}   
// for of example
const numbers = [10, 20, 30, 40];
for (const number of numbers) {
    console.log(number);
}   
// for loop example
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}       
// while loop example
let count = 0;
while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

// do while loop example
let index = 0;
do {
    console.log(`Index is ${index}`);
    index++;
}while (index < 5);

// nested loops example
const matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}] is ${matrix[i][j]}`);
    }
}
// filter example
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersArray.filter(num => num % 2 === 0);  
console.log("Even numbers:", evenNumbers);  

// map example
const squaredNumbers = numbersArray.map(num => num * num);  
console.log("Squared numbers:", squaredNumbers);

// reduce example
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);
// find example
const firstEven = numbersArray.find(num => num % 2 === 0);  
console.log("First even number:", firstEven);
// some example
const hasEven = numbersArray.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);
// every example

const allEven = numbersArray.every(num => num % 2 === 0);
console.log("All numbers are even:", allEven);

//map is used to transform each element in an array
const doubledNumbers = numbersArray.map(num => num * 2);

//lets learn theroy about the code we did
//filter is used to create a new array with elements that pass a test
// it does not modify the original array
// it returns a new array with the elements that pass the test  
