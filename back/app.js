
require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");


require("./db/config")

const Products = require("./Models/Products.models");

const DefaultData = require("./defaultData");

const cors = require("cors");

const router = require("./Routes/router");


app.use(express.json());

app.use(cors());

app.use(router);


const port = 8080;

app.listen(port,()=>{



console.log(`listen on server ${port} `);


});


DefaultData();
