( function( ){
    console.log("Mongodb is connected to the server");
})(); // we have to end the function with () to execute it immediately using semicolon because it is a function expression and not a function declaration

// Immediately Invoked Function Expression (IIFE) example we use this to avoid polluting the global scope and pollution of variables and 
//other things like the global scope

((Database)=>(console.log(`${Database} is connected to the server`)))('MongoDB'); // this is an arrow function expression that is immediately invoked   

//as well as we can pass parameters to the IIFE  directly into //the function expression and it will be executed immediately
// this is useful for creating private variables and functions that are not accessible from the global scope
// this is an example of IIFE with parameters
// this is useful for creating private variables and functions that are not accessible from the global scope

