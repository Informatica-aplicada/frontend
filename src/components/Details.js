import React from "react"
import TableDetails from "./table/TableDetails";
import TableHeader from './table/TableHeader';
import Navbar from "./page/navbar";
import '../public/css/table.css';

function Details() {

  return (
    
    <React.Fragment>
      
      <Navbar/>
        <div className="">
          <div className="">
         
          <TableHeader/>
          <TableDetails/>
          </div>
        </div>
    </React.Fragment>
  );
}
export default Details;