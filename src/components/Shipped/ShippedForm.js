import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { save } from "../../services/ShipMethodServices";

export function ShippedForm() {
  const { id } = useParams();
  const [shipped, setShipped] = useState(ShippedModel());

  useEffect(() => {
    // if (id) {
    //   Getbyid(id).then((result) => {
    //     setShipped(result[0]);
    //   });
    // }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(shipped));
    save(shipped);
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
                  name="shipMethodId"
                  onChange={handleChage}
                  placeholder=""
                  value={shipped.shipMethodId || ""}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChage}
                  placeholder=""
                  value={shipped.name || ""}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="">ShipBase</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChage}
                  name="shipBase"
                  placeholder=""
                  value={shipped.shipBase || ""}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="">ShipRate</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChage}
                  name="shipRate"
                  placeholder=""
                  value={shipped.shipRate || ""}
                ></input>
              </div>

              <div className="form-group">
                <Link to="/shippedList">
                  <button className="btn btn-primary">Regresar</button>
                </Link>
                <button type="submit" className=" ml-1 btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
            {JSON.stringify(shipped)}
          </div>
        </div>
      </div>
    </>
  );
}
