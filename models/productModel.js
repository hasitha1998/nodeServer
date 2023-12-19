const mongoose = require('mongoose')
//import { Timestamp } from './../node_modules/bson/src/timestamp';

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required : [true,"Please enter a product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default: 0
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false,
        }
    },
    {
        Timestamp:true
    }
)

const Product = mongoose.model('Product',productSchema);

module.exports = Product;