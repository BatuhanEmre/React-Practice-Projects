import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {

  const [veri,setVeri] = useState("");
  const [tarih,setTarih] = useState("");

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(response => setVeri(response.data[tarih]))
    .catch(err => console.log(err))

  },[veri,tarih])

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-8 mx-auto mt-4">
          <h2 className="text-center text-white display-3 ">
            {" "}
            Türkiye COVID-19 Arama Motoru
          </h2>
          <input
            type="text"
            placeholder="Tarihi Giriniz - GG/AA/YY"
            className="form-control"
            onChange={(e) => setTarih(e.target.value)}
          />
          <table class="table table-striped text-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Test Sayısı</th>
                <th scope="col">Hasta Sayısı</th>
                <th scope="col">Vefat Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
                <th className="text-white" scope="row"> {veri === undefined ? "Veri bekleniyor" : veri.date}</th>
                <td > {veri === undefined ? "Veri bekleniyor" : veri.totalTests} </td>
                <td >{veri === undefined ? "Veri bekleniyor" : veri.patients}</td>
                <td >{veri === undefined ? "Veri bekleniyor" : veri.deaths}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
