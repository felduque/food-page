import React from "react";
import style from "./Loading.module.css";
export const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.loading__container}>
        <div className={style.loading__container__circle}></div>
      </div>
    </div>
  );
};
