import { createContext, FC, useState } from "react";
import { Project } from "../services/orgTypes";

interface ProjectContextState {
  projects: Project[];
  selectedProject: Project;
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project) => void;
}

export const ProjectContext = createContext<ProjectContextState>({
  projects: [],
  selectedProject: {} as Project,
  setProjects: (_) => {
    /*noop*/
  },
  setSelectedProject: (_) => {
    /*noop*/
  },
});

const ProjectCtx = ({ children }: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project>(
    {} as Project
  );

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        setProjects,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectCtx;
