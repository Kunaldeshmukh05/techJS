// let today = new Date();
// let date = new Date()
// console.log(date);
// console.log()
// console.log(today.toLocaleDateString());

// console.log(Date.now());

// const kunal= new Date()

// console.log(kunal.toString());

// console.log(kunal.getMonth());
// console.log(kunal.getYear());

// const abc= ("2025-01-07");

let n= 15;

function fib (n){
    if(n<=1)
        return(n);
    else
        return fib(n-1)+fib(n-2);
}
console.log(fib(n));

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("done");
    },1000);
});
promise.then((value)=>{
    console.log(value);
    });
    promise.catch((error)=>{
        console.log(error);
    });