import { useState, useEffect } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import "mapbox-gl/dist/mapbox-gl.css";
import Loader from "./Loader";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 5.1154645,
    longitude: -1.2908544,
    zoom: 16,
  });
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch("https://bt-server.onrender.com/payloads")
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 1) {
          // Only one device, show the last location info and clear the markers
          const payload = data[0];
          const { latitude, longitude } =
            payload.uplink_message.decoded_payload;
          setMarkers([{ latitude, longitude }]);
        } else {
          // Multiple devices, show the location info from each device and clear the markers
          const extractedMarkers = data.map((payload) => {
            const { latitude, longitude } =
              payload.uplink_message.decoded_payload;
            return { latitude, longitude };
          });
          setMarkers(extractedMarkers);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

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
          {markers.map((mark, index) => (
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
          ))}
          <div className="absolute top-7 right-[2.8rem] z-10">
            <NavigationControl
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
              }}
              showCompass={true}
            />
          </div>
        </ReactMapGL>
      </div>
    </div>
  );
}
