import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' }); 
//const mongoose = require('mongoose');
//const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// Connect to MongoDB
mongoose.connect( process.env.MONGO_URI 
).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the MERN stack backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});