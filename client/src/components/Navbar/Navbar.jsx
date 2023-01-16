import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
// import { HomeIcon } from '../Icons/Home'
export const Navbar = () => {
  return (
    <nav className="nav">
          <ul>
            <li>
            <Link to="/"> <strong>Home</strong> </Link>
            </li>
            <li>
            <Link to="/about"> <strong>About</strong> </Link> 
            </li>
            <li>
            <Link to="/filters"> <strong>Filtros</strong></Link> 
            </li>
          </ul>
        </nav>
) 
}


  // <nav className={style.navbar_container}>
  //   <ul className={style.content}>
  //     <Link to="/" className={style.caja}> <strong className={style.text}>Home</strong> </Link>
  //     <Link to="/about" className={style.caja}> <strong className={style.text}>About</strong> </Link> 
  //   </ul>
  // </nav>