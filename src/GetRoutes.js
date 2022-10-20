import React from 'react';
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import App from './components/Reports';
import Details from './components/Details';
import { ShippedForm } from './components/Shipped/ShippedForm';
import { ShippedTable } from './components/Shipped/ShippedTable';
import {PersonTable} from './components/Person/PersonTable'
import {PersonList} from './components/Person/PersonList'
import Emails from './components/Emails';
import { VendorForm } from './components/Vendor/VendorForm';
import { VendorTable } from './components/Vendor/VendorTable';


function GetRoutes(){

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="reports" element={<App />} />
          <Route path="details" element={<Details />} />
          <Route path="shipped" element={<ShippedForm />} />
          <Route path="shipped/:id" element={<ShippedForm />} />
          <Route path="shippedList" element={<ShippedTable />} />
          <Route path="shippedDetails/:id" element={<ShippedForm />} />
          <Route path="addPerson" element={<PersonTable />} />
          <Route path="person" element={<PersonList />} />
          <Route path="updatePerson/:id" element={<PersonTable />} />
          <Route path="showPerson/:id" element={<PersonTable />} />
          <Route path="emails" element={<Emails />} />
          <Route path="vendor" element={<VendorForm />} />
          <Route path="vendor/:id" element={<VendorForm />} />
          <Route path="vendorList" element={<VendorTable />} />
          <Route path="vendorDetails/:id" element={<VendorForm />} />
          {/* <Route path="master" element={   <MasterPage component={<div>hola</div>}/>   } /> */}
        </Routes>
      </Router>
    );
    
}export default GetRoutes;