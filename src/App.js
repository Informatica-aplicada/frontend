import React, { useState } from "react";
import { getReport1 } from "../src/services/SalesServices";
import axios from "axios";
import Navbar from "../src/components/page/navbar";
import CheckBox from "./components/checkbox/Checkbox";
import CheckBox2 from "./components/checkbox/Checkbox2";
import { Table01 } from "./components/table/Table01";
import { Table02 } from "./components/table/Table02";

function App() {
  let years = [];
  let json = "";
  let tr = [];
  const [reports, setReports] = useState([]);
  const [selectOption, setSelected] = useState();

  const eventoSelect = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    setSelected(value);
    console.log(selectOption);
  };

  const boton = () => {

    
    json = JSON.stringify(years);
    if (selectOption === "1") {
      // //crear funcion
      const options = {
        method: "POST",
        withCredentials: false,
        url: "https://microservices-gateway.azurewebsites.net/api/home/report1",
        data: years,
      };

      return axios
        .request(options)
        .then((response) => {
          setReports(response.data);
          console.log(reports);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (selectOption === "2") {
      const options = {
        method: "POST",
        withCredentials: false,
        url: "https://microservices-gateway.azurewebsites.net/api/home/report2",
        data: years,
      };

      return axios
        .request(options)
        .then((response) => {
          setReports(response.data);
          console.log(reports);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      console.log("llamar services reporte 3");
      years.map((rowData) => (

        console.log("lo que viene"+rowData)
        ));

      const options = {
        method: "POST",
        withCredentials: false,
        url: "https://microservices-gateway.azurewebsites.net/api/home/report3",
        data: years,
      };

      return axios
        .request(options)
        .then((response) => {
          setReports(response.data);
          console.log(reports);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });

    }
    //end promise
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>

        <div className="row mt-1 p-3 mx-auto">
          <div className="col-md-2">
            <div className="card card-selection">
              <div className="card-body">
                <div className="mt-3">
                  <label htmlFor="inputState">
                    <h6>Seleccione un tipo de registro</h6>
                  </label>
                  <select
                    onChange={eventoSelect}
                    id="inputState"
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option value="1">Registro 1</option>
                    <option value="2">Registro 2</option>
                    <option value="3">Registro 3</option>
                  </select>
                </div>
                {selectOption === "2" ? (
                  <CheckBox2 boton={boton} years={years} />
                ) : (
                  <CheckBox boton={boton} years={years} />
                )}
              </div>
              <div className="card-footer">Footer</div>
              {json}
            </div>
          </div>

          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registros de Ventas</h5>
              </div>
              {selectOption === "3" ? (
                <Table02 tr={tr} reports={reports}  years={years} />
              ) : (
                <Table01 tr={tr} reports={reports} />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
