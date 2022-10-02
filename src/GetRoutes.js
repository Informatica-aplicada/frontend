import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import App from './components/Reports';
import Details from './components/Details';

function GetRoutes(){

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="reports" element={<App/>} />
          <Route path="details" element={<Details/>} />
        </Routes>
      </Router>
    );
    
}export default GetRoutes;