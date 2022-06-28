import { FC } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "../MaterialIcon";

const SideBar: FC = () => {
  return (
    <div className="w-60 hidden sm:flex bg-white shadow" aria-label="Sidebar">
      <div className=" py-4 px-3 rounded ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center capitalize text-gray-500 font-bold p-2 text-base rounded-lg  hover:bg-gray-100 "
            >
              <MaterialIcon icon="home" outline={true} className="" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/materials"
              className="flex items-center text-gray-500 font-bold p-2 text-base rounded-lg  hover:bg-gray-100 "
            >
              <MaterialIcon icon="construction" outline={true} className="" />
              <span className="ml-3">Materials</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cases"
              className="flex items-center text-gray-500 font-bold p-2 text-base rounded-lg  hover:bg-gray-100 "
            >
              <MaterialIcon icon="content_paste" outline={true} className="" />
              <span className="ml-3">Cases</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
