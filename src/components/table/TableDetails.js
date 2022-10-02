import React from "react";

function TableDetails() {

    return (
        <React.Fragment>
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title title-table">Detalles</h5>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>PurchaseOrderDetailID</th>
                                <th>DueDate</th>
                                <th>OrderQty</th>
                                <th>ProductID</th>
                                <th>UnitPrice</th>
                                <th>LineTotal</th>
                                <th>ReceivedQty</th>
                                <th>RejectedQty</th>
                                <th>StockedQty</th>
                                <th>ModifiedDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>aaaaaaa</td>
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