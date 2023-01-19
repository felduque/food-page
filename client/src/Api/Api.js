import axios from "axios";

// methods to get data from the server

export async function createRecipe (dataRecipe){
  try {
    console.log(dataRecipe.length);
     await axios.post("https://food-backend.fly.dev/recipes", dataRecipe);
  } catch (err) {
    console.error(err, "Error en createRecipe");
  }
}

export async function createAllInfo (){
  try {
     await axios.post("https://food-backend.fly.dev/api/getallinfo");
  } catch (err) {
    console.error(err, "Error en createAllInfo");
  }
}

export async function getAllRecipes() {
  try {
    const { data } = await axios.get("https://food-backend.fly.dev/recipes");
    return data;
  } catch (err) {
    console.error(err, "Error en getAllRecipes");
  }
}

export async function getRecipeId(id) {
  try {
    const { data } = await axios.get(`https://food-backend.fly.dev/recipes/id/${id}`);
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeId");
  }
}

export async function getRecipeByName(name) {
  try {
    const { data } = await axios.get(
      `https://food-backend.fly.dev/recipes/name/${name}`
    );
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeByName");
  }
}

// methods to get data typediet from the server

export async function getAllTypeDiets() {
  try {
    const { data } = await axios.get("https://food-backend.fly.dev/types");
    return data;
  } catch (err) {
    console.error(err, "Error en getAllTypeDiets");
  }
}

export async function getTypeDietId(id) {
  try {
    const { data } = await axios.get(`https://food-backend.fly.dev/types/${id}`);
    return data;
  } catch (err) {
    console.error(err, "Error en getTypeDietId");
  }
}
