import React, { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

function Location() {
  const [locationName, setLocationName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestLocation = async (latitude, longitude) => {
      try {
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({
          query: `${latitude},${longitude}`,
        });
        if (results && results.length > 0) {
          setLocationName(results[0].label);
          setError(null);
        } else {
          setError("Location not found.");
        }
      } catch (error) {
        setError("Error getting location. Please try again later.");
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            requestLocation(latitude, longitude);
          },
          (error) => {
            setError(
              "Error getting location. Please enable location services in your browser settings."
            );
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const renderLocationParts = () => {
    if (locationName) {
      const parts = locationName.split(", ");
      const firstTwo = parts.slice(0, 2).join(", ");
      const nextThree = parts.slice(2, 5).join(", ");
      const last = parts.slice(5, 8).join(", ");
      const rest = parts.slice(8).join(", ");

      return (
        <div>
          <div>{firstTwo}</div>
          <div>{nextThree}</div>
          <div>{last}</div>
          <div>{rest}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {error && (
        <div className="text-red-500 font-semibold bg-gray-700 p-2 mb-4 rounded">
          {error}
        </div>
      )}
      {locationName && (
        <div className="text-green-500 font-semibold bg-gray-700 p-2 rounded">
          {renderLocationParts()}
        </div>
      )}
    </div>
  );
}

export default Location;
