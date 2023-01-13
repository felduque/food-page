import React from 'react'
import "./sidebar.css"
import { useState } from 'react'
import { getRecipeByName } from "../../Api/Api.js";
export const Search = () => {
  const [search , setSearch] = useState({})
  const [input, setInput] = useState('')

  const changeInput = (e) => {
    setInput(e.target.value);
} 

  const searchRecipe = e => {
    e.preventDefault()
    let name = e.target.name.value
    if(name){
        getRecipeByName(name).then((e) => {
          setSearch(e)
        })
    }
    setInput('')
  }
  return (
    <div className="search">
    <h3 className="text_title_search">Buscador</h3>
    <form onSubmit={searchRecipe} >
      <input 
      type="text" 
      value={input}
      onChange={changeInput}
      name="name"
      id="name" />
      <button 
      id="search" 
      type='submit' 
      >Buscar</button>
    </form>

    {/* <Card

    /> */}
    </div>
  )
}
