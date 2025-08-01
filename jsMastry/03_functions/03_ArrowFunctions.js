const user = {
username: 'john_doe',
price: 100,
welcomeMessage: function() {
    console.log(`Welcome ${this.username}, your price is ${this.price}`);   

}
};

//this only refers to the objects not to the function


//arrow function delcaration
const arrowfunction = () => {

    username= 'john_doe';
    price = 100;
    console.log(this.username); //undefined, because arrow function does not have its own this context
}


arrowfunction();


// example of arrow function

const addNumbers = (a, b) => {
    return a + b;
}   

console.log(addNumbers(5, 10)); // 15       

const addAnotherNumbers =(a,b)=>a+b;
console.log(addAnotherNumbers(5, 10)); // 15

const subtractNumbers = (a, b) => (a - b);  //we can wrap up object too

const objectExample = (a, b) => ({ sum: a + b, difference: a - b });

console.log(subtractNumbers(10, 5)); // 5
console.log(objectExample(10, 5)); // { sum: 15, difference:5 }

const object =()=>({name: 'John', age: 30});  // better lets wrap up the object in this way

console.log(object()); // { name: 'John', age: 30 }