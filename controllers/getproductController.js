const Product = require('../models/productModel');

const getProductController = async (req,res) =>{
    try {
        const {id} = req.params;
        const product1 = await Product.findById(id)
        res.status(200).json(product1)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

module.exports = getProductController;