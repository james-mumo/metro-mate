import React from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div className="theeApp">
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Tooltip>You are in London now</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
