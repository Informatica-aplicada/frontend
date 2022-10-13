import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";

import { getShipMethodList } from "../../services/ShipMethodServices";

import { Link } from "react-router-dom";

export function ShippedTable() {

  const [shipped, setShipped] = useState([ShippedModel()]);

  useEffect(() => {

            getShipMethodList().then((data) => {
              setShipped(data);
              console.log("shipped");
              console.log(shipped);
            });

  }, []);


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
                </tr>
              </thead>
              <tbody>
                {shipped.map((data) => (
                  <tr>
                    <td>{data.shipMethodId}</td>
                    <td>{data.name}</td>
                    <td>{data.shipBase}</td>
                    <td>{data.shipRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
