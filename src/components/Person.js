import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Email } from "../models/emails.models";
import { PersonEmails } from "../models/personEmails.models";
import {getEmails, getPersonEmails} from "../services/PersonEmailsService";

function Person(){

    const [getPerson, setPersonEmail] = useState([PersonEmails()]);
    const [dataEmails, setDataEmails] = useState([Email()])

    useEffect(() => {

        getPersonEmails().then((person) => {
            setPersonEmail(person);
            console.log(getPerson);
        })

    }, []);

    const options = () => {
        return getPerson.map((info) => ({
            value: info.businessEntityID,
            label: info.name,
        }));
    };

    const selectEvent = (eventocambio) => { 
       
        let id = eventocambio.value;

        alert(id);

        // getEmails(id).then((response) => { 
        //     setDataEmails(response);
        // });
    }

    


    
    return (
      <>
        <div className="container">
          <div className=" col-md-6 mt-5">
            <Select onChange={selectEvent} options={options()} />
          </div>
        </div>
      </>
    );


} export default Person;