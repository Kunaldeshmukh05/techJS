const myArr = [0,1,2,3,4,5]; //declaration

console.log(myArr);  //access


console.log(myArr[4]); // indexing and fetching elements by the index start from 0,1,2,3 and so on 

const myNewArr = [6,7,8,9,10];

// console.log(myNewArr.push(11)); // push operation
// console.log(myNewArr)

// //pop operation 

// console.log(myNewArr.pop());

// console.log('pop',myNewArr);

//shift and unshift operations

myNewArr.unshift(9);//unshift
console.log(myNewArr);

myNewArr.shift(); // shift no need to pass argument
console.log(myNewArr)

console.log(myArr.slice(1,3));
console.log('A',myArr);

console.log(myArr.splice(1,3));

console.log('B',myArr);
const kunal = new Array(1,2,3,4,5,6,6);

console.log(typeof(kunal));

