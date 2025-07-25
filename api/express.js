const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');  
}
);

app.get('/about', (req, res) => {
    res.send(`Hello ${req.query.name} and you are ${req.query.age} years old! `);
}
);
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
}
);
app.get('/help', (req, res) => {
    res.send('This is the help page');
}
);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
// This code sets up a basic Express server that listens on port 3000 and responds with "Hello, World!" when the root URL is accessed.