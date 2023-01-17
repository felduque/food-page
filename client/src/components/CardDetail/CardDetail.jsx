import React from "react";
import { getRecipeId } from "../../Api/Api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CardDetail.module.css";
import { Star } from "../Icons/Star.js";
import { Link } from "react-router-dom";
import { HomeIcon } from "../Icons/Home.js";

export const CardDetail = (props) => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({});
  useEffect(() => {
    getRecipeId(id).then((recipe) => {
      setRecipes(recipe);
    });
  }, [id]);
  return (
    <>
      <div className={style.cardDetail_container}>
        <img className={style.imagen} src={recipes.image} alt={recipes.name} />
        <Link className={style.homeIco} to="/home">
            <HomeIcon width={60} height={60} />
          </Link >
        <span className={style.star}>
          <Star />
        </span>
        <p className={style.score}>{recipes.healthscore}</p>
        <div className={style.cardInfo}>
          <h1>{recipes.name}</h1>
          <h2>Resumen</h2>
          <p className={style.summary}>{recipes.summary}</p>
          <h2>Diets</h2>
          <p className={style.diet}>{recipes.TypeDiet?.name}</p>
          <h2>Dishtypes</h2>
          {recipes.dishtypes?.map((s, i) => (
            <li key={i}>
              {" "}
              <span># {i} |</span> {s}
            </li>
          ))}
          <h2>Steps</h2>
          {recipes.steps?.map((s, i) => (
            <li key={i}>
              {" "}
              <span># {i} |</span> {s}
            </li>
          ))}
          
        </div>
      </div>
    </>
  );
};
