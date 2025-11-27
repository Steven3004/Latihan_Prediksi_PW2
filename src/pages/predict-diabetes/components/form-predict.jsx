import { useState } from "react"
import http from "../utils/http"

function FormPredict({
  isLoading,
  setLoading,
  predictResult,
  setPredictResult
}) {
  const [form, setform] = useState({
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0,
  })

  const onHandleChange = (event) => {
    const {name, value} = event.target

    setform({
      ...form,
      [name] : value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    isLoading(true)
    try{
      const response = await http.post("/predict", form)
      const {data, meta} = response.data
      console.log(data)
    }
    catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-2 gap-2">
        <legend className="fieldset-legend">Pregnancies</legend>
        <input 
        type="number" 
        name="Pregnancies" 
        value={form.Pregnancies} 
        max={10} className="input" 
        placeholder="Pregnancies" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Glucose</legend>
        <input type="number"
         name="Glucose"
        value={form.Glucose}
        max={10} 
        className="input" 
        placeholder="Glucose" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Blood Pressure</legend>
        <input type="number" 
        name="BloodPressure" 
        value={form.BloodPressure}
        max={10} 
        className="input" 
        placeholder="Blood Pressure" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Skin Thickness</legend>
        <input type="number" 
        name="SkinThickness" 
        value={form.SkinThickness} 
        max={10} 
        className="input" 
        placeholder="Skin Thickness" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Insulin</legend>
        <input type="number" 
        name="Insulin" 
        value={form.Insulin} 
        max={10} 
        className="input" 
        placeholder="Insulin" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">BMI</legend>
        <input type="number" 
        name="BMI" 
        value={form.BMI} 
        max={10} 
        className="input" 
        placeholder="BMI" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Diabetes Pedigree Function</legend>
        <input type="number" 
        name="DiabetesPedigreeFunction" 
        value={form.DiabetesPedigreeFunction} 
        max={10} 
        className="input" 
        placeholder="Diabetes Pedigree Function" 
        onChange={onHandleChange} />
        </fieldset>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Age</legend>
        <input type="number" name="Age" value={form.Age} max={10} className="input" placeholder="Age" onChange={onHandleChange} />
        </fieldset>
        </form>

        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "sedang berfikir" : "lakukan prediksi"}
        </button>
    </div>
  )
}

export default FormPredict