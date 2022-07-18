import { FC, useCallback, useContext, useEffect, useState } from "react";
import Map, { Marker, FullscreenControl, MapboxEvent } from "react-map-gl";
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";
import CaseDetailPopUp from "../components/case/CaseDetail";
import CloseClickOutside from "../components/ClickOutside";
import Loader from "../components/Loader";
import MaterialList from "../components/Material/MaterialList";
import Modal from "../components/modal/Modal";
import { ProjectContext } from "../context/ProjectContext";
import { getProjectCases } from "../services/caseService";
import { ICases, Material } from "../services/orgTypes";

const Home: FC = () => {
  const [cases, setCases] = useState<ICases[]>([]);
  const [loading, setLoading] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number }>();
  const [selectedCase, setCase] = useState<ICases>();
  const [selectedMaterials, setMaterials] = useState<Material[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const projectContext = useContext(ProjectContext);
  const { id } = projectContext.selectedProject;
  const [openTab, setOpenTab] = useState(1);

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

  const markerClicked = (e: MapboxEvent<MouseEvent>, _case: ICases) => {
    const _pos = { left: e.originalEvent.x, top: e.originalEvent.y };
    setCase(_case);
    setPos(_pos);
  };

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  const lineChart = () => {
    const a = [];
    for (let index = 0; index < 10; index++) {
      const offSet = index % 2 === 0 ? 0 - index : index;
      const dd = data.map((d) => {
        return { ...d, y: d.y + 2 + offSet + 10 };
      });
      a.push(<LineSeries key={Math.random()} data={dd} />);
    }
    return a;
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="m-2 w-full h-1/3 flex flex-1 justify-start items-center">
        <div className="w-1/2">
          <XYPlot width={550} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            {lineChart()}
          </XYPlot>
        </div>

        <div className="w-1/2">
          <XYPlot width={550} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries barWidth={1} data={data} />
          </XYPlot>
        </div>
      </div>
      <div id="MapContainer" className="m-2 flex flex-col w-4/5 h-2/3">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAP_BOX_TOKEN}
          initialViewState={{
            longitude: 39,
            latitude: 9,
            zoom: 5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <FullscreenControl containerId="MapContainer" />
          {cases.map((c, i) => {
            if (!c.geoLocation) return <div key={`${id}_${i}`}></div>;
            const location = c.geoLocation.split("/");
            return (
              <Marker
                key={`${id}_${i}`}
                onClick={(e) => markerClicked(e, c)}
                latitude={Number(location[0])}
                longitude={Number(location[2])}
                anchor="bottom"
              />
            );
          })}
        </Map>
        {pos && selectedCase && (
          <CaseDetailPopUp
            pos={pos}
            show={true}
            singleCase={selectedCase}
            close={() => {
              setCase(undefined);
              setPos(undefined);
            }}
          />
        )}
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default Home;
