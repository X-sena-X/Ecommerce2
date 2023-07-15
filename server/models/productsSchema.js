const mongoose = require('mongoose');


//here we are giving the format of the collection
const productsUrl  = new mongoose.Schema({
    url1:Object,
    url2:Object,
    url3:Object
});

const productsScheme = new mongoose.Schema({
    id:String,
    category:String,
    url:String,
    detailUrl:[productsUrl],
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String

});

// here we are creating the models
// the arguments are the (the name of  collection that we give in mongoose atlas, the schema name)
const Products2 = new mongoose.model("products",productsScheme); 

module.exports = Products2;