import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { VendorModel } from "../../models/vendor.models";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getById, save, update } from "../../services/VendorServices";
import { useNavigate } from "react-router-dom";

export function VendorForm() {
  const { id } = useParams();
  const [vendor, setVendor] = useState(VendorModel());
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {

    if (location.pathname === "/vendorDetails/" + id) {
      
      setVisible(true);
      document.getElementById("save").hidden = true;
    }
    console.log(location.pathname);

    if (id) {
      getById(id).then((result) => {
        console.log(result);
        setVendor(result);
      });
    }
  }, []);


  /* -- */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(vendor));
    save(vendor);
  };

  const handleChage = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setVendor({ ...vendor, [name]: value });
  };

  function saveVendor() {
    if (id != null) {
      update(vendor);
    } else {
        vendor.businessEntityId = 0; /* --- */
      save(vendor);
    }

    navigate("/vendorList");
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <div className="mt-5 card col-md-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Vendor</h5>
            <form onSubmit={handleSubmit} id="form">
              <fieldset disabled={visible}>
                <div className="form-group">
                  <input
                    hidden
                    type="text"
                    className="form-control"
                    name="businessEntityId"
                    onChange={handleChage}
                    placeholder=""
                    value={vendor.businessEntityId || ''}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="">Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="accountNumber"
                    onChange={handleChage}
                    placeholder=""
                    value={vendor.accountNumber || ""}
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
                    value={vendor.name || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Credit Rating</label>
                  <input
                    type="checkBox"
                    className="form-control"
                    onChange={handleChage}
                    name="creditRating"
                    placeholder=""
                    value={vendor.creditRating || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Purchasing Web Service URL</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="purchasingWebServiceURL"
                    placeholder=""
                    value={vendor.purchasingWebServiceURL || ""}
                  ></input>
                </div>

                <div className="form-group">
                  <button type="submit" className=" ml-1 btn btn-primary" id="save" onClick={() => saveVendor()}>
                    Save
                  </button>
                </div>
              </fieldset>
            </form>
            <Link to="/vendorList">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
