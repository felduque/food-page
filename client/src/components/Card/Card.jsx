import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useSelector } from "react-redux";

export const Card = ({ pagination }) => {
  const [recipes, setRecipes] = useState([]);
  const selector = useSelector((state) => state.search);
  const selectorRecipe = useSelector((state) => state.recipe);
  
  useEffect(() => {
    setRecipes(selectorRecipe);
  }, [selectorRecipe]);


  console.log(recipes, "Estoy en el card")
  
  if (selector.length === 0) {
    return (
      <>
        {recipes.slice(0, pagination).map((recipe) => {
          return (
            <article className="recipe-item" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className="title">
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>
                <img className="banner" src={recipe.image} alt={recipe.name} />
              </Link>
            </article>
          );
        }) }
      </>
    );
  } else {
    return (
      <>
        {selector.map((recipe) => {
          return (
            <article className="recipe-item" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className="title">
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>
                <img className="banner" src={recipe.image} alt={recipe.name} />
              </Link>
            </article>
          );
        })}
      </>
    );
  }
};
