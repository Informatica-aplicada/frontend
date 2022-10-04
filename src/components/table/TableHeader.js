import React from "react";

function TableHeader() {

    return (
        <React.Fragment>
            <div class="card card mt-3 col-sm-10 col-md-8 col-lg-8 mx-auto">
                <div class="card-body ">
                    <h5 class="card-title title-table">Facturación</h5>

                    <div className="form-row col-md-6 col-md-12">
                        {/*-------- form row---------*/}
                        <div className="form-row col-md-12 col-lg-6">

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">OrderID </label>
                                    <input class="form-control form-control-sm" type="text" placeholder=".PurchaseOrderID">
                                    </input>
                                </small>
                            </div>

                            <div className="form-group  col-md-4 col-lg-4">
                                <small> <label class="form-label">Rev.Number </label> </small>
                                <input class="form-control form-control-sm" type="text" placeholder=".RevisionNumber">
                                </input>
                            </div>

                            <div className="form-group  col-md-4 col-lg-4">
                                <small> <label class="form-label">Status </label></small>
                                <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                                    <option defaultValue={0} disabled >Choose Status..</option>
                                    <option value={1} >Pending</option>
                                    <option value={2} >Approve</option>
                                    <option value={3} >Rejected</option>
                                    <option value={4} >Complete</option>
                                </select>
                            </div>

                        </div>

                        {/*-------- end form row---------*/}

                        {/*-------- form row---------*/}
                        <div className="form-row col-md-12 col-lg-6">

                            <div className="form-group  col-md-4 col-lg-4">
                                <small> <label class="form-label">EmployeeID </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".EmployeeID">
                                </input>
                            </div>



                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">VendorID </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".VendorID">
                                </input>
                            </div>

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">ShipMethodID </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".ShipMethodID">
                                </input>
                            </div>

                        </div>
                    </div>

                    {/*-------- end form row---------*/}

                    <div className="form-row col-md-6 col-md-12">

                        {/*-------- form row---------*/}
                        <div className="form-row col-md-12 col-lg-6">

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">OrderDate </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".OrderDate">
                                </input>
                            </div>

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">ShipDate </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".ShipDate">
                                </input>
                            </div>

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">SubTotal </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".SubTotal">
                                </input>
                            </div>

                        </div>

                        {/*-------- end form row---------*/}

                        {/*-------- form row---------*/}
                        <div className="form-row col-md-12 col-lg-6">

                            <div className="form-group col-md-4 col-lg-4">
                                <small>  <label class="form-label">TaxAmt </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".TaxAmt">
                                </input>
                            </div>

                            <div className="form-group col-md-4 col-lg-4">
                                <small><label class="form-label">Freight </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".Freight">
                                </input>
                            </div>

                            <div className="form-group col-md-4 col-lg-4">
                                <small> <label class="form-label">TotalDue </label></small>
                                <input class="form-control form-control-sm" type="text" placeholder=".TotalDue">
                                </input>
                            </div>
                        </div>
                        <button type="button" class="btn btn-pink">Action</button>
                    </div>

                    {/*-------- end form row---------*/}

                </div>
            </div>

        </React.Fragment>
    );
}
export default TableHeader;
