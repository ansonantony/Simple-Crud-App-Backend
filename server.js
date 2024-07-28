const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Product = require('./models/productModel')

app.use(express.json()) //json files send and recieve middleware
app.use(express.urlencoded({extended:false}));

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.get("/",(req,res)=>{
    res.send("Hello World ");
});

app.get("/users",(req,res)=>{
    res.send("Welcome to users");
});

app.get('/api/product',async (req,res) =>{
    try {
        const products = await Product.find({}); //retrieval
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
    //const product = new Product(req.body);
    // console.log(req.body);
    // res.send("Data Recieved");
});

app.get('/api/product/:id',async (req,res) =>{
    try {
        const {id} = req.params;
        const product1 = await Product.findById(id)
        res.status(200).json(product1)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
    //const product = new Product(req.body);
    // console.log(req.body);
    // res.send("Data Recieved");
});

//update product
app.put('/api/product/:id1',async (req,res)=>{
    try {
        const {id1} = req.params;
        const product2 = await Product.findByIdAndUpdate(id1,req.body)
       // const product2 = await Product.findByIdAndUpdate(id1,req.body);
        if(!product2){
            return res.status(404).json({message : "Product not found"})
        }
        const updatedProduct = await Product.findById(id1);
        res.status(200).json(updatedProduct);        
    } catch (error) {
        res.status(500).json({message :error.message})
    }
});

//delete product
app.delete('/api/product/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    if(!product){
        return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message : "Product deleted"})

});

app.post('/api/product',async (req,res) =>{
    try {
        const product = await Product.create(req.body); //saving the data

        res.status(200).json(product)
        console.log(req.body)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
    //const product = new Product(req.body);
    // console.log(req.body);
    // res.send("Data Recieved");
});

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to DB!'))
  .catch("Connection Failed!");

