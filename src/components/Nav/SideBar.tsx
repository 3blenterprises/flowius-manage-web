/* eslint-disable prettier/prettier */
import { FC } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "../MaterialIcon";

const style_sidebar = {
    
}

const SideBar: FC = () => {
  return (
    // <div className="w-60 hidden sm:flex bg-white shadow" aria-label="Sidebar">
    <div className="w-56 hidden sm:flex top-0 left-0 bg-cover bg-white shadow block ml-5 rounded bg-gradient-to-b from-[#1d8cf8] to-[#3358f4]/90" aria-label="Sidebar">
      <div className=" py-4 px-3 rounded ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center capitalize text-gray-500 font-bold p-2 text-base rounded-lg"
            >
              <span className="ml-3 text-white">FLOWIUS MANAGE</span>
            </Link>
          </li>

          <br className=""/>

          <li>
            <Link
              to="/"
              className="flex items-center capitalize text-gray-500 p-2 text-base rounded-lg  hover:bg-[#3358f4]/90"
            >
              <MaterialIcon icon="home" outline={true} className="text-white" />
              <span className="ml-3 text-white">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/materials"
              className="flex items-center text-gray-500 p-2 text-base rounded-lg  hover:bg-[#3358f4]/90"
            >
              <MaterialIcon icon="construction" outline={true} className="text-white" />
              <span className="ml-3 text-white">Materials</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cases"
              className="flex items-center text-gray-500 p-2 text-base rounded-lg  hover:bg-[#3358f4]/90"
            >
              <MaterialIcon icon="content_paste" outline={true} className="text-white" />
              <span className="ml-3 text-white">Cases</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cases"
              className="flex items-center text-gray-500 p-2 text-base rounded-lg  hover:bg-[#3358f4]/90"
            >
              <MaterialIcon icon="settings" outline={true} className="text-white" />
              <span className="ml-3 text-white">Project Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
