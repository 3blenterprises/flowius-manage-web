import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";
import firebase from "./services/firebaseInit";

const { auth } = firebase;
import LoginPage from "./pages/login/LoginPage";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  });

  return <div>{user ? <div>{user.email} Logged in</div> : <LoginPage />}</div>;
}

export default App;
