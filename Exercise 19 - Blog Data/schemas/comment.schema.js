const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  email: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
});

const Comment = model("comments", commentSchema);
module.exports = Comment;