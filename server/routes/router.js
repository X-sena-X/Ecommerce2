const express = require("express");
const router = new express.Router();
const Products = require("../models/productsScheme");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const Products2 = require("../models/productsScheme2");

// to get the product data api from mongoose;  
router.get("/getproducts",async(req,res)=>{
    try{
        // find method to find ur data inside the database

        const productsdata = await Products.find();
        //console.log("console data"+productsdata);
        res.status(201).json(productsdata);
    }catch(e){
        console.log("error:"+e.message);
    }
})

router.get("/getproducts2",async(req,res)=>{
    try{
        // find method to find ur data inside the database
        const productsdata2 = await Products2.find();
        //console.log("console data"+productsdata);
        res.status(201).json(productsdata2);
    }catch(e){
        console.log("error:"+e.message);
    }
})

// to get individual data for products to get a dynamic url

router.get("/getproduct/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        //console.log(id);
        const individualdata = await Products.findOne({id:id}) // here the id requested and the product id that we get from the server is comapred
        
        //console.log(individualdata);
        res.status(201).json(individualdata);
    }catch(e){
        res.status(401).json(individualdata);
        console.log("error: "+e.message);
    }
});

// register data of user

router.post("/signup",async(req,res)=>{
    //console.log(req.body);
    const {name,Intcode,mobile,email,password} = req.body;
    
    if(!name || !Intcode || !mobile || !email || !password){
        res.status(422).json({error:"fill all the required data"});
        console.log("no data available");
    };

    try{
        const preuser = await USER.findOne({email:email});
        const preuser1 = await USER.findOne({mobile:mobile});
        if(preuser){
            res.status(422).json({error:"This email is already used"});
        }else if(preuser1){
            res.status(422).json({error:"This is mobile number is already used"});
        }else{
            const finaluser = new USER({
                name,Intcode,mobile,email,password
            });

            const storedata = await finaluser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        } 
    }catch(e){
        res.status(401).json({error:"wrong data json file"});
    }

})

// sign in
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(422).json({error:"fill all the data "})
    };
    try{
        // finding the email whether it is alreaady in the database
        const userlogin = await USER.findOne({email:email});
        //console.log(userlogin);
        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            console.log(isMatch);
            if(!isMatch){
                res.status(422).json({error:"wrong password"})
            }else{
                res.status(201).json({userlogin})
            }
        }
    }catch(error){
        res.status(422).json({error:"invalid details "})
    }
})


module.exports = router;
// we use this to create the routes for your api
// we use this to get data from database to ur frontend


