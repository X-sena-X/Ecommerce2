const Products = require('./models/productsScheme');
const productsdata = require("./constant/productdata");

// here we compare the schema and data to give the input for database

const DefaultData = async()=>{
    try{
        // we do this becoz the data is added each time the app is runned 
        await Products.deleteMany({});
        // we use insert many to store many data at a time
        const storeData = await Products.insertMany(productsdata);
        
    }catch(error){
        console.log("error: "+error.message);
    }
};
module.exports = DefaultData;