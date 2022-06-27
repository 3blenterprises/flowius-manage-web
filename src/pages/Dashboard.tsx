import { Project } from "../services/orgTypes";
import { useCallback, useEffect, useState } from "react";
import { getProjects } from "../services/authService";
import useDidMountEffect from "../components/useDidMountEffect";
import TopMenu from "../components/Nav/TopMenu";
import { User } from "firebase/auth";

interface DashboardProps {
  user: User;
}

const DashBoard = ({ user }: DashboardProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const pullProjects = useCallback(async () => {
    const email = localStorage.getItem("email");
    if (!email) return;
    const proj = await getProjects();
    console.log(proj);
    setProjects(proj);
  }, []);

  useDidMountEffect(() => {
    pullProjects();
  }, [pullProjects]);

  return (
    <>
      <TopMenu projects={projects} user={user} />
    </>
  );
};

export default DashBoard;
