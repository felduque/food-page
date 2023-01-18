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
  const dispatch = useDispatch();
  const [ pagination, setPagination ] = useState(6)
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
      console.log(recipes, "Estoy en Home")
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
         <button className="pagination_sum" onClick={() => setPagination(pagination + 3)}>
          {pagination >= lengthRecipe ? (
          "Ultima Pagina") : "🢂"
          }
          
          </button>
         <button className="pagination_res" onClick={() => setPagination(pagination - 3)}>
         {pagination <= 6 ? (
          "Primera Pagina") : "🢀"
          }
          </button>
        </aside>
        
        

        {/*Pie de página*/}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};
