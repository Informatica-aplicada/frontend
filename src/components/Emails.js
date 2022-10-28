import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./page/navbar";
import { getPersonEmails } from "../services/PersonServices";
import axios from "axios";
import "react-widgets/styles.css";
import "../public/css/styles.css";
import DropdownList from "./dropdown/dropdown";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Emails() {
  const [personList, setPersonList] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [selected, setSelectedPerson] = useState([]);
  const [actions, setActions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [save, setSaveAll] = useState(false);
  const [changes, setChanges] = useState(false);
  function resetAll() {
    setEmailList([]);
    setSelectedPerson([]);
    setActions([]);
    setSaveAll(false);
    setShowResults(false);
    setChanges(false);
  }
  useEffect(() => {
    async function fetchData() {
      // Fetch data
      const { data } = await axios.get("https://localhost:8099/api/top100");
      const results = [];
      data.forEach((value) => {
        results.push({
          key: value.businessEntityID,
          value: value.name + " " + value.lastName,
        });
      });
      // Update the  state
      setPersonList([...results]);
    }
    // Trigger the fetch
    fetchData();
  }, []);

  function confirmAlert() {
    Swal.fire({
      title: "Do you want to save changes?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Save changes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "Your changes have been saved.", "success");
        setInserts();
        setSaveAll(true);
      }
    });
  }

  function confirmCancel() {
    Swal.fire({
      title: "Do you want to cancel changes?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel changes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Done!", "Your changes have been canceled.", "success");
        resetAll();
      }
    });
  }

  useEffect(() => {
    async function fetchDataEmails() {
      // Fetch data
      const { data } = await axios.get(
        "https://localhost:8099/api/email/" + selected
      );
      const results = [];
      data.forEach((value) => {
        results.push({
          key: value.emailAddressID,
          value: value.emailAddress,
          active: true,
        });
      });
      setEmailList([...results]);
    }
    fetchDataEmails();
  }, [selected]);

  const handleChangeSelectedPerson = (selected) => {
    setShowResults(true);
    setSelectedPerson(selected);
  };

  function handleEdit(id) {
    const newList = emailList.map((item) => {
      if (item.key === id) {
        const updatedItem = {
          ...item,
          active: !item.active,
        };

        return updatedItem;
      }
      return item;
    });
    setEmailList(newList);
  }
  function handleDelete(id) {
    const newList = emailList.filter((item) => item.key !== id);
    let datas = [];
    datas.push({
      action: "delete",
      email: {
        EmailAddress: "",
        EmailAddressID: id,
      },
    });

    setActions((actions) => [...actions, ...datas]);

    setEmailList(newList);
  }

  const handleAdd = () => {
    setEmailList([...emailList, { value: "", active: false, state: "new" }]);
  };

  async function setInserts() {
    let datas = [];
    emailList.forEach((element) => {
      if (element.state === "new") {
        datas.push({
          action: "insert",
          email: {
            EmailAddress: element.value,
            BusinessEntityID: selected,
          },
        });
        setActions((actions) => [...actions, ...datas]);
      }
    });
  }
  useEffect(() => {
    console.log(`actions changed to ${JSON.stringify(actions)}`);
  }, [actions]);

  useEffect(() => {
    if (save) {
      saveAll().then(resetAll());
    }
  }, [save]);

  async function saveAll() {
    axios({
      method: "POST",
      url: "https://localhost:8099/email/crud",
      data: JSON.stringify(actions),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
  }
  async function handleSave() {
    confirmAlert();
  }

  const handleInputChange = (e, id) => {
    console.log(e.target.value, "e");
  };
  const handleSet = (e, id) => {
    const newList = emailList.map((item) => {
      if (item.key === id) {
        const updatedItem = {
          ...item,
          value: e.target.value,
        };

        return updatedItem;
      }
      return item;
    });
    setChanges(true);
    setEmailList(newList);
  };

  const handleCancel = () => {
    if (changes) {
      confirmCancel();
    } else {
      resetAll();
    }
  };

  const Results = () => (
    <div>
      <div>
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <div>
        <table>
          <tbody>
            {emailList.map((item) => (
              <tr key={item.key}>
                <td>
                  <input
                    type="text"
                    defaultValue={item.value}
                    onChange={(event) => handleInputChange(event, item.key)}
                    disabled={item.active}
                    onBlur={(event) => handleSet(event, item.key)}
                    id={item.key}
                  />

                  <button onClick={() => handleEdit(item.key)}>edit</button>
                  <button onClick={() => handleDelete(item.key)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleSave()}>Save</button>
        <button onClick={() => handleCancel()}>Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div class="top">
        <DropdownList
          elements={personList}
          handleChangeSelectedPerson={handleChangeSelectedPerson}
        ></DropdownList>
      </div>
      <div>{showResults ? <Results /> : null}</div>
    </div>
  );
}
export default Emails;
