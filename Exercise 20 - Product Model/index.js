const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productsArray = require("./products");

mongoose.connect(
  "mongodb://localhost/ecommerce",
  () => {
    console.log("mongoDB connected");
  },
  (error) => console.error(error)
);

const createProducts = async () => {
  try {
    const products = await Product.create(productsArray);
  } catch (error) {
    console.log(error.message);
  }
}
createProducts();