const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter Product Name"],
    },
    
    quantity:{
        type:Number,
        required:[true,"Please Enter Product Quantity"],
        default:0,
    },
    price:{
        type: Number,
        required:[true,"Please Enter Product Price"],

    },
    image:{
        type:String,
        required:false,
    }

},
{
    timestamps:true,
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;