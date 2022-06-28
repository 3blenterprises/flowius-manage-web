import { FC, useCallback, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Badge from "../components/badge/Badge";
import { ProjectContext } from "../context/ProjectContext";
import { deleteCase, getProjectCases } from "../services/caseService";
import { ICases } from "../services/orgTypes";
import Loader from "../components/Loader";
import Design from "../components/MaterialDesign/MaterialDesign";
import MaterialIcon from "../components/MaterialIcon";
import { toast } from "react-toastify";

interface Selected {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: ICases[];
}

const Cases: FC = () => {
  const [cases, setCases] = useState<ICases[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Selected>();
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

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };

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
      cell: (row: ICases) => <Design>{row.materials.length}</Design>,
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
    </div>
  );
};

export default Cases;
