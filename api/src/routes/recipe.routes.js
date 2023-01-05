import { Router } from "express";
import { getRecipes, getRecipeId, createRecipe, getRecipeByName } from "../controllers/recipe.controller.js";

const router = Router();

router.get('/recipes/id/:id', getRecipeId)
router.get('/recipes/name/:name', getRecipeByName)
router.get('/recipes', getRecipes)
router.post('/recipes', createRecipe)

export default router;