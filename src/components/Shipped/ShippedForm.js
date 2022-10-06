import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useParams } from "react-router-dom";

export function ShippedForm() {
  const { id } = useParams();
  const [shipped, setShipped] = useState(ShippedModel());

  useEffect(() => {
    // if (id) {
    //   Getbyid(id).then((result) => {
    //     setShipped(result[0]);
    //   });
    // }
    alert(id);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(shipped));
  };

  const handleChage = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setShipped({ ...shipped, [name]: value });
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="mt-5 card col-md-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Shipped</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  hidden
                  type="text"
                  className="form-control"
                  name="ShipMethodID"
                  onChange={handleChage}
                  placeholder=""
                  value={shipped.ShipMethodID || ""}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  onChange={handleChage}
                  placeholder=""
                  value={shipped.Name || ""}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="">ShipBase</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChage}
                  name="ShipBase"
                  placeholder=""
                  value={shipped.ShipBase || ""}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="">ShipRate</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChage}
                  name="ShipRate"
                  placeholder=""
                  value={shipped.ShipRate || ""}
                ></input>
              </div>

              <div className="form-group">
                <button type="Button" className="btn btn-primary">
                  Regresar
                </button>
                <button type="submit" className=" ml-1 btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
