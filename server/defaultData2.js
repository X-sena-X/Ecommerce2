const Products2 = require('./models/productsScheme2');
const productsdata2 = require("./constant/productData2");

// here we compare the schema and data to give the input for database

const DefaultData2 = async()=>{
    try{
        // we do this becoz the data is added each time the app is runned 
        await Products2.deleteMany({});
        // we use insert many to store many data at a time
        const storeData = await Products2.insertMany(productsdata2);
        
    }catch(error){
        console.log("error: "+error.message);
    }
};
module.exports = DefaultData2;