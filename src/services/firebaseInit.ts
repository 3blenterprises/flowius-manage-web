import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhcQLvsFIVxSMWPnc5BFur66_hk_JaVM8",
  authDomain: "flowius-manage.firebaseapp.com",
  databaseURL: "https://flowius-manage.firebaseio.com",
  projectId: "flowius-manage",
  storageBucket: "flowius-manage.appspot.com",
  messagingSenderId: "818432948406",
  appId: "1:818432948406:web:89afc29002c0294b7a8e17",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default { db, auth };
