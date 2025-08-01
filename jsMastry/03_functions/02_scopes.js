let a=20;
var b=10;
const c=30;


console.log(a,b,c);

function  one(){
    const username = 'Kunal';
console.log(a,b,c,username); //here we can access the variable username because it is in the parent scope of the function one
    function two(){
const website = 'jsMastry';
console.log(username);
    }
    //console.log(website);  cant be accessed out of the scope of the function
    two();
} //here we can access the variable username because it is in the parent scope of the function two

one();


// hoisting 

console.log(addOne(5)); // 6, calling the function before its declaration due to hoisting  its working
function addOne(num){
    return num +1;
}


console.log(addTwo(5));

function addTwo(num){
    return num + 2;
}   

 // 7, calling the function after its declaration

//addThree(5); // 8, calling the function after its declaration
 const addThree = function(num){
    return num + 3;
 }  

 console.log(addThree(5)); // 8, calling the function after its declaration