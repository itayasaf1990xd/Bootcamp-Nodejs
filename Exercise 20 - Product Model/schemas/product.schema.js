const { Schema } = require("mongoose");
const detailSchema = require("./detail.schema")

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: detailSchema
});

module.exports = productSchema;
