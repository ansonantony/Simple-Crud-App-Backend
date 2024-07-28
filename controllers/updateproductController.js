const Product = require('../models/productModel');

const updateProductController = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message : "Product not found"})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);        
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

module.exports = updateProductController;