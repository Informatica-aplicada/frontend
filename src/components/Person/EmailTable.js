import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getListEmail, getForIdEmail, saveEmail, updateEmail, deletedEmail } from "../../services/EmailPersonServices";
import { EmailModel } from "../../models/email";
import { AddressModel } from "../../models/address";
import Select from 'react-select';
import Swal from 'sweetalert2';
import '../../components/design/style.css'


export function EmailTable() {

  const [email, setEmail] = useState([EmailModel()]);
  const [address, setAddress] = useState([AddressModel()]);
  const [emailPerson, setEmailPerson] = useState([AddressModel()]);
  const [cloneAddress, setCloneAddress] = useState([AddressModel()]);
  const [boolDelete, setBoolDelete] = useState(false);
  const [boolAdd, setBoolAdd] = useState(false);
  const [intDelete, setIntDelete] = useState(0);
  const [intUpdate, setIntUpdate] = useState(0);
  const [intSeletec, setIntSeletec] = useState(0);
  const [boolUpdate, setBoolUpdate] = useState(false);

  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const input = [...val, []]
    setVal(input)
    setBoolAdd(true)
  }

  const handleChangeNewInput = (dato, i) => {
    const inpudato = [...val]
    console.log("handleChangeButton: " + dato.target.value)
    inpudato[i] = dato.target.value;
    setVal(inpudato)
  }


  const handleDelete = (i) => {
    const deleteVal = [...val]
    deleteVal.splice(i)
    setVal(deleteVal)
    setBoolAdd(false)
  }

  useEffect(() => {

    getListEmail().then((data) => {
      setEmail(data);
      console.log(data)
      document.getElementById("input_id").style.display = "none";
      document.getElementById("div_btn").style.display = "none";
      document.getElementById("div_btn2").style.display = "none";
    });

  }, []);

  const options = () => {
    return email.map((data) => ({
      value: data.businessEntityID,
      label: data.firstName + " " + data.lastName,
    }));
  };

  const navigate = useNavigate();

  const [selected, setSelected] = useState(options()[0].value);

  const handleChange = (event) => {
    console.log("id: ",event.value);
    setSelected(event.value);
    setIntSeletec(event.value)
    emailPerson.businessEntityID = event.value;
    getForIdEmail(event.value).then((data) => {
      setAddress(data);
      setCloneAddress(data);
    });

    document.getElementById("div_btn").style.display = "";
      document.getElementById("div_btn2").style.display = "";
  };

  const reloadChange = (i)=>{
    getForIdEmail(i).then((data)=>{
      setAddress(data)
      console.log(data)
    });
  };

  console.log("prueba", cloneAddress)

  const handleDeleteInputEmail = (i) => {

    Swal.fire({
      title: "¿Deseas eliminar el correo "+address[i].emailAddress+" ?",
      text: "No puedes revertir esta opción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Elimado!",
          "Your changes have been canceled.",
          "success");
        const deleteVal = [...address]
        setIntDelete(address[i].emailAddressID)
        console.log("intDelete: ", address[i].emailAddressID)
        deleteVal.splice(i)
        setAddress(deleteVal)
        setBoolDelete(true)
      }
    });
  }

  const handleChangeNewInputEmail = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name: ", name, " -value: ", value)
    setEmailPerson({ ...emailPerson, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(emailPerson));
    saveEmail(emailPerson);
  };


  const saveFinishEmailPerson = (event) => {
    console.log(emailPerson.businessEntityID)
    event.preventDefault()

    if (boolAdd === true) {
      console.log("entro a guardar")
      saveEmail(emailPerson)
    }
    if (boolDelete === true) {
      console.log("entro a eliminar: ", intDelete)
      deleteEmail(intDelete)
    }
    if (boolUpdate === true) {
      console.log("entro a actualizar: ", intDelete)
      updateEmail(address[intUpdate])
    }
    reloadChange(intSeletec)

    setCloneAddress(address)
    handleDelete(0)
    
    Swal.fire('Cambios guardados')
    setAddress(cloneAddress)

  }

  const deleteEmail = (id) => {

    deletedEmail(id);
  }

  const confirmCancel = (event) => {
    console.log("clone: ", cloneAddress)
    event.preventDefault()
    Swal.fire({
      title: '¿Deseas cancelar las opciones?',
      text: "No puedes revertir esta opción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Cancelado!",
          "Your changes have been canceled.",
          "success");
        handleDelete(0)
        setAddress(cloneAddress);
        setIntDelete(0)
        setIntUpdate(0)
        setBoolAdd(false)
        setBoolDelete(false)
        setBoolUpdate(false)
      }
    });
  }


  const inputHandler = (event, idx) => {
    let data = [...address];
    const name = event.target.name;
    const value = event.target.value;
    data[idx][name] = value;
    console.log(data[idx])
    setAddress(data);
  }

  const editInput = (id) => {
    const newList = address.map((data, index) => {
      console.log(index, id)
      setBoolUpdate(true)
      setIntUpdate(id)

      if (index === id) {
        const update = {
          ...data,
          active: !data.active,
        };
        return update;
      }
      return data;
    });
    setAddress(newList);

    console.log("dato actualizado:", emailPerson[0])
    console.log("boolUpdate: ", boolUpdate)
  }

  return (
    <React.Fragment>

      <main >
        <br></br>
        <div className="content">
          <Select onChange={handleChange} options={options()} /><br></br>
          <button className="btn-add" id="div_btn" class="fa fa-plus" onClick={() => handleAdd()} value="agregar">Add</button><br></br>
          <br/>
          <div>
            <form className="form-personal">
              {address.map((data, i) => {
                return (
                  <div className="input-text" id="input_id">
                    <input
                      disabled={
                        data.emailAddressID != "" ?
                          !data.active : data.active
                      }
                      type="email"
                      name="emailAddress"
                      onChange={(e) => inputHandler(e, i)}
                      value={data.emailAddress || ""}

                    />
                    <button
                      type="button"
                      className="btn-warning"
                      class="fa fa-edit"
                      onClick={() => editInput(i)}
                    >
                      
                    </button>
                    <button
                      type="button"
                      className="btn-delete"
                      class="fa fa-trash-o"
                      //onClick={()=>deleteConfirm(data.emailAddressID)}
                      onClick={() => handleDeleteInputEmail(i)}
                    >
                    </button>

                    <br/>
                    <br/>
                  </div>
                )
              })}

              <br />
              {val.map((data, i) => {
                return (
                  <div className="input-text">
                    <input
                      type="email"
                      name="emailAddress"
                      onChange={handleChangeNewInputEmail}
                      placeholder=""
                      value={emailPerson.emailAddress}

                      required
                    >

                    </input>
                    <button
                      className="btn btn-danger"
                      class="fa fa-trash-o"
                      onClick={() => handleDelete(i)}>
                   
                    </button>
                    <br/><br/>
                  </div>
                )

              })}
              <div id="div_btn2" className="div-button">
              
              <button  className="btn-cancel" class="fa fa-close" onClick={(e) => confirmCancel(e)} >Cancel</button>
              <button
                className="btn-save" class="fa fa-save" onClick={(e)=>saveFinishEmailPerson(e)}>Save</button>

              </div>
              <br/>

            </form>
          </div>
        </div>
      </main>

    </React.Fragment>
  )
}
