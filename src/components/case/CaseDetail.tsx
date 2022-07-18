import { FC } from "react";
import { useState } from "react";
import { formatDate } from "../../pages/Cases";
import { ICases } from "../../services/orgTypes";
import MaterialList from "../Material/MaterialList";
import MaterialIcon from "../MaterialIcon";
import Modal from "../modal/Modal";

interface CaseDetailPopUpProps {
  pos: { left: number; top: number };
  show: boolean;
  singleCase: ICases;
  close: () => void;
}

const CaseDetailPopUp: FC<CaseDetailPopUpProps> = ({
  pos,
  show,
  singleCase,
  close,
}) => {
  const [openTab, setOpenTab] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  return !show ? (
    <div />
  ) : (
    <div>
      <div
        className="bg-white shadow shadow-gray-300 rounded-sm z-50 fixed"
        style={{ ...pos }}
      >
        <div className="flex flex-col p-2">
          <div className="">
            <button onClick={close} className="flex w-6 float-right   ">
              <MaterialIcon icon="close" />
            </button>
          </div>
          <div className="flex mb-2 text-sm ">
            <span className="font-semibold italic mr-2 ">Case Name:</span>
            <span>{singleCase.caseName}</span>
          </div>
          <div className="flex mb-2 text-sm ">
            <span className="font-semibold italic mr-2 ">
              Case Description:
            </span>
            <span>{singleCase.description}</span>
          </div>
          <div className="flex mb-2 text-sm ">
            <span className="font-semibold italic mr-2 ">Created At:</span>
            <span>{formatDate(singleCase.timestamp.toDate())}</span>
          </div>
          <div className="flex mb-2 text-sm ">
            <span className="font-semibold italic mr-2 ">Status:</span>
            <span>{singleCase.done ? "Completed" : "Open"}</span>
          </div>
          <div className="flex mb-2 text-sm ">
            <span className="font-semibold italic mr-2 ">Created By:</span>
            <span>{singleCase.userId}</span>
          </div>
          <button
            className=" text-flowius-blue mt-1"
            onClick={() => setOpenModal(true)}
          >
            <MaterialIcon icon="info" />
          </button>
        </div>
      </div>

      <div>
        <Modal
          open={openModal}
          className={
            "w-[220%] flex item-left justify-start mt-[-25%] ml-[-35%] md:h-auto"
          }
          close={() => setOpenModal(false)}
          title={"Details"}
          primary={{
            text: "Done",
            onClick: () => setOpenModal(false),
          }}
        >
          <div className="w-full">
            <ul
              className="flex flex-wrap py- -mb-px text-sm font-medium text-center border-b-2 border-gray-200 dark:border-flowius-blue       "
              role="tablist"
            >
              <li className="mb-0 mr-auto pl-0 pr-0 last:mr-0 flex-auto text-left  rounded-t-lg ">
                <a
                  className={
                    "text-xs rounded px-3 py-1 font-bold hover:text-white hover:bg-flowius-blue "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Details
                </a>
              </li>
              <li className="-mb-px last:mr-0 flex-auto text-left pl-0 ">
                <a
                  className={
                    "text-xs rounded px-3 py-1 font-bold hover:text-white hover:bg-flowius-blue "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Material List
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-fit break-words bg-white w-full mb-6 shadow-lg ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="flex mb-2 text-sm ">
                      <div className="justify-between">
                        <div className="flex mb-2 text-sm ">
                          <span className="font-semibold italic mr-2 ">
                            Case Name:
                          </span>
                          <span>{singleCase.caseName}</span>
                        </div>
                        <div className="flex mb-2 text-sm ">
                          <span className="font-semibold italic mr-2 ">
                            Case Description:
                          </span>
                          <span>{singleCase.description}</span>
                        </div>
                        <div className="flex mb-2 text-sm ">
                          <span className="font-semibold italic mr-2 ">
                            Created At:
                          </span>
                          <span>
                            {formatDate(singleCase.timestamp.toDate())}
                          </span>
                        </div>
                        <div className="flex mb-2 text-sm ">
                          <span className="font-semibold italic mr-2 ">
                            Status:
                          </span>
                          <span>{singleCase.done ? "Completed" : "Open"}</span>
                        </div>
                        <div className="flex mb-2 text-sm ">
                          <span className="font-semibold italic mr-2 ">
                            Created By:
                          </span>
                          <span>{singleCase.userId}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <MaterialList
                      className={""}
                      materials={singleCase.materials}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CaseDetailPopUp;
