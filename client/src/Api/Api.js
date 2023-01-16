import axios from "axios";

// methods to get data from the server

export async function createRecipe (dataRecipe){
  try {
    console.log(dataRecipe);
     await axios.post("http://localhost:3002/recipes", dataRecipe);
  } catch (err) {
    console.error(err, "Error en createRecipe");
  }
}

export async function getAllRecipes() {
  try {
    const { data } = await axios.get("http://localhost:3002/recipes");
    return data;
  } catch (err) {
    console.error(err, "Error en getAllRecipes");
  }
}

export async function getRecipeId(id) {
  try {
    const { data } = await axios.get(`http://localhost:3002/recipes/id/${id}`);
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeId");
  }
}

export async function getRecipeByName(name) {
  try {
    const { data } = await axios.get(
      `http://localhost:3002/recipes/name/${name}`
    );
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeByName");
  }
}

// methods to get data typediet from the server

export async function getAllTypeDiets() {
  try {
    const { data } = await axios.get("http://localhost:3002/types");
    return data;
  } catch (err) {
    console.error(err, "Error en getAllTypeDiets");
  }
}

export async function getTypeDietId(id) {
  try {
    const { data } = await axios.get(`http://localhost:3002/types/${id}`);
    return data;
  } catch (err) {
    console.error(err, "Error en getTypeDietId");
  }
}
