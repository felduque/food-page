import React from "react";
import { getRecipeId } from "../../Api/Api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CardDetail.module.css";
import { Star } from "../Icons/Star.js";
import { Link } from "react-router-dom";
import { HomeIcon } from "../Icons/Home.js";
import { Loading } from "../Loading/Loading.jsx";
import { saveStorage } from "../Helpers/SaveStorage.js";
import { Favorite } from "../Icons/Favorite.js";
import { UnFavorite } from "../Icons/UnFavorite.js";
// import { useDispatch } from "react-redux";
// import { addFavorite } from "../../redux/reducers/favoritesSlice.js";

export const CardDetail = (props) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const { id } = useParams();
  const [recipes, setRecipes] = useState({});
  const [localStore, setLocalStore] = useState([]);
  useEffect(() => {
    getRecipeId(id).then((recipe) => {
      setRecipes(recipe);
    });
    const local = JSON.parse(localStorage.getItem("favorites"));
    setLocalStore(local);
  }, [id]);


  const addFavorite = (e) => {
    e.preventDefault();
    const favorite = {
      id: recipes.id,
      name: recipes.name,
      image: recipes.image,
    };
    setLocalStore(saveStorage(favorite));
  }


  if(loading) return (<Loading />)
  return (
    <>
      <div className={style.cardDetail_container}>
        <img className={style.imagen} src={recipes.image} alt={recipes.name} />

        {localStore && localStore.find((e) => e.id === recipes.id) ? (
          <Favorite width={60} height={60} color="443C69" className={style.favorite} onClick={addFavorite} />
        ): (
          <UnFavorite width={60} height={60} className={style.favorite} onClick={addFavorite} />
        )}

        <Link className={style.homeIco} to="/home">
            <HomeIcon width={60} height={60} />
          </Link >
          <Star width={40} height={40} className={style.star} />
        
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
