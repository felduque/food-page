import React from 'react'
import style  from './Formulario.module.css'
import { useState } from 'react'
import { validate } from './validate'
import { createRecipe } from '../../Api/Api'

export const Formulario = () => {
  const [errors, setErrors] = useState({})
  const [ steps, setSteps] = useState("")
  const [ dishtypes, setDishtypes] = useState("")
  const [dataRecipe , setDataRecipe] = useState({
    name: '',
    summary: '',
    image: '',
    healthscore: '',
    steps: [],
    "dishtypes": [],
    typedietId: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate({
      ...dataRecipe
    }))
    console.log(typeof parse)
    if(Object.keys(errors).length === 0){ //si no hay errores
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
}
  }

  const handleSteps = (e) => {
    e.preventDefault()
    setDataRecipe({
      ...dataRecipe,
      steps: [...dataRecipe.steps, steps]
    })
    setSteps("")
  }

  const handleDishtypes = (e) => {
    setDataRecipe({
      ...dataRecipe,
      dishtypes: [...dataRecipe.dishtypes, dishtypes]
  })

  setDishtypes("")
}
  
  console.log(dataRecipe.dishtypes)



  return (
    <div className={style.contend_form}>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name
        {errors.name &&(<p className="error">{errors.name}</p>)} 
          <input type="text" name="name" id="name" value={dataRecipe.name} onChange={(e) => setDataRecipe({...dataRecipe, name: e.target.value})}/>
        </label>
        <label htmlFor="summary">Summary
        {errors.summary &&(<p className="error">{errors.summary}</p>)} 
          <input type="text" name="summary" id="summary" value={dataRecipe.summary} onChange={(e) => setDataRecipe({...dataRecipe, summary: e.target.value})}/>
        </label>
        <label htmlFor='image' >Image
          <input type="text" name="image" id="image" value={dataRecipe.image} onChange={(e) => setDataRecipe({...dataRecipe, image: e.target.value})}/>
        </label>

        <label htmlFor="healthscore">Healthscore
        {errors.healthscore &&(<p className="error">{errors.healthscore}</p>)} 
          <input type="number" name="healthscore" id="healthscore" value={dataRecipe.healthscore} onChange={(e) => setDataRecipe({...dataRecipe, healthscore: e.target.value})}/>
        </label>





        <label htmlFor="dishtypes">Dishtypes
        {errors.dishtypes &&(<p className="error">{errors.dishtypes}</p>)}
          <input type="text" name="dishtypes" id="dishtypes" value={dishtypes} onChange={(e) => setDishtypes(e.target.value)}/>
          <button type='submit' onClick={handleDishtypes}>Add</button>
          {dataRecipe.dishtypes && dataRecipe.dishtypes.map((e, i) => { return <p key = {i}>{e}</p>}) }
        </label>

        <label htmlFor="steps">Steps
        {errors.steps &&(<p className="error">{errors.steps}</p>)}
          <input type="text" name="steps" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)}/>
          <button type='submit' onClick={handleSteps}>Add</button>
          {dataRecipe.steps && dataRecipe.steps.map((e, i) => { return <p key = {i}>{e}</p>}) }
        </label>







        <label htmlFor="diets">Diets
        {errors.typedietId &&(<p className="error">{errors.typedietId}</p>)} 
          <input type="number" name="diets" id="diets" value={dataRecipe.diets} onChange={(e) => setDataRecipe({...dataRecipe, typedietId: e.target.value})}/>
        </label>
        <button type="submit">Submit</button>

      </form>

    </div>
  )
}
