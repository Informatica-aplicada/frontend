import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import App from './App';

function GetRoutes(){

    return(
        <Router><Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='Home' element={<Home/>}/>    
            <Route path='Registers' element={<App/>}/>    
        </Routes></Router>
    );
    
}export default GetRoutes;