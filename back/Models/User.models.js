const mongoose = require("mongoose"); // mongoose

const validator = require("validator"); // validator

const bcrypt = require("bcryptjs"); // bcryptjs

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

// ---------------

userSchema.pre("save", async function (next) {

  if (this.isModified("password")) {

    this.password = await bcrypt.hash(this.password, 12);

    this.Apassword = await bcrypt.hash(this.Apassword, 12);
    
  }

  next();

}); // middleware to hash password

// ----------------

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
