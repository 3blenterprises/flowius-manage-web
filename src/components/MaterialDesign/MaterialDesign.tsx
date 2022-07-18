import { FC } from "react";

interface designProps {
  children: any;
  onClick?: () => void;
}
const Design: FC<designProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" flex justify-center items-center text-sm   bg-flowius-blue w-8 h-8 rounded-full font-semibold text-center mr-0 ml-9 text-white shadow shadow-gray-500 hover:scale-105 "
    >
      {children}
    </button>
  );
};
export default Design;
