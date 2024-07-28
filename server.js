const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const productRoute = require('./routes/productRoute')

//Middlewares
app.use(express.json()) //json files send and recieve middleware
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/product',productRoute);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to DB!'))
  .catch("Connection Failed!");
  
app.get("/",(req,res)=>{
    res.send("Hello World ");
});

app.get("/users",(req,res)=>{
    res.send("Welcome to users");
});


