require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn');
const productRouter  = require('./routes/productRoute');
// connect mongodb
connectDB();

const app = express();

// routes
app.get('/hello', (req, res) => {
    res.status(200).json('hello world');
})

app.use('/api/v1/products', productRouter);


const PORT = process.env.PORT || '3000';
const HOST_NAME = '127.0.0.1';

mongoose.connection.once('open', () => {
    console.log('connect to mongoDB');
    app.listen(PORT, HOST_NAME, () => {
        console.log(`Server running on http://${HOST_NAME}:${PORT}`)
    });
});
