import React, { useState } from "react";
import { getReport1 } from "../services/SalesServices";
import axios from "axios";
import Navbar from "./page/navbar";
import CheckBox from "./checkbox/Checkbox";
import CheckBox2 from "./checkbox/Checkbox2";
import { Table01 } from "./table/Table01";
import { Table02 } from "./table/Table02";
import "../index.css";

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
      //Create function
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
      console.log("Call services report 3");
    }
    //End promise
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
                    <h6>Select a register type</h6>
                  </label>
                  <select
                    onChange={eventoSelect}
                    id="inputState"
                    className="form-control"
                  >
                    <option selected disabled defaultValue>
                      Choose...
                    </option>
                    <option value="1">Register 1</option>
                    <option value="2">Register 2</option>
                    <option value="3">Register 3</option>
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
                <h5 className="card-title">Sales Registers</h5>
              </div>
              {selectOption === "3" ? (
                <Table02 tr={tr} reports={reports} />
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
