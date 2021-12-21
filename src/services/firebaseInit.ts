import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const config = {
    apiKey: "AIzaSyBTdnuPCh1cJ_TGpE0t2Lo9Ye2EJ8M6Xtg",
    authDomain: "flowius-pay.firebaseapp.com",
    databaseURL: "https://flowius-pay.firebaseio.com",
    projectId: "flowius-pay",
    storageBucket: "flowius-pay.appspot.com",
    messagingSenderId: "315603218605",
    appId: "1:315603218605:web:233c79b0c3fa4779179624"
};
  
firebase.initializeApp(config)

export const auth = firebase.auth(); 
export const db = firebase.firestore(); 
export default firebase; 
