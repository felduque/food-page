import React from "react";
import style from "./Formulario.module.css";
import { useState } from "react";
import { validate } from "./validate";
import { createRecipe } from "../../Api/Api";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const [errors, setErrors] = useState({});
  const [steps, setSteps] = useState("");
  const [dishtypes, setDishtypes] = useState("");
  const navigate = useNavigate();
  const [dataRecipe, setDataRecipe] = useState({
    name: "",
    summary: "",
    image: "",
    healthscore: "",
    steps: [],
    dishtypes: [],
    typedietId: "",
  });

  const handleChange = (e) => {
    setErrors(
      validate({
        ...dataRecipe,
      })
    );
    if (
      dataRecipe.name.length > 5 &&
      dataRecipe.summary.length > 50 &&
      dataRecipe.healthscore.length > 0 &&
      dataRecipe.steps.length > 0 &&
      dataRecipe.dishtypes.length > 0 &&
      dataRecipe.typedietId.length > 0
    ) {
      setErrors({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      if (dataRecipe.summary.length < 50) {
        setErrors({
          ...errors,
          summary: "Debe ingresar al menos 50 caracteres",
        });
        return;
      }
      if (dataRecipe.dishtypes.length === 0) {
        setErrors({
          ...errors,
          dishtypes: "Debe ingresar al menos un tipo de plato",
        });
        return;
      }
      if (dataRecipe.steps.length === 0) {
        setErrors({ ...errors, steps: "Debe ingresar al menos un paso" });
        return;
      }
      setErrors({});
      
      let healt = parseInt(dataRecipe.healthscore)
      let diet  = parseInt(dataRecipe.typedietId)
      createRecipe({
          name: dataRecipe.name,
          summary: dataRecipe.summary,
          image: dataRecipe.image,
          healthscore: healt,
          dishtypes: dataRecipe.dishtypes,
          steps: dataRecipe.steps,
          typedietId: diet,
        }
      )
      navigate("/home");
    }
  };

  const handleSteps = (e) => {
    e.preventDefault();
    setDataRecipe({
      ...dataRecipe,
      steps: [...dataRecipe.steps, steps],
    });
    setSteps("");
  };

  const handleDishtypes = (e) => {
    setDataRecipe({
      ...dataRecipe,
      dishtypes: [...dataRecipe.dishtypes, dishtypes],
    });

    setDishtypes("");
  };

  return (
    <div className={style.contend_form}>
      <Navbar />
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <span className={style.err}>
        {errors.name && <p className="error">{errors.name}</p>}
        </span>
        <input
          type="text"
          className={style.input}
          name="name"
          id="name"
          value={dataRecipe.name}
          onChange={(e) =>
            handleChange(setDataRecipe({ ...dataRecipe, name: e.target.value }))
          }
        />

        <hr />

        <label htmlFor="summary">Summary</label>
        <span className={style.err}>
        {errors.summary && <p className="error">{errors.summary}</p>}
        </span>
        <textarea
          maxLength={1000}
          className={style.input}
          type="text"
          name="summary"
          id="summary"
          value={dataRecipe.summary}
          onChange={(e) =>
            handleChange(
              setDataRecipe({ ...dataRecipe, summary: e.target.value })
            )
          }
        />

        <label htmlFor="image">Image | URL </label>
        <input
          className={style.input}
          type="text"
          name="image"
          id="image"
          value={dataRecipe.image}
          onChange={(e) =>
            handleChange(
              setDataRecipe({ ...dataRecipe, image: e.target.value })
            )
          }
        />

        <label htmlFor="healthscore">Healthscore | 1 - 100</label>
        <span className={style.err}>
        {errors.healthscore && <p className="error">{errors.healthscore}</p>}
        </span>
        <input
          className={style.input}
          type="number"
          name="healthscore"
          id="healthscore"
          value={dataRecipe.healthscore}
          onChange={(e) =>
            handleChange(
              setDataRecipe({ ...dataRecipe, healthscore: e.target.value })
            )
          }
        />

        <label htmlFor="dishtypes">Dishtypes</label>
        <span className={style.err}>
        {errors.dishtypes && <p className="error">{errors.dishtypes}</p>}
        </span>
        <input
          className={style.input}
          type="text"
          name="dishtypes"
          id="dishtypes"
          value={dishtypes}
          onChange={(e) => handleChange(setDishtypes(e.target.value))}
        />
        <button type="button" onClick={handleDishtypes}>
          Add
        </button>
        {dataRecipe.dishtypes &&
          dataRecipe.dishtypes.map((e, i) => {
            return (
              <li className={style.list} key={i}>
                <span className={style.count}>{i}</span> {e}
              </li>
            );
          })}

        <label htmlFor="steps">Steps</label>
        <span className={style.err}>
        {errors.steps && <p className="error">{errors.steps}</p>}
        </span>
        <input
          className={style.input}
          type="text"
          name="steps"
          id="steps"
          value={steps}
          onChange={(e) => handleChange(setSteps(e.target.value))}
        />
        <button type="button" onClick={handleSteps}>
          Add
        </button>
        {dataRecipe.steps &&
          dataRecipe.steps.map((e, i) => {
            return (
              <li className={style.list} key={i}>
                <span className={style.count}>{i}</span> {e}
              </li>
            );
          })}
        <label htmlFor="diets">Diets</label>
        <span className={style.err}>
        {errors.typedietId && <p className="error">{errors.typedietId}</p>}
        </span>
        <input
          className={style.input}
          type="number"
          name="diets"
          id="diets"
          value={dataRecipe.diets}
          onChange={(e) =>
            handleChange(
              setDataRecipe({ ...dataRecipe, typedietId: e.target.value })
            )
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
