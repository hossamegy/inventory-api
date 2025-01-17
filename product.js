require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const product = require('./models/product');
const jsonProduct = require('./product.json');

const start = async () => {
    try {
        console.log('Connect to mongodb');
        await connectDB();
        await product.deleteMany();
        await product.create(jsonProduct);
        console.log('Success!!!')
        process.exit(0);
    } catch (err) {
        console.log(err);
    }
}

start();


