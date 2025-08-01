//if condition is true, execute the code block
//if condition is false, skip the code block

if(true){
    console.log("This will always run");
}
//if condition is false, execute the code block

if(false){
    console.log("This will never run");
}

//comparison operators < > <= >= == != === !== 

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("Welcome back!");
}


const temperature = 20;
if(temperature > 25){
    console.log("It's a warm day");
}
console.log("its cold day ");


//if else statement
if(temperature > 25){
    console.log("It's a warm day");
}else{
    console.log("It's a cold day");

}   


//if else if statement
if(temperature > 25){   
    console.log("It's a warm day");     
}else if(temperature < 10){
    console.log("It's a cold day");
}
else{   
    console.log("It's a moderate day");
}   

const score=200;

if(score > 100){
    const power = 'fly';
    console.log(`You have the power to ${power}`);
}else if(score > 50){
    const power = 'run';
    console.log(`You have the power to ${power}`);
}
else{   
    const power = 'walk';
    console.log(`You have the power to ${power}`);
}   

const balance = 1500;
//if condition is true, execute the code block  

if(balance >1000) console.log("You are rich!");