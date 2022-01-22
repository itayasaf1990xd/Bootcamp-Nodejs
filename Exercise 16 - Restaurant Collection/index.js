const mongoose = require("mongoose");
const Restaurants = require("./restaurantSchema");
const restaurantsArray = require("./restaurants");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (error) => console.error(error)
);

const createRestaurant = async (restaurantsArray) => {
  try {
    const restaurant = await Restaurants.create(restaurantsArray);
    console.log(restaurant);
  } catch (error) {
    console.log(error.message);
  }
}


createRestaurant(restaurantsArray)
