const Product = require('../models/productModel');

const deleteProductController = async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    if(!product){
        return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message : "Product deleted"})

}

module.exports = deleteProductController;