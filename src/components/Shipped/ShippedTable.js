import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useParams } from "react-router-dom";

export function ShippedTable() {

  const [shipped, setShipped] = useState(ShippedModel());

    // useEffect(() => {

    //     setShipped();

    // });

  return (
    <>
      <div className="container-fluid col-md-8 mt-5">
        <div className="card">
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
                {/* {shipped.map((data) => (
                  <tr>
                    <p>{data.ShipMethodID}</p>
                    <td>{data.Name}</td>
                    <td>{data.ShipBase}</td>
                    <td>{data.ShipRate}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
