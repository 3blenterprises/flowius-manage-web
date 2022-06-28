import { useCallback, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getProjects } from "../services/authService";
import useDidMountEffect from "../components/useDidMountEffect";
import TopMenu from "../components/Nav/TopMenu";
import { User } from "firebase/auth";
import { ProjectContext } from "../context/ProjectContext";
import Materials from "./Materials";
import Home from "./Home";
import Cases from "./Cases";

interface DashboardProps {
  user: User;
}

const DashBoard = ({ user }: DashboardProps) => {
  const projectContext = useContext(ProjectContext);

  const pullProjects = useCallback(async () => {
    const proj = await getProjects();
    projectContext.setProjects(proj);
  }, [projectContext]);

  useDidMountEffect(() => {
    pullProjects();
  }, [pullProjects]);

  return (
    <BrowserRouter>
      <TopMenu user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DashBoard;
