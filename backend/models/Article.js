const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
require("dotenv");
var connection = mongoose.createConnection(process.env.DB_CONNECTION);
autoIncrement.initialize(connection);

const ArticleScema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  content: {
    type: String,
    required: true,
    max: 4096,
  },
  author: {
    type: String,
    required: true,
    min: 4,
    max: 24,
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

ArticleScema.plugin(autoIncrement.plugin, "Article");
module.exports = mongoose.model("Article", ArticleScema);
