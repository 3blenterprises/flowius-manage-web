import React from 'react'
import { useState, useEffect } from 'react';
import firebase from '../../services/firebaseInit';
import '../../App.css'
import { StyledFirebaseAuth } from 'react-firebaseui';
const LogIn = () => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => setLoggedinUser(user))
    return () => {
      unregisterAuthObserver()
    }
  }, [])


  const setLoggedinUser = (user: firebase.User | null) => {
    if (user) {
      window.localStorage.setItem('auth-user', JSON.stringify(user))
      window.location.reload();
    }
  }

  return (
    <div className="App" >
      <header className="App-header">
        <image className="floiuslogo" />
        <div className='rectangel'>
          <div className='rectangel3'>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
      </header>
    </div>
  );
}


export default LogIn