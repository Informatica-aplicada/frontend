import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import App from './components/Reports';
import Details from './components/Details';
import { ShippedForm } from './components/Shipped/ShippedForm';
import { ShippedTable } from './components/Shipped/ShippedTable';


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
        </Routes>
      </Router>
    );
    
}export default GetRoutes;