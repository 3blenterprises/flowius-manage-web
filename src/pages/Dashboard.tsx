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
import SideBar from "../components/Nav/SideBar";

interface DashboardProps {
  user: User;
}

const DashBoard = ({ user }: DashboardProps) => {
  const { setProjects, setSelectedProject } = useContext(ProjectContext);

  const pullProjects = useCallback(async () => {
    const proj = await getProjects();
    setProjects(proj);
    setSelectedProject(proj[0]);
  }, [setProjects, setSelectedProject]);

  useDidMountEffect(() => {
    pullProjects();
  }, [pullProjects]);

  return (
    <BrowserRouter>
      <TopMenu user={user} />
      <div className="flex w-full h-[90vh]">
        <SideBar />
        <div className="container m-2 w-full overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DashBoard;
