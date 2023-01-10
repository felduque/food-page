import { Router } from "express";
import { getAllRecipe, getRecipeId, createRecipe, getRecipeByName, createAllInfo } from "../controllers/recipe.controller.js";
// const { GET_ALL_API_INFO } = process.env;

const router = Router();

router.get('/recipes/id/:id', getRecipeId)
router.get('/recipes/name/:name', getRecipeByName)
router.post(`/api/getallinfo`, createAllInfo) 
router.get('/recipes', getAllRecipe)
router.post('/recipes', createRecipe)

export default router;