import { User } from "firebase/auth";
import { useState } from "react";
import firebase from "./services/firebaseInit";

const { auth } = firebase;
import LoginPage from "./pages/login/LoginPage";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? (
        <div>{user.email} Logged in</div>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
