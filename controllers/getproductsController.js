const Product = require('../models/productModel');

const getProductsController = async (req,res) =>{
    try {
        const products = await Product.find({}); //retrieval
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

module.exports = getProductsController;