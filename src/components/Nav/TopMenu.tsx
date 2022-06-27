import { User, signOut } from "firebase/auth";
import logo from "../../assets/logo-1.png";
import { useState } from "react";
import firebase from "../../services/firebaseInit";
import CloseClickOutside from "../ClickOutside";
import { Project } from "../../services/orgTypes";
import Selector from "../input/Select";

const { auth } = firebase;

interface TopMenuProps {
  user: User;
  projects: Project[];
}

const TopMenu = ({ user, projects }: TopMenuProps) => {
  const [showTopMenu, setShowTopMenu] = useState(false);

  const logOut = () => {
    signOut(auth);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm  border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowius Logo" />
          <span className="self-center text-flowius-blue text-xl font-semibold whitespace-nowrap ">
            Flowius
          </span>
        </a>
        <Selector
          items={projects}
          selector={"ProjectName"}
          onChange={console.log}
        />
        <div className="flex items-center md:order-2">
          <button
            type="button"
            onClick={() => setShowTopMenu((n) => !n)}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={user.photoURL ?? ""}
              alt="user photo"
            />
          </button>
          <CloseClickOutside onClose={() => setShowTopMenu(false)}>
            <div
              className={`top-avatar ${
                showTopMenu ? "opacity-100" : "opacity-0"
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
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Cases
                  </a>
                </li>
                <li>
                  <a
                    onClick={logOut}
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                  >
                    Sign out
                  </a>
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
