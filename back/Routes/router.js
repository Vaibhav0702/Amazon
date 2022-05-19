const express = require("express");

const router = new express.Router();

const Products = require("../Models/Products.models");



router.get("/getproducts" , async(req,res) => {


    try
    {
        const productsData = await Products.find().lean().exec();
        
       return res.status(200).send(json(productsData))
    }
    catch(err)
    {
        console.log("err :" , err.message);
        return res.status(500).send({ msg : err.message});
      
    }
})





module.exports = router;
