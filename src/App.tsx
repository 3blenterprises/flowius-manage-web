import React from 'react';

import { createBrowserHistory } from "history";
import { useEffect, useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar'

import LogIn from './layouts/login/login';
import './App.css';
import Sidebar from './components/SIdebar/Sidebar';
import AdminNavbar from './components/Navbar/AdminNav';
import Debebe from './components/Navbar/JustHey';
import ResponsiveDrawer from '../src/components/SIdebar/sidebarsample';


//import { PromptProps } from 'react-router-dom';




const App = () => {
  const [authenticated, isAuthenticated] = useState(false); 


  useEffect(() => {
    const token = window.localStorage.getItem('auth-user');
    isAuthenticated(token != null)
  }, [])

  return (<Sidebar/>)


}


export default App;
