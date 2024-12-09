const mongo=require('mongoose')
const Schema=mongo.Schema
const Product=new Schema({
   name:String,
   description:String,
   price:Number,
   status:Boolean 
})

module.exports=mongo.model('product',Product)