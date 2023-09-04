import { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import "mapbox-gl/dist/mapbox-gl.css";
import * as shuttleStations from "../data/stations.json";
import Loader from "./Loader";


export default function Map() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStation, setSelectedStation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 5.1154645,
    longitude: -1.2908544,
    pitch: 90,
    zoom: 16,
  });

  useEffect(() => {
    const fetchDataAndUpdateMarkers = () => {
      fetch("https://bt-server.onrender.com/payloads")
        .then((response) => response.json())
        .then((data) => {
          const uniqueDevices = new Set();
          const newMarkers = [];

          for (let i = data.length - 1; i >= 0; i--) {
            const payload = data[i];
            const deviceAddr = payload.end_device_ids.dev_addr;
            if (!uniqueDevices.has(deviceAddr) && newMarkers.length < 2) {
              uniqueDevices.add(deviceAddr);
              const { latitude, longitude } =
                payload.uplink_message.decoded_payload;
              newMarkers.push({ latitude, longitude });
            }

            if (newMarkers.length === 2) {
              break;
            }
          }
          setMarkers(newMarkers);
          setIsLoading(false);

          newMarkers.forEach((busMarker) => {
            shuttleStations.stations.forEach((station) => {
              const distance = calculateDistance(
                busMarker.latitude,
                busMarker.longitude,
                station.latitude,
                station.longitude
              );

              if (distance < 0.1) {
                toast(`Bus is close to ${station.name}`, {
                  icon: "🚌",
                  duration: 5000,
                  style: {
                    padding: "2px 10px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    color: "#000",
                  },
                });
              }
            });
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    };

    const interval = setInterval(fetchDataAndUpdateMarkers, 5000);
    return () => clearInterval(interval);
  }, []);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

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

          {shuttleStations.stations.map((station, index) => (
            <Marker
              key={index}
              latitude={station.latitude}
              longitude={station.longitude}
            >
              <div
                className="station"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedStation(station);
                }}
              >
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className=""
                  color="#ffffff"
                  size="xs"
                />
              </div>
            </Marker>
          ))}

          {selectedStation ? (
            <Popup
              latitude={selectedStation.latitude}
              longitude={selectedStation.longitude}
              onClose={() => {
                setSelectedStation(null);
              }}
            >
              <div>
                <h2>{selectedStation.name}</h2>
              </div>
            </Popup>
          ) : null}

          <div className="absolute top-7 right-[2.8rem] z-10">
            <NavigationControl
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
              }}
              showCompass={true}
            />
          </div>

          <div className="absolute top-[8rem] right-[2.8rem]  z-10">
            <GeolocateControl />
          </div>
        </ReactMapGL>
      </div>
    </div>
  );
}
