

const mongoose = require("mongoose");

const DB = process.env.DataBase;
 

mongoose
  .connect(DB)
  .then(() => console.log("DB is Connected"))
  .catch((err) => console.log("err", err.message));
