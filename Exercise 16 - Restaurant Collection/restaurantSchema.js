const {Schema, model} = require("mongoose");

const addressSchema = new Schema({
  city: String,
  street: String,
  coordinates: [Number]
})

const restaurantSchema = new Schema({
  name: String,
  rating: Number,
  address: addressSchema,
  cuisineType: String,
  isKosher: Boolean,
  reviews: [[String, Number]]
})

module.exports = model("Restaurants", restaurantSchema);