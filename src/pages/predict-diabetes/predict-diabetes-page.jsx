import React from "react";
import FormPredict from "./components/form-predict";

function PredictDiabetesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-5 bg-white p-5 rounded-3xl max-w-6xl shadow w-full">
      <div classname= "rounded-full bg-primary/50 text-primary">Demo Machine Learning</div>
      <h1>Prediksi Diabetes</h1>
      <p>
        Isi Formulir di bawah ini untuk mendapat kan hasil prediksi apakah anda
      </p>
      <div>
        <FormPredict/>
      </div>
      <div>
        Right
      </div>
      </div>
    </div>
  );
}

export default PredictDiabetesPage;
