const mongoose = require("mongoose");
const User = require("./schemas/user.schema");
const usersArray = require("./users");

mongoose.connect("mongodb://localhost/blogPosts",
  () => {
    console.log("mongoDB connected");
  },
  (error) => console.error(error)
);

const createUsers = async () => {
  try {
    const users = await User.create(usersArray);
    console.log("Users added successfully", users);
  } catch (error) {
    console.log(error.message);
  }
}

createUsers()