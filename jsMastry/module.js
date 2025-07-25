const math = require('./03_functions')

const fs = require('fs');
console.log(math.sum(2,3)); // Output: 5

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server is running fine');
})

app.get('/sum', (req, res) => {

    const sum = math.sum(Number(a), Number(b));  
    res.json({ sum });  
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


fs.writeFile('output.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);  
//async function to read a file
fs.readFile("./contact.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Output: Hello World!
}
);


