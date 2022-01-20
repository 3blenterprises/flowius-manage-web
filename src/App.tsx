import React from 'react';
import { useEffect, useState } from 'react';
import LogIn from './layouts/login/login';
import './App.css';
import Sidebar from './components/SIdebar/Sidebar';
import { BrowserRouter as Router, } from 'react-router-dom';



//import { PromptProps } from 'react-router-dom';




const App = () => {
  const [authenticated, isAuthenticated] = useState(true); 


  useEffect(() => {
    const token = window.localStorage.getItem('auth-user');
    isAuthenticated(token != null)
  }, [])

  return (
    <div>
      {authenticated ? (
        <Router>
        <Sidebar/>
  </Router>): <LogIn/> }
        
      
         
      
     
      </div>
      
      )


      
}


export default App;
/*{authenticated ? (
  <Router>
  <Sidebar/>
</Router>
) : <LogIn/>}

</div>*/