
require("dotenv").config();   // dotenv.....

const express = require("express");  // express .........

const app = express();

const mongoose = require("mongoose"); // mongoose ...........


require("./db/config")

const cookieParser = require("cookie-parser")   // cookie-parser...........


const Products = require("./Models/Products.models");

const DefaultData = require("./defaultData");

const cors = require("cors");

const router = require("./Routes/router");



app.use(express.json());

app.use(cookieParser("")); 

app.use(cors());
app.use(router);


const port = 8080;

app.listen(port,()=>{



console.log(`listen on server ${port} `);


});


DefaultData();
