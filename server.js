const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Product = require('./models/productModel')

app.use(express.json())

 app.get('/',(req,res)=>{
    res.send("hello node")
 })

 app.post('/product',async (req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
 })

mongoose.connect('mongodb+srv://hasithasanjaya123:hasitha1234@cluster0.xqmbzbd.mongodb.net/')
.then(()=>{
    console.log('Mongo DB connected.....')
    app.listen(3000,()=>{
        console.log("node api app is running on port 3000")
    })
    
}).catch
((error)=>{
console.log(error);
})