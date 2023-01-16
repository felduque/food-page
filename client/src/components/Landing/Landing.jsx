import React from 'react'
import { Link } from 'react-router-dom'
import style from './Landing.module.css'
export const Landing = () => {
  return (
    <div className={style.full_landing}>
        <h1 className={style.title}>Bienvenido a Food App</h1>

          <Link to="/home">
          <button className={style.button} > Ingresar</button>
          </Link>
      </div>
  )
}
