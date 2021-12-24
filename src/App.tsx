import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect, useState } from 'react';

import LogIn from './layouts/login/login';
import './App.css';
import Sidebar from './components/SIdebar/Sidebar';
//import { PromptProps } from 'react-router-dom';




const App = () => {
  const [authenticated, isAuthenticated] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('auth-user');
    isAuthenticated(token != null)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </>


  )


}


export default App;
