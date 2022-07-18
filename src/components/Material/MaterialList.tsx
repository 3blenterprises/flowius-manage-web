import { FC, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Material } from "../../services/orgTypes";

interface MaterialListProps {
  materials: Material[];
  className: string;
}

const columns = [
  {
    name: "Type",
    selector: (row: Material) => row.type,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: Material) => row.description,
    sortable: true,
  },
  {
    name: "Material",
    selector: (row: Material) => `${row.material}`,
    sortable: true,
  },
  {
    name: "Size",
    selector: (row: Material) => row.size,
    sortable: true,
  },
  {
    name: "Quantity",
    selector: (row: Material) => `${row.quantity} ${row.unit}`,
    sortable: true,
  },
];

const MaterialList: FC<MaterialListProps> = ({ materials, className }) => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload((n) => !n);
  }, [materials]);

  return (
    <div key={reload ? "1" : "2"} className={`${className} m-1`}>
      <DataTable columns={columns} data={materials} />
    </div>
  );
};

export default MaterialList;
