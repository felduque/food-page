import React from 'react'
import { getRecipeId } from "../../Api/Api.js"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const CardDetail = (props) => {
  const { id } = useParams()
  const [recipes, setRecipes] = useState({})
  useEffect(() => {
    getRecipeId(id).then((recipe) => {
      setRecipes(recipe)
    })
  }, [id])
  return (
    <>
          <article>
            <img src={recipes.image} alt={recipes.name} />
            <h3>{recipes.name}</h3>
            <p>{recipes.summary}</p>
            <p>{recipes.healthScore}</p>
            <h3>Steps</h3>
            {recipes.diets?.map((diet) => {
              return (
                <li key={recipes.diet}>{diet}</li>
              )
            })}
            <h3>Dishtypes</h3>
            {recipes.diets?.map((diet) => {
              return (
                <li key={recipes.diet}>{diet}</li>
              )
            })}
          </article>
    </>
  )
}
