import { FC, useCallback, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Badge from "../components/badge/Badge";
import { ProjectContext } from "../context/ProjectContext";
import { deleteCase, getProjectCases } from "../services/caseService";
import { ICases, Material } from "../services/orgTypes";
import Loader from "../components/Loader";
import Design from "../components/MaterialDesign/MaterialDesign";
import MaterialIcon from "../components/MaterialIcon";
import { toast } from "react-toastify";
import Modal from "../components/modal/Modal";
import MaterialList from "../components/Material/MaterialList";

interface Selected {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: ICases[];
}

export const formatDate = (date: Date) => {
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};

const Cases: FC = () => {
  const [cases, setCases] = useState<ICases[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Selected>();
  const [openModal, setOpenModal] = useState(false);
  const [selectedMaterials, setMaterials] = useState<Material[]>([]);
  const projectContext = useContext(ProjectContext);
  const { id } = projectContext.selectedProject;

  const pullCases = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    const cases = await getProjectCases(id);
    setCases(cases);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    pullCases();
  }, [pullCases]);
  const columns = [
    {
      name: "Id",
      selector: (row: ICases) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row: ICases) => row.caseName,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row: ICases) => row.description,
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row: ICases) => row.userId,
      sortable: true,
    },
    {
      name: "Material",
      cell: (row: ICases) => (
        <Design
          onClick={() => {
            setMaterials(row.materials);
            setOpenModal(true);
          }}
        >
          {row.materials.length}
        </Design>
      ),
      sortable: true,
    },
    {
      name: "Completed",
      cell: (row: ICases) => (
        <Badge done={row.done}>{row.done ? "Completed" : "Open"}</Badge>
      ),
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row: ICases) => formatDate(row.timestamp.toDate()),
      sortable: true,
    },
    {
      name: "Location",
      cell: (c: ICases) => {
        if (!c.geoLocation) return <div />;
        const location = c.geoLocation.split("/");
        const lat = location[0];
        const lng = location[2];
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://maps.google.com/?q=${lat},${lng}`}
          >
            <MaterialIcon className="text-flowius-blue" icon="share_location" />
          </a>
        );
      },
    },
  ];
  const deleteSelected = async () => {
    if (!selected) return;
    const { selectedRows } = selected;
    for (const row of selectedRows) {
      await deleteCase(id, row.id);
    }
    toast.success(`${selectedRows.length} Items deleted`);
  };

  return (
    <div className="m-2 w-full">
      {(selected?.selectedCount ?? 0) > 0 && (
        <MaterialIcon onClick={deleteSelected} icon="delete" />
      )}
      {loading ? (
        <Loader />
      ) : (
        <DataTable
          selectableRows={false}
          onSelectedRowsChange={setSelected}
          pagination={true}
          columns={columns}
          data={cases}
        />
      )}

      <Modal
        title="Materials"
        open={openModal}
        close={() => setOpenModal(false)}
        primary={{
          text: "Done",
          onClick: () => setOpenModal(false),
        }}
      >
        <MaterialList materials={selectedMaterials} />
      </Modal>
    </div>
  );
};

export default Cases;
