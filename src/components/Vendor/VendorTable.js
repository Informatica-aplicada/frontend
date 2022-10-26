import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { VendorModel } from "../../models/vendor.models";
import { useNavigate, Link } from "react-router-dom";
import { deleted, getVendorList } from "../../services/VendorServices";

export function VendorTable() {

  const [vendor, setVendor] = useState([VendorModel()]);

  useEffect(() => {
    getVendorList().then((data) => {
    setVendor(data);
    });

  }, [vendor]);

  const navigate = useNavigate();

  //Cascade --delete--
  function deletedVendor(id) {
    deleted(id);
  }

  //
  function edit(id) {
    navigate("/vendor/" + id);
  }

  return (
    <React.Fragment>
      <div className="container-fluid col-md-8 mt-5">
        <Link to="/vendor">
          <button className="btn btn-primary">Add</button>
        </Link>
        <div className="card mt-1">
          <div className="card-body">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>BusinessEntityID</th>
                  <th>AccountNumber</th>
                  <th>Name</th>
                  <th>CreditRating</th>
                  <th>PurchasingWebServiceURL</th>
                  <th>Accions</th>
                </tr>
              </thead>
              <tbody>
                {vendor.map((data, index) => (
                  <tr  key={index}>
                    <td>{data.businessEntityId}</td>
                    <td>{data.accountNumber}</td>
                    <td>{data.name}</td>
                    <td>{data.creditRating}</td>
                    <td>{data.purchasingWebServiceURL}</td>
                    <td>
                      <button
                        className="button btn-ligtpurple"
                        title="edit"
                        onClick={() => edit(data.businessEntityId)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="button btn-red"
                        title="delete"
                        onClick={() => deletedVendor(data.businessEntityId)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>

                      <Link to={`/VendorDetails/${data.businessEntityId}`}>
                        <button className="button btn-blue" title="show">
                          <i className="fa-solid fa-eye"></i>
                        </button>
                      </Link>
                    </td>
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
