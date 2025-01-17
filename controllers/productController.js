const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find().sort('price'); 
    res.status(201).json({ data: product, nhits: product.length });
}

const getAllProducts = async (req, res) => {
    const { name, company, price, sort, field } = req.query;
    const objectQuery = {};
    if (name) objectQuery.name = { $regex: name, $options: 'i' };
    if (company) objectQuery.company = company;
    if (price) objectQuery.price = price
    let result =  Product.find(objectQuery); 
    if (sort) {
        const sortList = sort.split(',').join(' ');
        console.log(sortList);
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }
    if (field) {
        const fieldList = field.split(',').join(' ');
        result = result.select(fieldList);
    }
    const products = await result
    res.status(200).json({ data: products, nhits: products.length });
}


module.exports = { getAllProducts, getAllProductsStatic };