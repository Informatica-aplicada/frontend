import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Email } from "../models/emails.models";
import { PersonEmails } from "../models/personEmails.models";
import { getEmails, getPersonEmails, addEmails } from "../services/PersonEmailsService";


function Person() {
  const [getPerson, setPersonEmail] = useState([PersonEmails()]);
  const [dataEmails, setDataEmails] = useState([Email()]);
  const [getId, setId] = useState('');
  const [getHidden, setHidden] = useState(true);

  useEffect(() => {
    getPersonEmails().then((person) => {
      setPersonEmail(person);
      console.log(getPerson);
    });
  }, []);

  const options = () => {
    return getPerson.map((info) => ({
      value: info.businessEntityID,
      label: info.name,
    }));
  };

  const selectEvent = (eventocambio) => {
    let id = eventocambio.value;

    setId(id);

    getEmails(id).then((response) => {
      setDataEmails(response);
      setHidden(false);
    });
  };

  const addFields = (event) => {
    event.preventDefault();
    setDataEmails([...dataEmails, Email()]);
  };

  const onChangeInput = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;

    [...dataEmails][index][name] = value;
    [...dataEmails][index].optionAction = 1; 
    [...dataEmails][index].businessEntityID = getId;

    setDataEmails([...dataEmails]);
  }

  const saveInfo = (event) => {
    event.preventDefault();
    setDataEmails(dataEmails);
    addEmails(dataEmails);
  }

  const deleteInfo = (index) => {
    [...dataEmails][index].optionAction = 2; 
    [...dataEmails][index].businessEntityID = getId;
    setDataEmails([...dataEmails]);
    addEmails(dataEmails);
  }

  return (
    <>
      <div className="container">
        <div className="col-md-6 mt-5">
          <Select  className="m-0" onChange={selectEvent} options={options()}/>
          <div>
            <div hidden={getHidden}>
              <button onClick={addFields} className="btn btn-primary mt-2" >Add +</button>
              <form onSubmit={saveInfo}>
                {dataEmails.map((data, index) => {
                  return (
                    <>
                    <div className="input-group mt-2" key={index}>
                      <input className="form-control"
                        type="text"
                        name="emailAddress"
                        value={data.emailAddress || ''}
                        onChange = {(event) => onChangeInput(event, index, Number(data.businessEntityID))}
                        placeholder="example@domain.com"
                      ></input>
                      <div className = "input-group-append">
                        <button className="btn btn-primary" onClick={() => deleteInfo(index)}>
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    </>
                  );
                })}
                <button type="submit" className="btn btn-primary mt-2" >Save</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Person;
