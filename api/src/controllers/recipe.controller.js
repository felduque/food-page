import { Recipe } from "../models/recipe.model.js";
import { Op } from "sequelize";
import getRecipes from "./api.controller.js";
import { TypeDiet } from "../models/typediet.model.js";

export const getAllRecipe = async (req, res) => {  
  try {
    const recipes = await Recipe.findAll({
      attributes: ["id", "name", "summary", "healthscore", "image", "steps", "dishtypes"],
      include: {
        model: TypeDiet,
        attributes: ["name"],
      }
    })
    res.json(recipes); 
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the recipes",
    });
  }
}

export const createRecipe = async (req, res) => {
  const { name, summary, healthscore, steps, image, dishtypes, typedietId  } =
    req.body;
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthscore,
      dishtypes,
      steps,
      image,
      typedietId,
    });
    res.json({ message: "Recipe created successfully", data: newRecipe });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong creating the recipe",
    });
  }
};

export const getRecipeByName = async (req, res) => {
  try {
    const name = req.params.name;
    if (!name) return res.status(400).json({ message: "Name is required" });

    const recipe = await Recipe.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the recipe",
    });
  }
};

export const getRecipeId = async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await Recipe.findOne({
      where: {id},
      attributes: ["id", "name", "summary", "healthscore", "image", "steps", "dishtypes"],
      include: {
        model: TypeDiet,
        attributes: ["name"],
      }
    });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the recipe",
    });
  }
};

export const createAllInfo = async (req, res) => {
  try {
    getRecipes().then(async (result) => {
      const name = result.map((r) => r.diets[0]).filter(x => typeof x === 'string').join(',');
      const findTypeName = await TypeDiet.findOne({
        where: {
          name: { [Op.iLike]: `%${name}%` } 
        },
      })
      console.log("name")
      if (!!findTypeName) {
        const id = findTypeName.id
        result.forEach(async (r) => {
          await Recipe.create({
            name: r.name,
            image: r.image,
            summary: r.summary,
            healthscore: r.healthscore,
            steps: r.steps,
            dishtypes: r.dishtypes,
            typedietId: id
          });
        });
      } else {
        const newTypeDiet = await TypeDiet.create({
          name
        })
        const id = newTypeDiet.id
        result.forEach(async (r) => {
          await Recipe.create({
            name: r.name,
            image: r.image,
            summary: r.summary,
            healthscore: r.healthscore,
            steps: r.steps,
            dishtypes: r.dishtypes,
            typedietId: id
          });
        });
      }
    });
    res.json("Creada con exito");
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the recipe",
    });
  }
};
