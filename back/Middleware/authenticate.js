const jwt = require("jsonwebtoken"); //jsonwebtoken...........

const USER = require("../Models/User.models");

const secretKey = process.env.KEY; // KEY from .env ............

const authenticate = async(req, res, next) => {
  try {
    const token = req.cookies.Amazon;

    const verifyToken = jwt.verify(token, secretKey); // verify token and secretKey..........

    console.log(verifyToken , "token");

    const rootUser = await USER.findOne({
      _id:verifyToken._id,
      "tokens.token": token,
    }); //verify token or token id......

    console.log(rootUser);

    if (!rootUser) {
      // if user not found throw error......
      throw new Error("User Not Found");
    }

    req.token = token;

    req.rootUser = rootUser;

    req.userID = rootUser._id;

  

    next();

    
  } catch (err) {
    res.status(401).send("Unauthorized User : no token provided");
    console.log(err);
  }
};


module.exports = authenticate ;