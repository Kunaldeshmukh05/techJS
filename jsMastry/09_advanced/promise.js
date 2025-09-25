const data = require('./data.js');
// const kunal= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 1 is completed ')
//         resolve()
//     }, 2000)

// })

// kunal.then(function(){
//     console.log("promise 1 is consumed")
// });



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task2 is completed")
//             resolve ();
        
//     },2000)
// }).then(function(){
//     console.log('async promise 2 is consumed')
// })


// //promise three

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function (){
//         resolve({username :"kunal", email : "Kunaldeshmukhgodri@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user)
// })

// //promise four


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     let error =false;
//     if(!error){
//     resolve({username: "Kunal", age: 25, email: "kunal@gmail.com"})
//     }
//     else{
//         reject("Error: Something went wrong")
//     }
//     },1000)
// })

// promiseFour.then(function(user){
// console.log(user)
// return user.username;
// })
// .then(function(username){
//     console.log("Username is: " + username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("Promise four is is either resolved or rejected or completed")
// })



// //promise five


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error= true;

//         if (!error){
//             resolve({username:"javascript",
//                 email:"javascript@gmail.com",
//                 password:"12345678"
//             })
//         }else{
//             reject("Error: Unable to fetch user data")
//         }
//     }, 4000)
// })


// //async await function

// async function consumePromiseFive(){
//    try{
//     const response  = await promiseFive;
//     console.log(response);

//    } catch(error){
//        console.log(error);
//    }
// }

// consumePromiseFive();


// async function getallusers(){

//     try{
//         const response = await fetch('https://dummy-json.mock.beeceptor.com/companies');
//     const data = await response.json();

//     console.log(data);
//     }catch(error){
//         console.log("Error fetching data: ", error);
//     }   
    
// }

// getallusers();


// fetch('https://dummy-json.mock.beeceptor.com/companies')
// .then(function(response){
//     return response.json();
// })
// .then((data)=>(console.log(data)))
// .catch((error)=>(console.log("Error fetching data: ", error)));

 
// const reso= new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve("I am resolved")
//     })
// })

// reso.then(resolve=>{
//     console.log(resolve)
// })


// const fetchData = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(data)
//     }, 2000)
// })
// .then((data) => {
//     console.log("Data received:", data);

// })
// .finally(() => {
//     console.log("Fetch data operation completed.");

// });

// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(data)
//     }, 2000)
// })
// .then((data) => {
//     console.log("Data received:", data);
//     return data.name;
// })
// .then((name)=>{
//     console.log("User name is: " + name);
// })



// function functionInnear(a,b,c,{name,age,email},...z){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(name);
//     console.log(age);
//     console.log(email);
//     console.log(z);
// }

// functionInnear(1,2,3,{name:"Kunal",age:25,email:"kunal@gmail.com"},"x","y","z");

// const arr1 = [functionInnear];
// console.log(typeof(arr1[0]));

// arr1[0](10,20,30,{name:"piyush",age:26,email:"piyush@gmail.com"},"x","y","z");



console.log(data.length);
console.log(data[0]);