const express = require("express");

const router = new express.Router();

const Products = require("../Models/Products.models");

const USER = require("../Models/User.models");

router.get("/getproducts", async (req, res) => {
  try {
    const productsData = await Products.find().lean().exec();

    return res.status(200).json(productsData);
  } catch (err) {
    console.log("err :", err.message);
    return res.status(500).send({ msg: err.message });
  }
});

// get data by id

router.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const singleProduct = await Products.findOne({ id: id }).lean().exec();

    // console.log(singleProduct)

    return res.status(201).json(singleProduct);
  } catch (err) {
    console.log("err :", err.message);
    return res.status(400).send({ msg: err.message });
  }
});

//   register user data

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, Apassword } = req.body;

  if (!fname || !email || !mobile || !password || !Apassword) {
    res.status(422).json({ error: " * fill all data " });
    console.log("Data Not Available");
  }

  try {
    const preUser = await USER.findOne({ email: email });

    if (preUser) {
      // check usesr is already exist or not
      res.status(422).json({ error: "User Already Exsist" });
    } else if (password !== Apassword) {
      // check for password
      res.status(422).json({ error: "Enter Same Password And Apassword" });
    } // register new user
    else {
      const newUser = new USER({
        fname,
        email,
        mobile,
        password,
        Apassword,
      }); //generate new user

      // password hash process

      const storeData = await newUser.save(); // store new user

      console.log(storeData);

      res.status(201).json(storeData);
    }
  } catch (err) {}
});

module.exports = router;
