const mongoose = require('mongoose');

//here we are giving the format of the collection
const productsScheme = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String

});

// here we are creating the models
// the arguments are the (the name of  collection that we give in mongoose atlas, the schema name)
const Products = new mongoose.model("products",productsScheme); 

module.exports = Products;