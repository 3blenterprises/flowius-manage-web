import { FC, useCallback, useContext, useEffect, useState } from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";

import { ProjectContext } from "../context/ProjectContext";
import { getProjectCases } from "../services/caseService";
import { ICases } from "../services/orgTypes";

const Home: FC = () => {
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
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="m-2 w-full h-1/2 flex flex-1 justify-start items-center">
        Charts go here
      </div>
      <div className="m-2 w-4/5 h-1/2">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAP_BOX_TOKEN}
          initialViewState={{
            longitude: 39,
            latitude: 9,
            zoom: 8.75,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <FullscreenControl />
          {cases.map((c, i) => {
            if (!c.geoLocation) return <div key={`${id}_${i}`}></div>;
            const location = c.geoLocation.split("/");
            return (
              <Marker
                key={`${id}_${i}`}
                latitude={Number(location[0])}
                longitude={Number(location[2])}
                anchor="bottom"
              />
            );
          })}
        </Map>
      </div>
    </div>
  );
};

export default Home;
