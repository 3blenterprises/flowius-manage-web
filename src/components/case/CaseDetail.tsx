import { FC } from "react";
import { formatDate } from "../../pages/Cases";
import { ICases } from "../../services/orgTypes";
import CloseClickOutside from "../ClickOutside";

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
  return !show ? (
    <div />
  ) : (
    <CloseClickOutside onClose={close}>
      <div
        className="bg-white shadow shadow-gray-300 rounded-sm z-50 fixed"
        style={{ ...pos }}
      >
        <div className="flex flex-col p-2">
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
        </div>
      </div>
    </CloseClickOutside>
  );
};

export default CaseDetailPopUp;
