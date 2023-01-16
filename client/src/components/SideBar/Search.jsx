import React from "react";
import "./sidebar.css";
import { useState } from "react";
import { getRecipeByName } from "../../Api/Api.js";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../redux/reducers/searchSlice.js";
export const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const selector = useSelector((state) => state.search);
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const searchRecipe = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    if (name) {
      getRecipeByName(name).then((result) => {
        result.forEach((e) => {
          dispatch(
            addSearch({
              id: e.id,
              name: e.name,
              image: e.image,
              summary: e.summary,
              healthscore: e.healthscore,
              steps: e.steps,
              dishtypes: e.dishtypes,
            })
          );
        });
      });
    } else {
      alert("No se ha ingresado un nombre");
    }
    setInput("");
  };

  return (
    <>
      <div className="search">
        {selector.length > 0 && (
          <a className="return_home" href="/">
            Salir de Busquedas
          </a>
        )}
        <h3 className="text_title_search">Buscador</h3>
        <form onSubmit={searchRecipe}>
          <input
            type="text"
            value={input}
            onChange={changeInput}
            name="name"
            autoComplete="off"
            id="name"
          />
          <button id="search" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
