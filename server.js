const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Product = require('./models/productModel')

app.use(express.json())

 app.get('/',(req,res)=>{
    res.send("hello node")
 })

 app.get('/products',async(req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
 })

 app.get('/products/:id',async(req,res)=>{

    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
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

 //update
app.put('/products/:id',async (req,res)=>{
    try {
        const{id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//delete
app.delete('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message : `cannot find any product with ID ${id}`})
        }
        
    res.status(200).json(product)
    } catch (error) {
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