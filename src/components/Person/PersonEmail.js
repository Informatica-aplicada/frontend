import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { EmailModel } from '../../models/emails.models';
import { getEmailPerson } from '../../services/PersonEmail'
import { getPerson } from "../../services/PersonServices";
import { PersonModel } from '../../models/person.models'
import { Form } from "react-router-dom";
import { sp_crudEmail } from '../../services/PersonEmail';
import validator from 'validator'


export function PersonEmail() {


    const [personEmail, setPersonEmail] = useState([PersonModel()]);
    const [idPerson, setIdPerson] = useState("");
    const [visible, setVisible] = useState(true);
    const [emails, setEmails] = useState([EmailModel()]);
    const [crudEmail, setCrudEmail] = useState(EmailModel());
    const [beUpdated, SetBeUpdated] = useState(false);
    const [formVisible, setFormVisible] = useState(true);
    const [emailError, setEmailError] = useState(false);
    var cont = 0;

    useEffect(() => {
        console.log("gg")
        getPerson().then((personEmail) => {
            setPersonEmail(personEmail);
        });
        if (beUpdated) {
            getEmailPerson(idPerson).then((P) => {
                setEmails(P);
            });
            SetBeUpdated(false)
        }

    }, []);


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Vanilla ty' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const person = () => {
        return personEmail.map((data) => ({
            value: data.businessEntityID,
            label: data.firstName + " " + data.lastName
        }));
    };

    const options2 = [
        personEmail.map((data) => ({
            value: data.businessEntityID,
            label: data.firstName + "  " + data.lastName
        }))
    ]

    const handleChangeOfMail = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setCrudEmail({ ...crudEmail, [name]: value });
        console.log(crudEmail.EmailAddressUpdate)

        
    }

    const handleChange = (event) => {

        const value = event.value;

        getEmailPerson(value).then((P) => {
            setEmails(P);
        });
        setIdPerson(value)
        setFormVisible(false)
        //setIdPerson({ ...idPerson, [value]: value });

    };

    function deleteEmail(id) {
        crudEmail.BusinessEntityID = idPerson
        crudEmail.type = "3"
        crudEmail.EmailAddress = id
        console.log("acá andamos " + crudEmail.EmailAddress + " id = " + crudEmail.BusinessEntityID + " type= " + crudEmail.type)
        sp_crudEmail(crudEmail);
        setVisible(true)
        //SetBeUpdated(true)
        console.log("Eliminados", crudEmail);

    }

    const hide = () => {

        if (visible) {
            setVisible(false);
            console.log("de fijo no hay nada" + idPerson)
        } else {
            setVisible(true);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validator.isEmail(crudEmail.EmailAddress)) {
            crudEmail.BusinessEntityID = idPerson
            crudEmail.type = "1"
            console.log("acá andamos " + crudEmail.EmailAddress + " id = " + crudEmail.BusinessEntityID + " type= " + crudEmail.type)
            sp_crudEmail(crudEmail);
            setVisible(true)
            SetBeUpdated(true)
          } 

          
        else{

            alert("Ingrese un correo valido")
        }

    };

    const prueba = (event) => {
        event.preventDefault();


    }

    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
        } else {
          setEmailError('Enter valid Email!')
        }
      }

    function updateEmail(id) {

        if (validator.isEmail(crudEmail.EmailAddressUpdate)) {
        crudEmail.BusinessEntityID = idPerson
        crudEmail.type = "2"
        crudEmail.EmailAddressID=id
        console.log("acá andamos " + crudEmail.EmailAddressID + " id = " + crudEmail.BusinessEntityID + " type= " + crudEmail.type+ "el nuevo o act"+ crudEmail.EmailAddressUpdate)
        sp_crudEmail(crudEmail);

        }else{

            alert("Ingrese un correo valido")
        }
    }

    function disabledInput(index){
        var input = document.getElementById(index)
        input.disabled = false;

    }

console.log("ealeeee== "+crudEmail.EmailAddressUpdate)
    return (
        <React.Fragment>
            <div className="container-fluid col-md-8 mt-5">

                <div className="card mt-1">

                    <Select options={person()} onChange={handleChange} />
                    <div className="card-body">
                    <button className='btn btn-primary' onClick={() => hide()}>
                        Agregar
                    </button>
                    <form hidden={visible} className='mt-3 show' onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                        <div className="form-group">
                            <input type="text" name="EmailAddress" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleChangeOfMail}></input>
                            <span>{emailError}</span>
                            </div>
                        <button className='btn btn-primary'>
                            Guardar
                        </button>
                        
                        </div>
                    </form>
</div>
                    <div className="card-body">
                        <form id="form" hidden={formVisible}>
                            {emails.map((field, index) =>

                                <div className="form-group">
                                    <input type="text"
                                        onChange={handleChangeOfMail}
                                        name="EmailAddressUpdate"
                                        id={index}
                                        defaultValue={field.emailAddress}
                                        //disabled={true}
                                       
                                    />

                                    <button
                                        className="button btn-red"
                                        title="delete"
                                        onClick={() => deleteEmail(field.emailAddress)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>

                                    <button className="button btn-blue"
                                        title="edit"
                                        onClick={() => updateEmail(field.emailAddressID)}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </div>
                            )}


                        </form>


                    </div>
                </div>


            </div>
        </React.Fragment>


    )

}