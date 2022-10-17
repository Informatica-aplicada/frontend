import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPersonId, addPerson, updatePerson } from "../../services/PersonServices";
import { PersonModel } from "../../models/person.models";

export function PersonTable() {
  const { id } = useParams();
  const [person, setPerson] = useState(PersonModel());
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {

    if (location.pathname === "/showPerson/" + id) {
      
      setVisible(true);
      document.getElementById("save").hidden = true;
    }
    console.log(location.pathname);

    if (id) {
        getPersonId(id).then((person) => {
        setPerson(person);
      });
    }
  }, []);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    //addPerson(person);
  };

  const handleChage = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setPerson({ ...person, [name]: value });
  };

  function savePersonM() {
    if (id != null) {
     updatePerson(person);
    } else {
     person.businessEntityID=0;
     addPerson(person);
    }

    navigate("/person");
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <div className="mt-5 card col-md-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Person</h5>
            <form onSubmit={handleSubmit} id="form">
              <fieldset disabled={visible}>
                <div className="form-group">
                  <input
                    hidden
                    type="text"
                    className="form-control"
                    name="businessEntityID"
                    onChange={handleChage}
                    placeholder=""
                    value={person.businessEntityID || ''}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="">personType</label>
                  <input
                    type="text"
                    className="form-control"
                    name="personType"
                    onChange={handleChage}
                    placeholder=""
                    value={person.personType || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">nameStyle</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="nameStyle"
                    placeholder=""
                    value={person.nameStyle || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="title"
                    placeholder=""
                    value={person.title || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">firstName</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="firstName"
                    placeholder=""
                    value={person.firstName || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">middleName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="middleName"
                    onChange={handleChage}
                    placeholder=""
                    value={person.middleName || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">lastName</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="lastName"
                    placeholder=""
                    value={person.lastName || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">suffix</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="suffix"
                    placeholder=""
                    value={person.suffix || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">emailPromotion</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="emailPromotion"
                    placeholder=""
                    value={person.emailPromotion || ""}
                  ></input>
                </div>



                <div className="form-group">
                  <button type="submit" className=" ml-1 btn btn-primary" id="save" onClick={() => savePersonM()}>
                    Guardar
                  </button>
                </div>
              </fieldset>
            </form>
            <Link to="/person">
              <button className="btn btn-primary">Regresar</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
