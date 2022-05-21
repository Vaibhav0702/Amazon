const express = require("express"); // express......

const router = new express.Router();

const Products = require("../Models/Products.models");

const USER = require("../Models/User.models");

const bcrypt = require("bcryptjs"); // bcryptjs.........

const authenticate = require("../Middleware/authenticate");

router.get("/getproducts", async (req, res) => {
  try {
    const productsData = await Products.find().lean().exec();

    return res.status(200).json(productsData);
  } catch (err) {
    console.log("err :", err.message);
    return res.status(500).send({ msg: err.message });
  }
});

// get data by id.......

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

//   register user data.........

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
      // check usesr is already exist or not.........
      res.status(422).json({ error: "User Already Exsist" });
    } else if (password !== Apassword) {
      // check for password............
      res.status(422).json({ error: "Enter Same Password And Apassword" });
    } // register new user.........
    else {
      const newUser = new USER({
        fname,
        email,
        mobile,
        password,
        Apassword,
      }); //generate new user.............

      // password hash process...........

      const storeData = await newUser.save(); // store new user..........

      console.log(storeData);

      res.status(201).json(storeData);
    }
  } catch (err) {}
});

// login user api.........

router.post("/login", async (req, res) => {
  const { email, password } = req.body; // get email password from front.............

  if (!email || !password) {
    res.status(400).json({ error: "Fill All data data" });
  }

  try {
    const userLogin = await USER.findOne({ email: email }); // find user details ............
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // console.log(isMatch);

      // Generate token ..................

      const token = await userLogin.generateAuthtokenn();

      // console.log(token);

      res.cookie("Amazon", token, {

        expires: new Date(Date.now() + 900000), // set cookie expire time 15min after generate.......

        httpOnly: true,
      }); //generate cookie .......

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Details" }); // if password incorrect show error...........
      } else {
        res.status(201).json({ userLogin }); // send user details to front ...............
      }
    } else {
      res.status(400).json({ error: "Invalid Details" }); // if password incorrect show error...........
    }
  } catch (err) {
    res.status(400).json({ err: "Invalid Details" });
  }
});

// adding data into cart .......................

router.post("/cart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Products.findOne({ id: id });

    console.log(cart, "Vaibhav");

    const userDetails = await USER.findOne({ _id: req.userID }); // get user details with the help of middleware .........

    // console.log(userDetails);

    if (userDetails) {

      const cartData = await userDetails.addDatatoCart(cart);

      await userDetails.save();   // save data with updated cart

      // console.log(cartData);

      res.status(201).json(userDetails);
    } else {
      res.status(401).json({ error: "User Invalid" });
    }
  } catch (err) {
    console.log({ err: err.message });
  }
});

module.exports = router;
