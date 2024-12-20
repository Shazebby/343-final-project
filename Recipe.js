const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  instructions: String,
  imageURL: String,
  createdBy: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
