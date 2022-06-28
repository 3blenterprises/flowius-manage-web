import { useCallback, useContext } from "react";
import { getProjects } from "../services/authService";
import useDidMountEffect from "../components/useDidMountEffect";
import TopMenu from "../components/Nav/TopMenu";
import { User } from "firebase/auth";
import { ProjectContext } from "../context/ProjectContext";

interface DashboardProps {
  user: User;
}

const DashBoard = ({ user }: DashboardProps) => {
  const projectContext = useContext(ProjectContext);

  const pullProjects = useCallback(async () => {
    const email = localStorage.getItem("email");
    if (!email) return;
    const proj = await getProjects();
    projectContext.setProjects(proj);
  }, []);

  useDidMountEffect(() => {
    pullProjects();
  }, [pullProjects]);

  return (
    <>
      <TopMenu user={user} />
    </>
  );
};

export default DashBoard;
