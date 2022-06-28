import { User } from "firebase/auth";
import { useState } from "react";
import LoginPage from "./pages/login/LoginPage";
import DashBoard from "./pages/Dashboard";
import ProjectCtx from "./context/ProjectContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? (
        <ProjectCtx>
          <DashBoard user={user} />
        </ProjectCtx>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
