require('dotenv').config();
const express = require('express');
const app= express();


app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to the server</h1>')
});

app.listen(process.env.PORT,()=>{
    console.log(`The server is listening on the port:${process.env.PORT}`)
});


