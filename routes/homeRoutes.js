const express = require("express");
const routes = express.Router();

const homeController = require("../controllers/homeControllers");

routes.get("/", homeController.working);
routes.get("/", homeController.getRecipes);
routes.post("/newRecipe", homeController.createRecipe);

module.exports = routes;
