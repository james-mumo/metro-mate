import React, { useState } from "react";
import { useRoutes, useBuses } from "../../utils/api";
import { RadioButtonUnchecked } from "@mui/icons-material";

function ListRoutes() {
  const { loading: busesLoading, error: busesError, buses } = useBuses();
  const { loading: routesLoading, error: routesError, routes } = useRoutes();

  if (busesLoading || routesLoading) {
    return <div>Loading...</div>;
  }

  if (busesError || routesError) {
    return <div>Error: {busesError || routesError}</div>;
  }
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col">
        <span className="text-yellow-400 font-semibold">Routes</span>
      </div>
      <div className="gap-2 flex-col flex">
        {routes.map((route) => {
          // Calculate total fare for the route
          const totalFare = route.stages.reduce(
            (total, stage) => total + stage.fare,
            0
          );

          // Filter buses for this route
          const filteredBuses = buses.filter(
            (bus) => bus.routeId._id === route._id
          );

          return (
            <div
              key={route.id}
              className="px-3 flex flex-col gap-0 bg-gray-800"
            >
              <div className="flex">
                <h2 className="text-yellow-400 text-sm flex-1">{route.name}</h2>
                <h2 className="text-yellow-400 text-sm">Ksh. {totalFare}</h2>
              </div>
              <div className="flex ">
                <span className="text-sm font-semibold">Via: </span>
                <div className="flex w-full overflow-scroll">
                  <div className="flex w-full flex-wrap">
                    {route.stages.map((stage) => (
                      <span
                        className="flex px-2 text-sm opacity-85 items-center gap-1"
                        key={stage.name}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <RadioButtonUnchecked style={{ fontSize: 8 }} />{" "}
                        {stage.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3>Buses on this route:</h3>
              <div className="gap-2 flex flex-col border border-yellow-300 px-2 rounded-sm border-opacity-35">
                {filteredBuses.length > 0 ? (
                  filteredBuses.map((bus) => (
                    <div key={bus.id} className="flex flex-col">
                      <span className="flex ">
                        <span className="flex flex-col flex-1">
                          <div className="text-sm text-gray-300">
                            {bus.sacco} {bus.busNo}
                          </div>
                          <span className="text-sm font-semibold text-yellow-300 opacity-80">
                            {bus.numberPlate}
                          </span>
                        </span>

                        <span className="flex flex-col text-sm">
                          <span className="flex items-center align-middle gap-1">
                            <span className="text-sm font-semibold">At</span>
                            {bus.currentLocation} {">"} {bus.to}
                          </span>

                          <span>
                            {bus.distanceToCurrentLocation} km (
                            {bus.timeToCurrentLocation} mins),
                            <span className="ml-2 text-emerald-400 font-semibold">
                              {bus.capacity} Seater
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  ))
                ) : (
                  <div>No buses available</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListRoutes;
