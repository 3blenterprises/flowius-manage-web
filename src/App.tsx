import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect, useState } from 'react';
import Hello from './components/Footer/hey';
import LogIn from './layouts/login/login';
import './App.css';
//import { PromptProps } from 'react-router-dom';


const hist = createBrowserHistory();
//const navigate = useNavigate();

const App = () => { 

  return (
    
<LogIn/>      
      
    
     
    
  )
    
        
}

export default App;
