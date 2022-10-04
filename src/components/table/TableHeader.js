import React, { useState } from "react";
import axios from "axios";

function TableHeader() {

  const [id, setid] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setid(value);

  };

  const handleSubmit = () =>{

    const options = {
      method: 'GET',
      url: `https://purchase-microservices.azurewebsites.net/purchases/${id}`
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}

  return (
    <React.Fragment>
      <div className="card card mt-3 col-sm-10 col-md-8 col-lg-8 mx-auto">
        <div className="card-body ">
          <div className="d-flex">
            <h5 className="card-title title-table">Detalles</h5>
            <form onSubmit={handleSubmit} className="form-group form-inline ml-3">
              <div className="input-group">
                <input
                  type="text"
                  name="id"
                  className=" search-input form-control"
                  placeholder="Buscar..."
                  onChange={handleChange}
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-pink" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="form-row col-md-6 col-md-12">
            {/*-------- form row---------*/}
            <div className="form-row col-md-12 col-lg-6">
              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">OrderID </label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder=".PurchaseOrderID"
                  ></input>
                </small>
              </div>

              <div className="form-group  col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">Rev.Number </label>{" "}
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".RevisionNumber"
                ></input>
              </div>

              <div className="form-group  col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">Status </label>
                </small>
                <select  defaultValue={"0"}
                  className="form-control form-control-sm"
                  id="exampleFormControlSelect1"
                >
                  <option disabled selected value="0">
                    Choose Status..
                  </option>
                  <option value="1">Pending</option>
                  <option value="2">Approve</option>
                  <option value="3">Rejected</option>
                  <option value="4">Complete</option>
                </select>
              </div>
            </div>

            {/*-------- end form row---------*/}

            {/*-------- form row---------*/}
            <div className="form-row col-md-12 col-lg-6">
              <div className="form-group  col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">EmployeeID </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".EmployeeID"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">VendorID </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".VendorID"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">ShipMethodID </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".ShipMethodID"
                ></input>
              </div>
            </div>
          </div>

          {/*-------- end form row---------*/}

          <div className="form-row col-md-6 col-md-12">
            {/*-------- form row---------*/}
            <div className="form-row col-md-12 col-lg-6">
              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">OrderDate </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".OrderDate"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">ShipDate </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".ShipDate"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">SubTotal </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".SubTotal"
                ></input>
              </div>
            </div>

            {/*-------- end form row---------*/}

            {/*-------- form row---------*/}
            <div className="form-row col-md-12 col-lg-6">
              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">TaxAmt </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".TaxAmt"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  <label className="form-label">Freight </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".Freight"
                ></input>
              </div>

              <div className="form-group col-md-4 col-lg-4">
                <small>
                  {" "}
                  <label className="form-label">TotalDue </label>
                </small>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder=".TotalDue"
                ></input>
              </div>
            </div>
            <button type="button" className="btn btn-pink">
              Action
            </button>
          </div>

          {/*-------- end form row---------*/}
        </div>
      </div>
    </React.Fragment>
  );
}
export default TableHeader;
