import { TypeDiet } from '../models/typediet.model.js';

export const getTypeDiet = async (req, res) => {
  try {
    const typediet = await TypeDiet.findAll();
    res.json(typediet);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something goes wrong retrieving the type diet",
    });
  }
}