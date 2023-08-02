require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

const Products = require('./models/productsScheme');
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");
const stripe = require('./routes/stripe');
const DefaultData2 = require("./defaultData2");

app.use(express.json());
app.use(cors());
app.use(router);
app.use(stripe);

const port = 8000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});

DefaultData2();
DefaultData();
//backend timeline 2:47:00
// we use cors becoz when sending data from server to frontend where frontend in port 3000 and backend in port 8000 we will 
// get an error known as cross origin platform. so we use cors module