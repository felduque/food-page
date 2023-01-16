import React from 'react'

import style from "./About.module.css";
import image from './profile.jpeg'
import { Navbar } from '../Navbar/Navbar.jsx'

export  const  About = () => {
  // const [loading, setLoading] = React.useState(false)
    return (
      <>
      <Navbar />
      <div className={style.container}>
        <img className={style.cajaImage} src={image} alt='AboutImage' />
        <div className={style.caja}>
        <h1>About Me</h1>
          <div className={style.description}>
            Hi there 👋 I'm Felipe Duque I am a software development <br/>
            technician, passionate about web development. <br/><br/>🔭 I’m currently working
            on <b> HTML, CSS, JAVASRIPT, REACTJS, <br/> EXPRESS, SEQUELIZE, POSTGRESQL</b> <br/>🌱 I’m currently learning GO, MONGODB, MYSQL <br/> 💬 Ask me about
            web development
            <p className={style.skills}>My Skills</p>
            <p className={style.tecno} align="left">  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>  </p>
          </div>
        </div>
      </div>
      </>
    )
}
