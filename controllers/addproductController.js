const Product = require('../models/productModel');

const addProductController = async (req,res) =>{
    try {
        const product = await Product.create(req.body); //saving the data

        res.status(200).json(product)
        console.log(req.body)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
  
}
module.exports = addProductController;