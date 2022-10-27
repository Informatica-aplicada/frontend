import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { EmailModel } from '../../models/email.models';
import { PersonEmail } from '../../models/PersonEmail';
import { getPersons, getEmails, save } from '../../services/EmailServices';

function ViewEmail() {

  const [visible, setVisible] = useState(true);
  const [persons, setPersons] = useState([PersonEmail()]);
  const [emails, setEmails] = useState([EmailModel()]);
  const [id, setId] = useState("");
  // const [disable, setDisable] = useState(false);
  useEffect(() => {

    getPersons().then((result) => {
      setPersons(result);
    });

  }, [],[emails]);

  const options = () => {
    return persons.map((data) => ({
      value: data.businessEntityID,
      label: data.name
    }));
  };

  const onChangePerson = (event) => {
    setId(event.value);
    getEmails(event.value).then((result) => {
      setEmails(result);
      setVisible(false);
    });
  }


  const onChangeEvent = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    [...emails][index][name] = value;
    setEmails([...emails]);
  };

  const edit = (index)=>{
    //alert(index);
    //setDisable(false);
    [...emails][index].accion = 2;
    console.log([...emails][index]);
    setEmails([...emails]);
  }


  const deleted = (id, index) => {
    
    if (id === "") {
      let dataForm = [...emails];
      dataForm.splice(index, 1);
      setEmails(dataForm);
    } else { 
    [...emails][index].accion = 3;
    console.log([...emails][index]);
    setEmails([...emails]);
    }
    //alert(index);
    //setDisable(false);

  }

  // const addNew = (index)=>{
  //   //alert(index);
  //   //setDisable(false);
  //   [...emails][index].accion = 1;
  //   console.log([...emails][index]);
  //   setEmails([...emails]);
  // }

  const addFields = (event) => {
    event.preventDefault();
    setEmails([...emails, EmailModel()]);
    console.log([...emails]);
  };

  const saveChange = () => {
    
    console.log(emails)

    save(id, emails).then((result) => {
      alert("Guardado");
    });
  }
  return (
    <React.Fragment>

      <div className="container-fluid">
        <div className=" mt-5 col-md-8 mx-auto">
          <div className="card-body">
            <div className="mt-1">
              <div className="col-md-10 mx-auto ">
                <Select onChange={onChangePerson} className="mt-3 mb-3" options={options()} />
                <hr></hr>
                <div hidden={visible}>
                <button className="btn btn-primary " title='Agregar' onClick={addFields}><i className="fa-solid fa-plus"></i> Add</button>
                  <div >

                    {emails.map((email, index) => {
                      return (
                        <div key={index} className="field mt-3">
                          <div className="input-group">
                            <input
                              className="input form-control"
                              type="email"
                              placeholder="example@example.com"
                              name="emailAddress"
                              onChange={(event) => onChangeEvent(event, index)}
                              value={email.emailAddress || ""}
                              // disabled = {email.businessEntityID !== '' || email.accion === '2'?true:false}
                            ></input>
                            {(() => {
                              if (email.businessEntityID !== "") {
                                return (
                                  <div className="input-group-btn">
                                    <button
                                      className="btn"
                                      title="Editar"
                                      onClick={(event) => edit(index)}
                                    >
                                      <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                  </div>
                                );
                              }
                            })()}
                            <div className="input-group-btn">
                              <button
                                className="btn"
                                title="Eliminar"
                                onClick={() =>
                                  deleted(email.businessEntityID, index)
                                }
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <hr></hr>
                  <div>
                    <button className="btn btn-primary " onClick={saveChange}><i className="fa-solid fa-floppy-disk"></i>  Guardar</button>&nbsp;
                    <button className="btn btn-primary " title='Cancelar'><i className="fa-solid fa-xmark"></i> Cancelar</button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewEmail;