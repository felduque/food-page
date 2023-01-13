import React from "react";
import "./home.css"
import Logo from "../Icons/Logo.js"
import { getAllRecipes } from "../../Api/Api";
import {Navbar} from "../Navbar/Navbar.jsx";
import {Search} from "../SideBar/Search.jsx";
import {Footer} from "../Footer/Footer.jsx";
import { Card } from "../Card/Card.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { About } from "../About/About";
import { CardDetail } from "../CardDetail/CardDetail";


export const Home = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    getAllRecipes().then((recipes) => {
      const id = recipes.map((recipe) => recipe.id);
      setId(id);
    });
  }, [])
  const location = useLocation();
  const [ pagination, setPagination ] = useState(12)
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
        {location.pathname === "/" ? <Card  pagination={pagination} /> : null}
        {location.pathname === "/about" ? <About /> : null}
        {location.pathname === "/recipe/:id" ? <CardDetail /> : null}
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
         <Search />
         <button className="pagination_sum" onClick={() => setPagination(pagination + 12)}>🢂</button>
         <button className="pagination_res" onClick={() => setPagination(pagination - 12)}>🢀</button>
        </aside>
        
        

        {/*Pie de página*/}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};
