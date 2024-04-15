import React, { useState, useEffect } from "react";

const backend_uri = "http://localhost:4000/api/";

export const useBuses = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [busesResponse, routesResponse] = await Promise.all([
          fetch(`${backend_uri}buses`),
          fetch(`${backend_uri}routes`),
        ]);

        if (!busesResponse.ok || !routesResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const busesData = await busesResponse.json();
        const routesData = await routesResponse.json();

        setBuses(busesData);
        setRoutes(routesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateFares = () => {
      setBuses((prevBuses) => {
        return prevBuses.map((bus) => ({
          ...bus,
          calculateFare: function () {
            let totalFare = 0;
            const route = routes.find((route) => route.id === bus.routeId);
            if (!route) {
              throw new Error(`Route with ID ${bus.routeId} not found.`);
            }
            const currentStageIndex = route.stages.findIndex(
              (stage) => stage.name === bus.currentLocation
            );
            if (currentStageIndex !== -1) {
              for (let i = currentStageIndex; i < route.stages.length; i++) {
                totalFare += route.stages[i].fare;
              }
            }
            return totalFare;
          },
        }));
      });
    };

    updateFares();
  }, [routes]);

  return { loading, error, buses, routes };
};

export const useRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch(`${backend_uri}routes`);
        if (!response.ok) {
          throw new Error("Failed to fetch routes");
        }
        const data = await response.json();
        setRoutes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { loading, error, routes };
};
