import { FC } from "react";
import MaterialIcon from "../MaterialIcon";
import CloseClickOutside from "../ClickOutside";

interface ModalButtons {
  text: string;
  onClick: () => void;
}

interface ModalProps {
  open: boolean;
  close: () => void;
  title: string;
  primary?: ModalButtons;
  secondary?: ModalButtons;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  open,
  close,
  children,
  primary,
  secondary,
  title,
}) => {
  return !open ? (
    <></>
  ) : (
    <div
      id="defaultModal"
      aria-hidden="true"
      className="overflow-y-auto bg-gray-50 bg-opacity-40 overflow-x-hidden fixed mx-auto inset-0  z-50 w-full h-modal md:h-full"
    >
      <CloseClickOutside
        className=" relative w-full sm:w-1/2 xl:w-1/3 top-1/4 mx-auto "
        onClose={close}
      >
        <div className="relative mx-auto p-2 w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex justify-between items-start p-2 rounded-t border-b ">
              <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
              <button
                onClick={close}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <MaterialIcon icon="close" />
              </button>
            </div>

            <div className="p-6 space-y-6">{children}</div>

            <div className="flex items-center p-2 space-x-2 rounded-b border-t border-gray-200 ">
              {primary && (
                <button
                  type="button"
                  onClick={primary.onClick}
                  className="text-white bg-flowius-blue  hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {primary.text}
                </button>
              )}
              {secondary && (
                <button
                  type="button"
                  onClick={secondary.onClick}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                >
                  {secondary.text}
                </button>
              )}
            </div>
          </div>
        </div>
      </CloseClickOutside>
    </div>
  );
};

export default Modal;
