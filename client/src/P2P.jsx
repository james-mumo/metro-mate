import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";
import iconM from "./placeholder.png";
import placesInNairobi from "./placesData";

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

  const defaultPosition = { latitude: -1.286389, longitude: 36.817223 }; // Default to Nairobi coordinates

  // Define icon for current location marker
  const currentLocationMarkerIcon = new L.Icon({
    iconUrl: iconM,
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  return (
    <div className="theeApp">
      <MapContainer
        className="map"
        center={
          currentPosition
            ? [currentPosition.latitude, currentPosition.longitude]
            : [defaultPosition.latitude, defaultPosition.longitude]
        }
        zoom={currentPosition ? 12 : 12} // Zoom level adjusted to 12
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {currentPosition && (
          <Marker
            position={[currentPosition.latitude, currentPosition.longitude]}
            icon={currentLocationMarkerIcon} // Use the custom icon for current location marker
          >
            <Tooltip>You are here</Tooltip>
          </Marker>
        )}
        {/* Render markers for places within Nairobi */}
        {placesInNairobi.map((place, index) => (
          <Marker key={index} position={[place.latitude, place.longitude]}>
            <Tooltip>{place.name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
