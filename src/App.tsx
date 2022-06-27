import { User } from "firebase/auth";
import { useState } from "react";
import LoginPage from "./pages/login/LoginPage";
import DashBoard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? <DashBoard user={user} /> : <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;
