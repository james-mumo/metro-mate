import React, { useState } from "react";
import { useRoutes } from "../../utils/api";

function AllRoutes() {
  const { loading: busesLoading, error: busesError, buses } = useBuses();
  const { loading: routesLoading, error: routesError, routes } = useRoutes();

  if (busesLoading || routesLoading) {
    return <div>Loading...</div>;
  }

  if (busesError || routesError) {
    return <div>Error: {busesError || routesError}</div>;
  }
  return (
    <div>
      {routes.map((route) => (
        <div key={route.id}>
          <h2>{route.name}</h2>
          <ul>
            {route.stages.map((stage) => (
              <li key={stage.name}>
                <strong>{stage.name}</strong> to <strong>{stage.next}</strong>:
                Distance - {stage.distance} km, Time - {stage.time} min, Fare -{" "}
                {stage.fare} $
              </li>
            ))}
          </ul>
          <h3>Buses on this route:</h3>
          <ul>
            {buses
              .filter((bus) => bus.routeId === route.id)
              .map((bus) => (
                <li key={bus.id}>
                  Bus {bus.busNo} - {bus.currentLocation} to {bus.to}: Distance
                  to current location - {bus.distanceToCurrentLocation} km, Time
                  to current location - {bus.timeToCurrentLocation} min,
                  Distance to next stage - {bus.distanceToStage} km, Time to
                  next stage - {bus.timeToStage} min, Capacity - {bus.capacity},
                  Fare - {bus.calculateFare()} $
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AllRoutes;
