import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const config = {
    apiKey: "AIzaSyBhcQLvsFIVxSMWPnc5BFur66_hk_JaVM8",
    authDomain: "flowius-manage.firebaseapp.com",
    databaseURL: "https://flowius-manage.firebaseio.com",
    projectId: "flowius-manage",
    storageBucket: "flowius-manage.appspot.com",
    messagingSenderId: "818432948406",
    appId: "1:818432948406:web:89afc29002c0294b7a8e17"
  };
  
firebase.initializeApp(config)

export const auth = firebase.auth(); 
export const db = firebase.firestore(); 
export default firebase; 
