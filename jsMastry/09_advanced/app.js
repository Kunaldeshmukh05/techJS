const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Load environment variables early - FIXED
require('dotenv').config(); // Remove the path argument or use { path: './.env' }

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        // Exit process with failure
        process.exit(1);
    }
}; 

// Connect to the database
connectDB();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes')

app.use('/api', routes)

app.listen(process.env.PORT, function(){
    console.log(`Server started at port ${process.env.PORT}`);
});






