const { API_KEY } = process.env;
import axios from "axios";

const headers = {
  "Cache-Control": "no-cache",
  Expires: 0,
  Pragma: "no-cache",
};

async function getRecipes(req, res) {
  try {
      const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=44ff1d165b1d405181967465ef30ca64`,
          { headers }
      );
      //console.log(data.recipes);
      const writeData = data.recipes.map((r) => {
          return {
              id: r.id,
              name: r.title,
              image: r.image,
              summary: r.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ''),
              healthscore: r.healthScore,
              steps: r.analyzedInstructions[0].steps.map((s) => s.step),
              dishtypes: r.dishTypes,
              typeDiet: r.diets,
          };
      });

      return writeData;
  } catch (err) {
      console.error(err);
  }
}

export default getRecipes;
// const { data } = await axios.get(
//   `https://api.spoonacular.com/recipes/random?apiKey=44ff1d165b1d405181967465ef30ca64`,
//   { headers }
// );

// export const writeData = data.recipes.map((r) => {
//   return {
//     id: r.id,
//     name: r.title,
//     image: r.image,
//     summary: r.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
//     healthscore: r.healthScore,
//     steps: r.analyzedInstructions[0].steps.map((s) => s.step),
//     dishtypes: r.dishTypes,
//     typeDiet: r.diets,
//   };
// });
