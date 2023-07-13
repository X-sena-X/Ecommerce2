const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    Intcode:String,
    mobile:{
        type:String,
        required:true,
        unique:true,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('not valid email address')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[
        {
            token: {
                type:String,
                required:true,
            }
        }
    ],
    carts :Array
});

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
} )
const USER = new mongoose.model("USER",userSchema);
// this happens before the password is saved. this fucntion runs before the data is stored

// after decalaring next the other operation takesplaces
module.exports = USER;

// here we are creating a module for user login credential this is the schema
