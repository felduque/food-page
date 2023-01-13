import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../../Api/Api.js";
import './card.css'

export const Card = ({ pagination }) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getAllRecipes().then((recipes) => {
      setRecipes(recipes);
    });
  }, []);
  return (
    <>
    {recipes.slice(0, pagination).map((recipe) => {
      return (
      <article className="recipe-item">
        <Link to={`/recipe/${recipe.id}`}>
        <h3 className="title" key={recipe.id}>{recipe.name.slice(0, 26).concat('..')}</h3>
        <img className="banner" src={recipe.image} alt={recipe.name} />
        </Link>
      </article>
      )
    })}
    </>
  );
};
