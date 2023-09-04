import { useState,
  //  useEffect
   } from "react";
import ReactMapGL, {
  // Marker,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBus } from "@fortawesome/free-solid-svg-icons";
import "mapbox-gl/dist/mapbox-gl.css";
import Loader from "./Loader";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);
  // const [markers, setMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 5.1154645,
    longitude: -1.2908544,
    pitch: 90,
    zoom: 16,
  });

  // useEffect(() => {
  //   const fetchDataAndUpdateMarkers = () => {
  //     fetch("https://bt-server.onrender.com/payloads")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const uniqueDevices = new Set();
  //         const newMarkers = [];

  //         for (let i = data.length - 1; i >= 0; i--) {
  //           const payload = data[i];
  //           const deviceAddr = payload.end_device_ids.dev_addr;
  //           if (!uniqueDevices.has(deviceAddr) && newMarkers.length < 2) {
  //             uniqueDevices.add(deviceAddr);
  //             const { latitude, longitude } =
  //               payload.uplink_message.decoded_payload;
  //             newMarkers.push({ latitude, longitude });
  //           }

  //           if (newMarkers.length === 2) {
  //             break;
  //           }
  //         }
  //         setMarkers(newMarkers);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setIsLoading(false);
  //       });
  //   };

  //   const interval = setInterval(fetchDataAndUpdateMarkers, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  function handleMapLoad() {
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && (
        <div className="absolute inset-0 z-0 min-h-[85vh] flex justify-center items-center bg-[rgba(0,0,0,0.05)]">
          <Loader />
        </div>
      )}
      <div
        style={{
          display: isLoading ? "none" : "block",
          borderRadius: "0px",
          overflow: "hidden",
        }}
      >
        <ReactMapGL
          {...viewport}
          className=""
          width="100%"
          height="calc(100vh - 2px)"
          mapboxApiAccessToken="pk.eyJ1Ijoic2V0aHMxMCIsImEiOiJjbGg5ZXBodm8wNnVwM3JwZDFpZ3M5MW5iIn0.sW5drJM7yvG0z0qkiwQj-w"
          onViewportChange={(nextViewport) => setViewport({ ...nextViewport })}
          minZoom={5}
          onLoad={handleMapLoad}
          maxZoom={30}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v9"
        >
          {/* {markers.map((mark, index) => (
            <Marker
              key={index}
              latitude={mark.latitude}
              longitude={mark.longitude}
            >
              <div className="marker">
                <FontAwesomeIcon
                  icon={faBus}
                  className=""
                  color="#ffffff"
                  size="xs"
                />
              </div>
            </Marker>
          ))} */}
          <div className="absolute top-7 right-[2.8rem] z-10">
            <NavigationControl
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
              }}
              showCompass={true}
            />
          </div>

          <div className="absolute top-[8rem] right-[2.8rem]  z-10">
            <GeolocateControl positionOptions={{ enableHighAccuracy: true }} />
          </div>
        </ReactMapGL>
      </div>
    </div>
  );
}
