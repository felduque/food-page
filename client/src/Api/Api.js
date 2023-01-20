import axios from "axios";

// methods to get data from the server

export async function createRecipe (dataRecipe){
  try {
<<<<<<< HEAD
     await axios.post("http://localhost:3001/recipes", dataRecipe);
=======
    console.log(dataRecipe.length);
     await axios.post("https://food-app.fly.dev/recipes", dataRecipe);
>>>>>>> 71e1c781978184c02c358a68899123810077644d
  } catch (err) {
    console.error(err, "Error en createRecipe");
  }
}

export async function createAllInfo (){
  try {
<<<<<<< HEAD
     await axios.post("http://localhost:3001/api/getallinfo");
=======
     await axios.post("https://food-app.fly.dev/api/getallinfo");
>>>>>>> 71e1c781978184c02c358a68899123810077644d
  } catch (err) {
    console.error(err, "Error en createAllInfo");
  }
}

export async function getAllRecipes() {
  try {
<<<<<<< HEAD
    const { data } = await axios.get("http://localhost:3001/recipes");
=======
    const { data } = await axios.get("https://food-app.fly.dev/recipes");
>>>>>>> 71e1c781978184c02c358a68899123810077644d
    return data;
  } catch (err) {
    console.error(err, "Error en getAllRecipes");
  }
}

export async function getRecipeId(id) {
  try {
<<<<<<< HEAD
    const { data } = await axios.get(`http://localhost:3001/recipes/id/${id}`);
=======
    const { data } = await axios.get(`https://food-app.fly.dev/recipes/id/${id}`);
>>>>>>> 71e1c781978184c02c358a68899123810077644d
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeId");
  }
}

export async function getRecipeByName(name) {
  try {
    const { data } = await axios.get(
<<<<<<< HEAD
      `http://localhost:3001/recipes/name/${name}`
=======
      `https://food-app.fly.dev/recipes/name/${name}`
>>>>>>> 71e1c781978184c02c358a68899123810077644d
    );
    return data;
  } catch (err) {
    console.error(err, "Error en getRecipeByName");
  }
}

// methods to get data typediet from the server

export async function getAllTypeDiets() {
  try {
<<<<<<< HEAD
    const { data } = await axios.get("http://localhost:3001/typediet");
=======
    const { data } = await axios.get("https://food-app.fly.dev/typediet");
>>>>>>> 71e1c781978184c02c358a68899123810077644d
    return data;
  } catch (err) {
    console.error(err, "Error en getAllTypeDiets");
  }
}

export async function getTypeDietId(id) {
  try {
<<<<<<< HEAD
    const { data } = await axios.get(`http://localhost:3001/typediet/${id}`);
=======
    const { data } = await axios.get(`https://food-app.fly.dev/typediet/${id}`);
>>>>>>> 71e1c781978184c02c358a68899123810077644d
    return data;
  } catch (err) {
    console.error(err, "Error en getTypeDietId");
  }
}
