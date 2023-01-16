import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
// import { HomeIcon } from '../Icons/Home'
export const Navbar = () => {
  return (
    <nav className="nav">
          <ul>
            <li>
            <Link to="/home"> <strong>Home</strong> </Link>
            </li>
            <li>
            <Link to="/about"> <strong>About</strong> </Link> 
            </li>
            <li>
            <Link to="/filters"> <strong>Filtros</strong></Link> 
            </li>
            <li>
            <Link to="/form"> <strong>Create Recipe</strong></Link> 
            </li>
          </ul>
        </nav>
) 
}