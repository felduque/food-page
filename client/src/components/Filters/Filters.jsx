import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../Api/Api";
import { Link } from "react-router-dom";
import style from "./Filters.module.css";
import { HomeIcon } from "../Icons/Home";
export const Filters = () => {
  const [recipes, setRecipes] = useState([]);
  const [az, setaz] = useState(false);
  const [za, setza] = useState(false);
  const [health, sethealth] = useState(false);
  useEffect(() => {
    getAllRecipes().then((recipes) => {
      setRecipes(recipes);
    });
  }, []);

  console.log(recipes);

  const handleSort = (e) => {
    e.preventDefault();
    if(health === true && e.target.value === "desc") {
      setza(true);
      sethealth(false);
    }else if(health === true && e.target.value === "asc") {
      setaz(true);
      sethealth(false);
    }
    else if(e.target.value === "asc") {
      setaz(true);
      setza(false);
    } else if (e.target.value === "desc") {
      setza(true);
      setaz(false);
    }
  };

  const handleSortHealth = (e) => {
    e.preventDefault();
    if (az === true || za === true ) { 
      setaz(false);
      setza(false);
      sethealth(true);
    } else if (e.target.value === "healt") {
      sethealth(true);
    }
  };

  if (az === false && za === false && health === false) {
    return (
      <>
          <h3 className={style.title_filter}>Filtros</h3>
        <div className={style.container_button}>
          <Link to="/">
            <HomeIcon width={60} height={60} />
          </Link >
          <button className={style.button_filter} value="asc" onClick={handleSort}>
            A-Z
          </button>
          <button className={style.button_filter} value="desc" onClick={handleSort}>
            Z-A
          </button>
          <button className={style.button_filter} value="healt" onClick={handleSortHealth}>
            Healtscore
          </button>
        </div>
      <div className={style.recipe_container}>
        {recipes.map((recipe) => {
          return (
            <article className={style.recipe_item} key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className={style.title_recipe}>
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>              
                <img className={style.banner_img} src={recipe.image} alt={recipe.name} />
             
              </Link>
            </article>
          );
        })}
        </div>
      </>
    );
  } else if (az === true) {
    recipes.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return (
      <>
          <h3 className={style.title_filter}>Filtros</h3>
        <div className={style.container_button}>
          <button className={style.button_filter} value="asc" onClick={handleSort}>
            A-Z
          </button>
          <button className={style.button_filter} value="desc" onClick={handleSort}>
            Z-A
          </button>
          <button className={style.button_filter} value="healt" onClick={handleSortHealth}>
            Healtscore
          </button>
        </div>
      <div className={style.recipe_container}>
        {recipes.map((recipe) => {
          return (
            <article className={style.recipe_item} key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className={style.title_recipe}>
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>
                <img className={style.banner_img} src={recipe.image} alt={recipe.name} />
              </Link>
            </article>
          );
        })}
        </div>
      </>
    );
  } else if (za === true) {
    recipes.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    return (
      <>
          <h3 className={style.title_filter}>Filtros</h3>
        <div className={style.container_button}>
          <button className={style.button_filter} value="asc" onClick={handleSort}>
            A-Z
          </button>
          <button className={style.button_filter} value="desc" onClick={handleSort}>
            Z-A
          </button>
          <button className={style.button_filter} value="healt" onClick={handleSortHealth}>
            Healtscore
          </button>
        </div>
      <div className={style.recipe_container}>
        {recipes.map((recipe) => {
          return (
            <article className={style.recipe_item} key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className={style.title_recipe}>
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>
                <img className={style.banner_img} src={recipe.image} alt={recipe.name} />
              </Link>
            </article>
          );
        })}
        </div>
      </>
    );
  } else if (health === true) {
    recipes.sort((a, b) => {
      if (a.healthscore < b.healthscore) {
        return 1;
      }
      if (a.healthscore > b.healthscore) {
        return -1;
      }
      return 0;
    });
    return (
      <>
          <h3 className={style.title_filter}>Filtros</h3>
        <div className={style.container_button}>
          <button className={style.button_filter} value="asc" onClick={handleSort}>
            A-Z
          </button>
          <button className={style.button_filter} value="desc" onClick={handleSort}>
            Z-A
          </button>
          <button className={style.button_filter} value="healt" onClick={handleSortHealth}>
            Healtscore
          </button>
        </div>
      <div className={style.recipe_container}>
        {recipes.map((recipe) => {
          return (
            <article className={style.recipe_item} key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className={style.title_recipe}>
                  {recipe.name.slice(0, 26).concat("..")}
                </h3>
                <img className={style.banner_img} src={recipe.image} alt={recipe.name} />
              </Link>
            </article>
          );
        })}
        </div>
      </>
    );
  }
};
