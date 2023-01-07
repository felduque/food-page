import { Router } from "express";
import { getTypeDiet, createTypeDiet, getDietByRecipe } from "../controllers/typediet.controller.js";

const router = Router();

router.get('/typediet', getTypeDiet)
router.get('/typediet/:id', getDietByRecipe)
router.post('/typediet', createTypeDiet)


export default router;