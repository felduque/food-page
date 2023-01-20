import React, { useState, useEffect } from 'react'
import style from './MyFavorites.module.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
export const MyFavorites = () => {
  const [ recipes, setRecipes ] = useState([])


  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favorites'))
    setRecipes(local)
  }, [ ])

  if(!recipes) return (<h1>Recipes Favorite empty</h1>)
  return (
    <div className={style.container}>
      <Navbar />
      <h3 className={style.title_favorite}>My Favorites</h3>
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
      </div>
  )
}
