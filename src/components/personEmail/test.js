// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import { EmailModel } from "../../models/email.model";
// import { PersonEmailModel } from "../../models/personEmail.models";
// import { getListPerson, getEmailById } from "../../services/Email.services";
// export function PersonEmail() {
//   const [getInput, setInputs] = useState([]);
//   const [count, setCount] = useState(1);
//   const [emails, setEmails] = useState([]);
//   const [text, setText] = useState("");
//   const [alertError, setAlertError] = useState("");
//   const [visible, setVisible] = useState(true);
//   const [personList, setPersonList] = useState([PersonEmailModel()]);
//   const [personMail, setPersonEmail] = useState([EmailModel()]);

//   useEffect(() => {
//     getListPerson().then((data) => {
//       setPersonList(data);
//     });
//   }, []);

//   const options = () => {
//     return personList.map((data) => ({
//       value: data.businessEntityID,
//       label:
//         data.businessEntityID + " - " + data.firstName + " " + data.lastName,
//     }));
//   };

//   const handleChangeSelect = (event) => {
//     const value = event.value;
//     getEmailById(value).then((data) => {
//       setPersonEmail(data);
//       console.log(personMail);
//       console.log(data.emailAddress);
//     });
//     setVisible(false);
//   };

//   //   useEffect(() => {}, [getInput]);
//   const warning = (
//     <span style={{ color: "red" }}>
//       <small>Solo se puede agregar un registro a la vez </small>
//       <i className="fa-solid fa-circle-exclamation"></i>
//     </span>
//   );
//   function handleNewInput(event) {
//     console.log(text);
//     setVisible(false);
//     event.preventDefault();
//     if (text.length <= 0 && count > 1) {
//       //alert("solo puede agregar un correo a la vez");
//       setAlertError(warning);
//     } else {
//       setCount(count + 1);
//       setInputs([...getInput, input]);
//       setText("");
//       setAlertError("");
//     }
//   }

//   const handleChangeEmails = (event) => {
//     event.preventDefault();
//     const name = event.target.name;
//     const value = event.target.value;
//     setText(value);
//     setEmails({ ...emails, [name]: value });
//   };

//   const handleSubmitEmails = (event) => {
//     event.preventDefault();
//     console.log(emails);
//   };

//   const handleDelete = (id) =>{
//     alertError();
//   }

//     const handleEdit = (id) =>{
//     alertError();
//   }

//   const input = (
//     <div key={"id" + count} className="input-group mt-2">
//       <input
//         type="text"
//         name={"id" + count}
//         className=" search-input form-control"
//         placeholder={"Nueva direccion de correo electronico..."}
//         onChange={handleChangeEmails}
//       ></input>
//       <div className="input-group-append">
//         <button className="btn btn-pink" type="submit">
//           <i className="fa-solid fa-pen"></i>
//         </button>
//         <button className="btn btn-pink" type="submit">
//           <i className="fa-solid fa-trash"></i>
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <React.Fragment>
//       <div className="container-fluid mt-5 col-md-8">
//         <div className="card">
//           <div className="card-body">
//             <div className="mt-3">
//               <label htmlFor="inputState">
//                 <h6>Buscar correos de la persona</h6>
//               </label>
//               <Select onChange={handleChangeSelect} options={options()} />
//             </div>
//           </div>
//           <div className="card-body">
//             <button className="btn btn-ligtpurple" onClick={handleNewInput}>
//               Agregar nuevo correo
//             </button>
//             <div className="mt-2">
//               {alertError}
//               <form onSubmit={handleSubmitEmails} hidden={visible}>
//                 {personMail.map((data) => (
//                   <div key={data.emailAddressID} className="input-group mt-2">
//                     <input
//                       type="text"
//                       name="emailAddress"
//                       className=" search-input form-control"
//                       placeholder={"Nueva direccion de correo electronico..."}
//                       onChange={handleChangeEmails}
//                       value={data.emailAddress}
//                     ></input>
//                     <div className="input-group-append">
//                       <button className="btn btn-pink" type="submit">
//                         <i className="fa-solid fa-pen"></i>
//                       </button>
//                       <button className="btn btn-pink" type="submit">
//                         <i className="fa-solid fa-trash"></i>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 {getInput}
//                 <div className="input-group">
//                   <button className="btn btn-ligtpurple mt-2" type="submit">
//                     Guardar
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
