import React from "react";

function TableDetails(informationPerson) {

    const submitHandle = () => {
        alert("hola");
    }

    const {person} = informationPerson;

    return (
        <React.Fragment>
            <div className="card mt-3 col-md-8 mx-auto">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title title-table">Detalles</h5>
                        <form className="form-group form-inline ml-3">
                            <div className="input-group">
                                <input type="text" className=" search-input form-control" placeholder="Buscar..."></input>
                                <div className="input-group-append">
                                    <button onClick={submitHandle} className="btn btn-pink" type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>BusinessEntityID</th>
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
                                    <p>{data.BusinessEntityID}</p>
                                    <td>{data.PersonType}</td>
                                    <td>{data.NameStyle}</td>
                                    <td>{data.Title}</td>
                                    <td>{data.FirstName}</td>
                                    <td>{data.MiddleName}</td>
                                    <td>{data.LastName}</td>
                                    <td>{data.Suffix}</td>
                                    <td>{data.EmailPromotion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TableDetails;