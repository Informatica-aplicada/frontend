import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { PersonEmails } from "../models/personEmails.models";
import {getPersonEmails} from "../services/PersonEmailsService";

function Person(){

    const [getPerson, setPersonEmail] = useState([PersonEmails()]);

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
    
    return (
        <>
        <div>
            <Select options={options()}/>
        </div>
        </>
    );


} export default Person;