const mongoose = require("mongoose");

const UserScema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  dateRegist: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserScema);
