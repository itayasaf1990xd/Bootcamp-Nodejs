const { Schema, model } = require("mongoose");
const Comment = require("./comment.schema");


const postSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  comments: [Comment.schema],
  likes: Number,
});

const Post = model("posts", postSchema);
module.exports = Post