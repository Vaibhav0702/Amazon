const mongoose = require("mongoose"); // mongoose........

const validator = require("validator"); // validator.......

const bcrypt = require("bcryptjs"); // bcryptjs........

const jwt = require("jsonwebtoken"); // jsonwebtoken........

const secretKey = process.env.KEY; // KEY from .env ............


const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter Valid Email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  Address:{
    type:String,
    required:true,
  },


  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  Apassword: {
    type: String,
    required: true,
    minlength: 6,
  },


  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

  carts: Array,
  
});

// ---------------middleware to hash password.....

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);

    this.Apassword = await bcrypt.hash(this.Apassword, 12);
  }

  next();
}); // middleware to hash password............

///  Generate token................

userSchema.methods.generateAuthtokenn = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, secretKey);

    this.tokens = this.tokens.concat({ token: token });

    await this.save();

    return token;
  } catch (err) {
    console.log({ err: "err" });
  }
}; // generate token and add to database..........


// Add data to cart ....... 

userSchema.methods.addDatatoCart = async function(cart){
  try
  {
     this.carts = this.carts.concat(cart);
     await this.save();
     return this.carts;
  }
  catch(err)
  {
    console.log({err:err.message})
  }
}


// ----------------

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
