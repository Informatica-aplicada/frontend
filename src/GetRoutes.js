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

import Person from './components/Person';


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
          <Route path="emails" element={<Person />} />
          {/* <Route path="master" element={   <MasterPage component={<div>hola</div>}/>   } /> */}
        </Routes>
      </Router>
    );
    
}export default GetRoutes;