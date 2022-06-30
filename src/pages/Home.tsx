import { FC, useCallback, useContext, useEffect, useState } from "react";
import Map, { Marker, FullscreenControl, MapboxEvent } from "react-map-gl";
import CaseDetailPopUp from "../components/case/CaseDetail";
import Loader from "../components/Loader";

import { ProjectContext } from "../context/ProjectContext";
import { getProjectCases } from "../services/caseService";
import { ICases } from "../services/orgTypes";

const Home: FC = () => {
  const [cases, setCases] = useState<ICases[]>([]);
  const [loading, setLoading] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number }>();
  const [selectedCase, setCase] = useState<ICases>();

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

  const markerClicked = (e: MapboxEvent<MouseEvent>, _case: ICases) => {
    const _pos = { left: e.originalEvent.x, top: e.originalEvent.y };
    setCase(_case);
    setPos(_pos);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="m-2 w-full h-1/3 flex flex-1 justify-start items-center">
        Charts go here
      </div>
      <div className="text-xl pl-4 self-start font-semibold py-4">
        Cases Location:
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
