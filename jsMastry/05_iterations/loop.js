// const arr = [1,2,3,4,5]

// for(let i=0; i<=arr.length;i++){
//     console.log(i);
// }


for(let i=1;i<=10;i++){
    console.log(`outer loop value is ${i}`)
    for (let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }

}


const array = [{
    name: "Alice",
    age: 25
}, {
    name: "Bob",
    age: 30
}, {
    name: "Charlie",
    age: 35

}, {
    name: "David",
    age: 40
},
    {name: "Eve",
    age: 45}


];

array.forEach((value)=>(console.log(value.name)));


const value = array.filter((value) => value.age > 30);
console.log(value);


const books = [
    { title: "Book A", author: "Author 1", year: 2000 },
    { title: "Book B", author: "Author 2", year: 2010 },
    { title: "Book C", author: "Author 3", year: 2020 },            
    { title: "Book D", author: "Author 4", year: 2015 },
    { title: "Book E", author: "Author 5", year: 2021 },
    { title: "Book F", author: "Author 6", year: 2018 },
    { title: "Book G", author: "Author 7", year: 2019 },
    { title: "Book H", author: "Author 8", year: 2022 },
    { title: "Book I", author: "Author 9", year: 2023 },
    { title: "Book J", author: "Author 10", year: 2024 }
]

const filterBooks = books.filter((books)=>((books.year>=2015)));

console.log(filterBooks);