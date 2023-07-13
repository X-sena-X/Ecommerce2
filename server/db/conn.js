const mongoose = require("mongoose");
const DB = "mongodb+srv://senaAbhishek:1234@cluster0.ptg1sif.mongodb.net/Amazonweb?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>console.log('Database Connected')).catch((error)=>console.log('error'+error.message))

