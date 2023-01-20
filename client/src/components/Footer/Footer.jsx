import React from "react";
import { Github } from "../Icons/Github";
import style from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={style.footer_text}>
    <p> © 2023 - Todos los derechos reservados - </p>
    <a href="https://github.com/felduque" >
      <div className={style.github_footer}>
     <Github width={30} heigth={30} />
      </div>
    </a>
    </div>
  );
};