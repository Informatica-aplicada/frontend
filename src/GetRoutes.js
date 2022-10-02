import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import App from './components/Reports';
import { Details } from './components/Details';

function GetRoutes(){

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login title="Home"/>} />
          <Route path="Home" element={<Home />} />
          <Route path="Reports" element={<App title="Index Page"/>} />
          <Route path="Details" element={<Details title="Details"/>} />
        </Routes>
      </Router>
    );
    
}export default GetRoutes;