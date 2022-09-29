import React from "react";

export function Table02({tr, reports, years}){
console.log("por lo menos entré"+years[0]);
  tr.push(
    reports.map((data) => (
      <tr>

        <td>{data.name}</td>
        {data.sales.map((rowData) => (

          <td>
            {rowData}
          </td>


        ))}

      </tr>
    ))
  );

    return (
      <React.Fragment>
        <table className="table table-light ">
          <thead className=" table-head thead-light">
           <th>Name</th>
      
              <th>LastName</th>
              <th>Jan</th>
              <th>Feb</th>

          </thead>
          <tbody>{tr}</tbody>
          <tfoot>
            <tr>
              <th>#Paginacion</th>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
}