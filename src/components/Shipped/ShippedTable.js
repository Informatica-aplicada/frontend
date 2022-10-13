import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useNavigate, useParams, Redirect } from "react-router-dom";
import { deleted, getShipMethodList } from "../../services/ShipMethodServices";

import { Link } from "react-router-dom";

export function ShippedTable() {

  const [shipped, setShipped] = useState([ShippedModel()]);

  useEffect(() => {

    getShipMethodList().then((data) => {
      setShipped(data);
    });

  }, []);

  const navigate = useNavigate();

  function deletedShipMethod(id) {
    let response = null;
    deleted(id).then((res) => {
      if (res === 200) {
        window.location = "/shippedList";
      }
    });
  }

  function edit(id) {
    navigate("/shipped/" + id);
  }

  return (
    <React.Fragment>
      <div className="container-fluid col-md-8 mt-5">
        <Link to="/shipped">
          <button className="btn btn-primary">Agregar</button>
        </Link>
        <div className="card mt-1">
          <div className="card-body">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>ShipMethodID</th>
                  <th>Name</th>
                  <th>ShipBase</th>
                  <th>ShipRate</th>
                  <th>Accions</th>
                </tr>
              </thead>
              <tbody>
                {shipped.map((data) => (
                  <tr>
                    <td>{data.shipMethodId}</td>
                    <td>{data.name}</td>
                    <td>{data.shipBase}</td>
                    <td>{data.shipRate}</td>
                    <td>
                      <button className="button" title="edit" onClick={() => edit(data.shipMethodId)}>
                        <i class="fa-solid fa-pen-to-square"></i></button>
                      &nbsp;
                      <button className="button" title="delete" onClick={() => deletedShipMethod(data.shipMethodId)}>
                        <i class="fa-solid fa-trash"></i></button>
                      &nbsp;
                      <Link to = {`/shippedDetails/${data.shipMethodId}`}> 
                      <button className="button" title="show">
                      <i class="fa-solid fa-eye"></i></button></Link>
                  </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </React.Fragment >
  );
}
