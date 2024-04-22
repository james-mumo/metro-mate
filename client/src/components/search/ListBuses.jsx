import React, { useState, useEffect } from "react";
import { useRoutes, useBuses } from "../../utils/api";

function ListBuses() {
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
        <span className="text-yellow-400 font-semibold pl-2">Buses</span>
      </div>
      <div className="gap-1 flex-col px-2 flex rounded-md">
        {buses.map((bus) => {
          const route = routes.find((route) => route._id === bus.routeId._id);
          const currentStage = route.stages.find(
            (stage) => stage.name === bus.currentLocation
          );
          const nextStage = currentStage
            ? route.stages.find((stage) => stage.name === currentStage.next)
            : null;

          const calculateFare = () => {
            let totalFare = 0;
            const currentStageIndex = route.stages.findIndex(
              (stage) => stage.name === bus.currentLocation
            );
            if (currentStageIndex !== -1) {
              for (let i = currentStageIndex; i < route.stages.length; i++) {
                totalFare += route.stages[i].fare;
              }
            }
            return totalFare;
          };

          // Attach calculateFare function to bus object
          bus.calculateFare = calculateFare;

          return (
            <div
              key={bus.id}
              className="px-2 py-1 flex flex-col gap-0 bg-gray-800 cursor-pointer"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold">{bus.numberPlate}</span>
                  <h2 className="text-yellow-400 text-sm flex-1">
                    Bus {bus.busNo}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center align-middle">
                    <span className="font-semibold">{route.name}</span>
                    <span className="text-[11px] font-semibold">
                      (Ksh {bus.calculateFare()})
                    </span>
                  </div>
                  <span className="text-yellow-400 text-sm">{bus.sacco}</span>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span>
                  At:{" "}
                  <span className="font-semibold">{bus.currentLocation}</span>(
                  {bus.timeToCurrentLocation} mins away)
                </span>
                <div className="flex justify-between  text-sm">
                  <span>
                    Next Stop:{" "}
                    <span className="font-semibold">
                      {nextStage ? nextStage.name : "-"}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>
                  Capacity:{" "}
                  <span className="font-semibold">{bus.capacity} Seater</span>
                </span>
                <span>
                  {bus.capacity > 0 ? (
                    <span className="text-green-500 font-semibold">
                      Seats Available
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">Full</span>
                  )}
                </span>
              </div>
            </div>
          );
        })}
        {buses.length === 0 && (
          <div className="px-3 flex flex-col gap-2 bg-gray-800">
            <span className="text-yellow-400 text-sm">No buses available</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBuses;
