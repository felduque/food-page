import { TypeDiet } from "../models/typediet.model.js";
import { Recipe } from "../models/recipe.model.js";

export const getTypeDiet = async (req, res) => {
  try {
    const typediet = await TypeDiet.findAll();
    res.json(typediet);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the type diet",
    });
  }
};

export const getDietByRecipe = async (req, res) => {

  try {
    const { id } = req.params;
    const recipe = await TypeDiet.findByPk(id, {
      include: {
        model: Recipe,
        attributes: ["name", "summary", "healthscore", "image", "steps", "dishtypes"],
      },
    });
    res.json(recipe);
  }catch(err){
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the type diet",
    });
  }
}

export const createTypeDiet = async (req, res) => {
  const { name } = req.body;
  try {
    let newDiet = await TypeDiet.create({
      name,
    });
    res.json({ message: "Type diet created successfully", data: newDiet });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong creating the type diet",
    });
  }
};
