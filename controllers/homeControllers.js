// HOME CONTROLLER
const Model = require("../models/recipeModel");

module.exports = {
  working: async (req, res) => {
    try {
      res.render("home.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getRecipes: async (req, res) => {
    try {
      const data = await Model.find();
      res.render("home.ejs", { recipies: data });
    } catch (error) {
      console.log(error);
    }
  },
  createRecipe: async (req, res) => {
    const recipe = new Model({
      title: req.body.title,
      category: req.body.category,
      tags: req.body.tags,
      desc: req.body.desc,
      likes: 0,
    });
    try {
      await recipe.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
