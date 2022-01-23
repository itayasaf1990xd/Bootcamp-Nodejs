const mongoose = require('mongoose');
const Product = require("../models/product.model");
const productsArray = require("../test/product.test");

mongoose.connect("mongodb://localhost/generalMotors", () => {
    console.log("mongoDB connected");
    createProducts();
  },
  (error) => console.error(error)
);

const createProducts = async () => {
  try {
    const products = await Product.create(productsArray);
  } catch (err) {
    console.log(err.message);
  }
}
