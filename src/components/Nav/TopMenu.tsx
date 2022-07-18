import { User, signOut } from "firebase/auth";
import logo from "../../assets/logo-1.png";
import icon from "../../assets/logo-blue.png";
import { useContext, useState } from "react";
import firebase from "../../services/firebaseInit";
import CloseClickOutside from "../ClickOutside";
import Selector from "../input/Select";
import { ProjectContext } from "../../context/ProjectContext";
import { Link } from "react-router-dom";
import MaterialIcon from "../MaterialIcon";

const { auth } = firebase;

interface TopMenuProps {
  user: User;
}

const TopMenu = ({ user }: TopMenuProps) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const projectContext = useContext(ProjectContext);

  const logOut = () => {
    signOut(auth);
    localStorage.clear();
    window.location.reload();
  };

  const setProject = (id: string) => {
    const project = projectContext.projects.find((p) => p.id === id);
    if (!project) return;
    projectContext.setSelectedProject(project);
  };

  return (
    <nav className="bg-white shadow-sm  border-gray-200  py-2.5 rounded ">
      <div className="flex flex-wrap justify-between items-center mx-2 ">
        <Link to="/" className="flex justify-center items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowius Logo" />

          <span className="w-24">
            <img
              style={{ width: "100px" }}
              className="w-24"
              src={icon}
              alt="white logo"
            />
          </span>
        </Link>
        <Selector
          items={projectContext.projects}
          selector={"ProjectName"}
          onChange={setProject}
          selected={projectContext.selectedProject.id}
        />
        <div className="flex items-center md:order-2">
          <button className="mr-3 mt-2" onClick={() => setOpen((n) => !n)}>
            <MaterialIcon icon="notifications" className="text-flowius-blue" />
          </button>
          <CloseClickOutside onClose={() => setOpen(false)}>
            <div
              id="dropdown"
              className={`top-avatar ${
                open ? "opacity-100" : "opacity-0"
              } md:mr-0 mr-3 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  `}
            >
              <div>{/* Todo - Notification modal  */}</div>
            </div>
          </CloseClickOutside>
          <button
            type="button"
            onClick={() => setShowTopMenu((n) => !n)}
            className="flex mr-3 text-sm bg-gray-100 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              referrerPolicy="no-referrer"
              src={user.photoURL ?? ""}
              alt="user photo"
            />
          </button>
          <CloseClickOutside onClose={() => setShowTopMenu(false)}>
            <div
              className={`top-avatar ${
                showTopMenu ? "flex flex-col" : "hidden"
              } md:mr-0 mr-3 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  `}
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 ">
                  {user.displayName}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate d">
                  {user.email}
                </span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <Link
                    to=""
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Materials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cases"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Cases
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={logOut}
                    to="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </CloseClickOutside>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
