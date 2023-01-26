const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  tags: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  author: {
    required: false,
    type: String,
  },
  likes: {
    required: true,
    type: Number,
  },
});
module.exports = mongoose.model("reci", recipeSchema);
