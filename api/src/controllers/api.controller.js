// const { API_KEY } = process.env;
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
      const writeData = data.recipes.map((r) => {
        console.log(r.diets)
          return {
              name: r.title,
              image: r.image,
              summary: r.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ''),
              healthscore: r.healthScore,
              steps : r.analyzedInstructions[0].steps.length ? r.analyzedInstructions[0].steps.map((s) => s.step) : ["No steps"],
              dishtypes: r.dishTypes ? r.dishTypes : ["No dish type"],
              diets: r.diets,
          };
          
      });
      return writeData;
  } catch (err) {
      console.error(err);
  }
}

export default getRecipes;

