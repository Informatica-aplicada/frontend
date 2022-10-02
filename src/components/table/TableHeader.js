import React from "react";

function TableHeader() {

    return (
        <React.Fragment>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title title-table">Facturación</h5>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>PurchaseOrderID</th>
                                <th>RevisionNumber</th>
                                <th>Status</th>
                                <th>EmployeeID</th>
                                <th>VendorID</th>
                                <th>ShipMethodID</th>
                                <th>OrderDate</th>
                                <th>ShipDate</th>
                                <th>SubTotal</th>
                                <th>TaxAmt</th>
                                <th>Freight</th>
                                <th>TotalDue</th>
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
                                <td>kkkkk</td>
                                <td>lllll</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    );
}
export default TableHeader;
