import { FC, useCallback, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Badge from "../components/badge/Badge";
import Spinner from "../components/Spinner";
import { ProjectContext } from "../context/ProjectContext";
import { getProjectCases } from "../services/caseService";
import { ICases } from "../services/orgTypes";
import Loader from "../components/Loader";

const Cases: FC = () => {
  const [cases, setCases] = useState<ICases[]>([]);
  const [loading, setLoading] = useState(false);
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
      selector: (row: ICases) => row.materials.length,
      sortable: true,
    },
    {
      name: "Completed",
      cell: (row: ICases) => (
        <Badge done={row.done}>{row.done ? "Completed" : "Open"}</Badge>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="m-2 w-full">
      {loading ? (
        <Loader />
      ) : (
        <DataTable pagination={true} columns={columns} data={cases} />
      )}
    </div>
  );
};

export default Cases;
