import React from "react";

function TableDetails() {

    return (
        <React.Fragment>
            <div class="card mt-3 col-md-8 mx-auto">
                <div class="card-body">
                    <div className="d-flex">
                    <h5 class="card-title title-table">Detalles</h5>
                        <form class="form-group form-inline ml-3">
                            <div class="input-group">
                                <input type="text" class=" search-input form-control" placeholder="Buscar..."></input>
                                <div class="input-group-append">
                                    <button class="btn btn-pink" type="button">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                
                                <th>Orden #</th>
                                <th>Vence</th>
                                <th>OrderQty</th>
                                <th>Id Prod. </th>
                                <th>Precio C/U</th>
                                <th>Total</th>
                                <th>Cant. Recibida</th>
                                <th>Cant. Rechazada</th>
                                <th>En Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>bbbbbbbb</td>
                                <td>ccccccc</td>
                                <td>ddddddd</td>
                                <td>eeeeeeee</td>
                                <td>ffffff</td>
                                <td>ggg</td>
                                <td>hhhh</td>
                                <td>iiii</td>
                                <td>jjjjjj</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        </React.Fragment>
    );
}
export default TableDetails;