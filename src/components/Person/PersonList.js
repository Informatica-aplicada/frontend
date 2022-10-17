import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPerson, deletePerson } from "../../services/PersonServices";
import { PersonModel } from "../../models/person.models";

export function PersonList() {

    const [person, setPerson] = useState([PersonModel()]);

    useEffect(() => {

        getPerson().then((person) => {
            setPerson(person);
        });

    }, [person]);

    const navigate = useNavigate();
    function deleteP(id) {
        deletePerson(id);
    }

    return (
        <React.Fragment>
            <div className="container-fluid col-md-8 mt-5">
                <Link to="/addPerson">
                    <button className="btn btn-primary">Agregar</button>
                </Link>
                <div className="card mt-1">
                    <div className="card-body">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>PersonType</th>
                                    <th>NameStyle</th>
                                    <th>Title</th>
                                    <th>FirstName</th>
                                    <th>MiddleName</th>
                                    <th>LastName</th>
                                    <th>Suffix</th>
                                    <th>EmailPromotion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {person.map((data) => (
                                    <tr>
                                        <td>{data.personType}</td>
                                        <td>{data.nameStyle}</td>
                                        <td>{data.title}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.middleName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.suffix}</td>
                                        <td>{data.emailPromotion}</td>
                                        <td>

                                        <Link to={`/updatePerson/${data.businessEntityID}`}>
                                                <button className="button btn-blue" title="edit">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </Link>

                                            <Link to={`/showPerson/${data.businessEntityID}`}>
                                                <button className="button btn-blue" title="show">
                                                    <i class="fa-solid fa-eye"></i>
                                                </button>
                                            </Link>
                                            <button
                                                className="button btn-red"
                                                title="delete"
                                                onClick={() => deleteP(data.businessEntityID)}
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
