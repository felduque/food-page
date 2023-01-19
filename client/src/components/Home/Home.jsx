import React from "react";
import "./home.css"
import Logo from "../Icons/Logo.js"
import { getAllRecipes } from "../../Api/Api";
import {Navbar} from "../Navbar/Navbar.jsx";
import {Search} from "../SideBar/Search.jsx";
import {Footer} from "../Footer/Footer.jsx";
import { Card } from "../Card/Card.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/reducers/recipeSlice";
import { Loading } from "../Loading/Loading";

export const Home = () => {
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lengthRecipe, setLengthRecipe] = useState(0);
  const [page, setPage] = useState(1);
  const totalpage = Math.ceil(lengthRecipe / 3 - 1);
  const dispatch = useDispatch();
  const [ pagination, setPagination ] = useState(6)
  console.log(totalpage)

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      const id = recipes.map((recipe) => recipe.id);
      const leng = recipes.length;
      setId(id);
      setLengthRecipe(leng);
      recipes.forEach(e => {
        dispatch(addRecipe({ 
          id: e.id,
          name: e.name,
          image: e.image,
          summary: e.summary,
          healthscore: e.healthscore,
          steps: e.steps,
          dishtypes: e.dishtypes,
        }))
      })
    });
  }, [dispatch])
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  if(loading) return (<Loading />)
  return (
    <>
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
          <div className="logo">
            <Logo width={80} height={80} />
          </div>
          <h1>Your Food</h1>
        </header>
        {/*Barra de navegación*/}
        <nav className="nav">
          <Navbar />
        </nav>

        <section key={id} className="content">
        <Card  pagination={pagination} /> 
      
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
         <Search />
          <p className="pagination_text">Pagina {page} de {totalpage}</p>
         


        {page === 1 ? (
          <button className="pagination_res">Primera Pagina</button>
        ): (
          <button className="pagination_res" onClick={() => {setPagination(pagination - 3); setPage(page - 1)}}>🢀</button>
        )}

        {page === totalpage ? (
          <button className="pagination_sum">Ultima Pagina</button>
        ): (
          <button className="pagination_sum" onClick={() => {setPagination(pagination + 3); setPage(page + 1)}}>🢂</button>
        )}


        </aside>
        
        

        {/*Pie de página*/}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};
