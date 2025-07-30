
const tinderUser ={};

tinderUser.name = "John Doe";
tinderUser.age = 30;    
tinderUser.id = "12345";
tinderUser.isLoggedIn = true;
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];
tinderUser.location = "New York";
tinderUser.email = "kunal@gmail.com";
tinderUser.designation = "Software Engineer";

console.log(tinderUser);  //Output the tinder user object

const regularUser ={
    email:"kunal@gmial.com",
    fullName: { userfullName: {firstName: "Kunal", lastName: "Deshmukh"} }, 
    age: 25,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    location: "Jalgaon",
    designation: "Software Engineer",
    greetings: function() {
        console.log("Hello" + " " + this.fullName.userfullName.firstName + " " + this.fullName.userfullName.lastName );
    }
}

console.log(regularUser); 
console.log(regularUser.greetings()); //Output the regular user object

const obj1={
    1: "one", 2: "two", 3: "three",
    4: "four", 5: "five"
}

const obj2={
    6: "six", 7: "seven", 8: "eight",   
    9: "nine", 10: "ten"}

    const obj3={...obj1, ...obj2};  //Using spread operator to merge two objects 


    console.log(obj3);
    
    const obj4= Object.assign({},obj1,obj2)//Output the merged object
    console.log(obj4);  //Using Object.assign to merge two objects
    console.log(regularUser.fullName.userfullName.firstName); //Accessing nested object

    const users= [{
        id: 1,
        name: "Kunal",
        email: "kunal@gmail.com"},
        {
        id: 2,
        name: "John",
        email: "john@gmail.com"
        },{
        id: 1,
        name: "Kunal",
        email: "kunal@gmail.com"},
        {
        id: 2,
        name: "John",
        email: "john@gmail.com"
        },
        
    ];  //Creating an array of objects

  console.log( users[1].email);  //Accessing property of an object in an array
   console.log(tinderUser);

   console.log(Object.keys(tinderUser));  //Output the keys of the tinder user object
   console.log(Object.values(tinderUser));  //Output the values of the tinder user object
    console.log(Object.entries(tinderUser));  //Output the entries of the tinder user object

    console.log(tinderUser.hasOwnProperty("name"));  //Check if the property exists in the object