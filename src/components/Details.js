import React from "react"
import TableDetails from "./table/TableDetails";
import TableHeader from './table/TableHeader';
import Navbar from "./page/navbar";
import '../public/css/table.css';

export function Details() {

  return (
    
    <React.Fragment>
      
      <div className="body-details col-md-12 bg-light mx-auto">
      <Navbar/>
        <div className="">
          <div className="">
         
          <TableHeader/>
          <TableDetails/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}