/*
JavaScript Object Concepts:

1. Object Literals
2. Object Properties (Keys and Values)
3. Accessing Properties (Dot and Bracket Notation)
4. Adding and Modifying Properties
5. Deleting Properties
6. Nested Objects
7. Methods (Functions as Object Properties)
8. The 'this' Keyword
9. Iterating Over Objects (for...in loop, Object.keys, Object.values, Object.entries)
10. Object Constructors
11. The 'new' Keyword
12. Prototypes and Inheritance
13. Object.create()
14. Object.assign() and Cloning Objects
15. Object.freeze() and Object.seal()
16. Destructuring Objects
17. Spread Operator with Objects
18. JSON.stringify() and JSON.parse()
19. Optional Chaining (?.)
20. Computed Property Names
*/

const kunal = {}  //Initionalization of an object

const mysym1 = Symbol("key1")
// Creating an object with properties
const jsUser = {
    name: "Kunal",  
    age: 25,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    [mysym1]:"key1",
    location:"Jalgaon",
    email: "kunaldeshmukhgodri@gmail.com",
    designation: "Software Engineer",
}

console.log(jsUser);  //Output the object

console.log(jsUser["email"]);  //Accessing property using bracket notation

console.log(jsUser[mysym1]);

console.log(typeof(jsUser[mysym1]));
 //Accessing property using dot notation

console.log(typeof(mysym1));

jsUser.greetings = function() {

    console.log("Hello" + " " + this.name); 
}  //Adding a method to the object

console.log(jsUser.greetings());  //Calling the method
//Output the object after adding the method

//Using template literals to access property

jsUser.greetingsTwo= function() {
    console.log(`Hello js user again,${this.name}`)
}

console.log(jsUser.greetingsTwo());  //Calling the second method

 jsUser.email="kunaldeshmukhgodri@gmial.com";

 console.log(jsUser.email);  //Modifying an existing property
 Object.freeze(jsUser);  //Freezing the object to prevent further modifications