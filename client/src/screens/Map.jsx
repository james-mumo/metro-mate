import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";

function Map() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const defaultPosition = { latitude: -1.286389, longitude: 36.817223 }; // Nairobi coordinates

  return (
    <div className="theeApp">
      <span className="flex bg-slate-800">
        <a
          href="http://localhost:5174"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer bg-slate-700 bg-opacity-80 font-semibold text-white hover:text-white"
        >
          See More
        </a>
      </span>

      <MapContainer
        className="map"
        center={
          currentPosition
            ? [currentPosition.latitude, currentPosition.longitude]
            : [defaultPosition.latitude, defaultPosition.longitude]
        }
        zoom={currentPosition ? 15 : 15} // Adjust zoom level
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {currentPosition && (
          <Marker
            position={[currentPosition.latitude, currentPosition.longitude]}
          >
            <Tooltip>You are here</Tooltip>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
