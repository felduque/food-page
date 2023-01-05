import { Router } from "express";
import { getTypeDiet } from "../controllers/typediet.controller.js";

const router = Router();

router.get('/typediet', getTypeDiet)


export default router;