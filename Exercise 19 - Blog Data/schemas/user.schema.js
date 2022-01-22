const { Schema, model } = require("mongoose");
const validator = require("validator");
const Post = require("./post.schema");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
  posts: [Post.schema],
});

const User = model("users", userSchema);
module.exports = User;