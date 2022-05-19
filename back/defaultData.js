const Products = require("./Models/Products.models");

const productData = require("./Constant/Products");

const DefaultData = async () => {
  try {
    
    await Products.deleteMany({});

    const storeData = await Products.insertMany(productData);

    console.log(storeData);
    
  } catch (err) {
    console.log("err : " + err.message);
  }
};

module.exports = DefaultData;
