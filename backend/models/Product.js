const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
require("dotenv");
var connection = mongoose.createConnection(process.env.DB_CONNECTION);
autoIncrement.initialize(connection);

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(autoIncrement.plugin, "Product");
module.exports = mongoose.model("Product", ProductSchema);
