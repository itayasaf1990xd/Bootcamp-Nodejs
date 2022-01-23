const { Schema } = require("mongoose");
const validator = require("validator");

const detailSchema = new Schema({
  description: {
    type: String,
    required: true,
    minLength: 10
  },
  price: {
    type: Number,
    required: true,
    validate: function(value) {
      return value > 0;
    }
  },
  discount: {
    type: Number,
    default: 0
  },
  phone: {
    type: String,
    validate: function(value) {
      return validator.isMobilePhone(value, 'he-IL');
    }
  },
  dataAdded: {
    type: Date,
    default: Date.now()
  }
});


module.exports = detailSchema;