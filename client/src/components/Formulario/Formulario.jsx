import style from "./Formulario.module.css";
import { useState, useEffect } from "react";
import { validate } from "../Helpers/validate";
import {
  createRecipe,
  createAllInfo,
  getAllRecipes,
  getAllTypeDiets,
} from "../../Api/Api";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";
export const Formulario = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(true);
  const [typeDiets, setTypeDiets] = useState([]);
  const [steps, setSteps] = useState("");
  const [dishtypes, setDishtypes] = useState("");
  const [errors, setErrors] = useState({});
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

      let healt = parseInt(dataRecipe.healthscore);
      let diet = parseInt(dataRecipe.typedietId);
      createRecipe({
        name: dataRecipe.name,
        summary: dataRecipe.summary,
        image: dataRecipe.image,
        healthscore: healt,
        dishtypes: dataRecipe.dishtypes,
        steps: dataRecipe.steps,
        typedietId: diet,
      });
      navigate("/home");
    }
  };
  // Steps and dishtypes

  const handleSteps = (e) => {
    e.preventDefault();
    if (dataRecipe.steps.length === 15) return alert("El maximo son 14 pasos");
    if (steps.length >= 220) return alert("El maximo son 220 caracteres");
    if (steps.length <= 10) return alert("Ingresa mas de 10 caracteres");
    setDataRecipe({
      ...dataRecipe,
      steps: [...dataRecipe.steps, steps],
    });
    setSteps("");
  };

  const deleteOneStep = (e) => {
    let steps = dataRecipe.steps;
    if (steps.length === 0) return alert("No hay pasos para eliminar");
    let index = e.target.value;
    steps.splice(index, 1);
    setDataRecipe({
      ...dataRecipe,
      steps: steps,
    });
  };

  const deleteLastStep = (e) => {
    let steps = dataRecipe.steps;
    if (steps.length === 0) return alert("No hay pasos para eliminar");
    steps.pop();
    setDataRecipe({
      ...dataRecipe,
      steps: steps,
    });
  };

  const handleDishtypes = (e) => {
    e.preventDefault();
    if (dataRecipe.dishtypes.length === 8)
      return alert("El maximo son 7 tipos de platos");
    if (dishtypes.length >= 220) return alert("El maximo son 220 caracteres");
    if (dishtypes.length <= 10) return alert("Ingresa mas de 10 caracteres");
    setDataRecipe({
      ...dataRecipe,
      dishtypes: [...dataRecipe.dishtypes, dishtypes],
    });
    setDishtypes("");
  };

  const deleteOneDishtype = (e) => {
    let dishtypes = dataRecipe.dishtypes;
    if (dishtypes.length === 0)
      return alert("No hay tipos de platos para eliminar");
    let index = e.target.value;
    dishtypes.splice(index, 1);
    setDataRecipe({
      ...dataRecipe,
      dishtypes: dishtypes,
    });
  };

  const deleteLastDishtype = (e) => {
    let dishtypes = dataRecipe.dishtypes;
    if (dishtypes.length === 0)
      return alert("No hay tipos de platos para eliminar");
    dishtypes.pop();
    setDataRecipe({
      ...dataRecipe,
      dishtypes: dishtypes,
    });
  };
  // let recipes = res.data
  // let random = Math.floor(Math.random() * recipes.length);
  // let recipe = recipes[random]
  const createRecipeAuto = async (e) => {
    e.preventDefault();
    alert("Espere unos segundos mientras se crea la receta");
    await createAllInfo();

    setTimeout(() => {
      getAllRecipes().then((res) => {
        let recipe = res[res.length - 1];
        let id = recipe.id;
        navigate(`/recipe/${id}`);
      });
    }, 3000);
  };

  useEffect(() => {
    getAllTypeDiets().then((res) => {
      setTypeDiets(res);
    });
    if (
      dataRecipe.name.length > 5 &&
      dataRecipe.summary.length > 50 &&
      dataRecipe.healthscore.length > 0 &&
      dataRecipe.steps.length > 0 &&
      dataRecipe.dishtypes.length > 0 &&
      dataRecipe.typedietId.length > 0
    ) {
      setbuttonDisable(false);
    } else {
      setbuttonDisable(true);
    }
  }, [dataRecipe]);

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  if (!loading) return <Loading />;
  return (
    <div className={style.contend_form}>
      <Navbar />
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit}>
        <button className={style.buttonAutoRecipe} onClick={createRecipeAuto}>
          Create Auto Recipe
        </button>
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
        <div className={style.contend_btn}>
          <button type="button" onClick={handleDishtypes}>
            Add Recipe
          </button>
          <button type="button" onClick={deleteOneDishtype}>
            Delete One
          </button>
          <button type="button" onClick={deleteLastDishtype}>
            Delete Last
          </button>
        </div>
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
        <div className={style.contend_btn}>
          <button type="button" onClick={handleSteps}>
            Add Recipe
          </button>
          <button type="button" onClick={deleteOneStep}>
            Delete One
          </button>
          <button type="button" onClick={deleteLastStep}>
            Delete Last
          </button>
        </div>
        {dataRecipe.steps &&
          dataRecipe.steps.map((e, i) => {
            return (
              <li className={style.list} key={i}>
                <span className={style.count}>{i}</span> {e}
              </li>
            );
          })}
        <label htmlFor="diets">Diets | Select Id </label>
        <span className={style.dietList}>
          {typeDiets && typeDiets.map((e) => <li className={style.list} key={e.id}><span className={style.count}>  {e.id} </span> {e.name}</li>)}
        </span>
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

        <button
          className={style.submitButton}
          disabled={buttonDisable}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
