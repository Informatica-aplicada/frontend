import React, { useEffect, useState } from "react";
import Select from "react-select";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { PersonEmailModel } from "../../models/personEmail.models";
import confirmAlert from "./sweetalert/Alerts";
import {
  getListPerson,
  getEmailById,
  add,
  deleted,
} from "../../services/Email.services";
export function PersonEmail() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [isvalid, setValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [personList, setPersonList] = useState([PersonEmailModel()]);
  const [userId, setUserId] = useState("");
  const [change, setChange] = useState(false);
  const types = ["success", "info", "warning", "error"];

  function toastNotify(message, type) {
    toast(message, {
      type: types[type],
      autoClose: 4000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  let object = {
    emailAddress: "",
    emailAddressID: ""
  };

  const [formFields, setFormFields] = useState([object]);

  useEffect(() => {
    getListPerson().then((data) => {
      setPersonList(data);
      console.log("Render");
    });
  }, [formFields]);

  const removeEmail = (id) => {
    Swal.fire({
      text: "Desea eliminar este registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: 'rgb(194, 27, 69)',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleted(id).then(() => {
          getEmailById(userId).then((data) => {
            setFormFields(data);
          });
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };


  const handleFormChange = (event, index) => {
    let data = [...formFields];
    const name = event.target.name;
    const value = event.target.value;
    if (validator.isEmail(value)) {
      setEmailAlert("Correcto");
      setValid(true);
    } else {
      setEmailAlert("Formata de correo incorrecto");
      setValid(false);
    }
    data[index][name] = value;
    setFormFields(data);
    setText(value);
    setChange(true);
  };

  const submit = (e) => {
    e.preventDefault();
    if (change) {
      if (isvalid) {
        add(userId, formFields).then(() => {
          getEmailById(userId).then((data) => {
            setFormFields(data);
            toastNotify("Registros agregados exitosamente", 1);
          });
        });
        console.log(formFields);
      } else {
        toastNotify("ERROR!! Verifique los datos", 3);
      }
      setChange(false);
    } else {
      toastNotify("Agregue un nuevo registro", 3);
    }

  };

  const options = () => {
    return personList.map((data) => ({
      value: data.businessEntityID,
      label: data.businessEntityID + " - " + data.firstName + " " + data.lastName,
    }));
  };

  const addFields = (event) => {
    event.preventDefault();
    if (text.length <= 0 && count > 1) {
      toastNotify("Solo se puede agregar un registro a la vez", 1);
    } else {
      setCount(count + 1);
      setFormFields([...formFields, object]);
      setText("");
    }
  };

  const handleChangeSelect = (event) => {
    const value = event.value;
    setUserId(value);
    getEmailById(value).then((data) => {
      setFormFields(data);
      setCount(1);
      setVisible(false);
    });

  };

  const test = (index) => {
    document.getElementById(index).disabled = false;
  }

  return (
    <React.Fragment>
      <div className="container-fluid mt-5 mb-5 col-md-6">
        <div className="card">
          <div className="card-body">
            <label htmlFor="inputState">
              <h6>Buscar correos de la persona</h6>
            </label>
            <Select onChange={handleChangeSelect} options={options()} />
            <div className="d-flex justify-content-center" hidden>
              <img
                alt="kirbywgun"
                hidden={!visible}
                style={{ width: "600px" }}
                src={process.env.PUBLIC_URL + "/descarga.png"}
              />
            </div>
            <div hidden={visible}>
              <button className="btn btn-pink mt-3" onClick={addFields}>
                Add More..
              </button>
              {/* <div className="alert alert-success mt-3" role="alert">
                Los registros fueron agregados!!
              </div> */}
              <form className="mt-3 mb-3" onSubmit={submit}>
                {formFields.map((form, index) => {
                  return (
                    <div key={index} className="input-group mt-2 mb-2">
                      <input hidden
                        readOnly
                        name="emailAddressID"
                        value={form.emailAddressID || ""}
                      ></input>
                      <input
                        id={index}
                        disabled={true}
                        type="text"
                        name="emailAddress"
                        className=" search-input form-control"
                        placeholder={"Nueva direccion de correo electronico..."}
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.emailAddress || ""}
                      ></input>
                      <div className="input-group-append">
                        <button onClick={() => test(index)} className="bttn btn-color" type="button">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          onClick={() => removeEmail(form.emailAddressID)}
                          className="bttn btn-color border-rigth"
                          type="button"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div> <small>{emailAlert}</small></div>

                <button className="btn btn-pink" onClick={submit}>
                  Submit
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
}
