const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Must provide product name!"],
        maxlengh: [35, "The maximum number of characters allowed is 35"],
        trim: true
    },
    price: {
        type: Number,
        mix:1000000,
        min:5,
        require: true
    },
    rate: {
        type: Number,
        max: 7,
        min:0,
        default: 0,
    },
    campany: {
        type: String,
        enum: {
            values: ['hp', 'dell', 'msi', 'asus', 'lenovo'],
          //  message: "{VALUES} is not supported!"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('product', productSchema);
