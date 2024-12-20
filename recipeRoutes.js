const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.status(201).json(recipe);
});

module.exports = router;
