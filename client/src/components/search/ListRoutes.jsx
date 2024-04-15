import React from "react";
import { routes, buses } from "../../utils/data"; 
import { RadioButtonUnchecked } from "@mui/icons-material";

function ListRoutes() {
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
          const filteredBuses = buses.filter((bus) => bus.routeId === route.id);

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
              <div>
                {filteredBuses.length > 0 ? (
                  filteredBuses.map((bus) => (
                    <div key={bus.id} className="flex flex-col">
                      <span>
                        Bus {bus.busNo} at {bus.currentLocation} towards{" "}
                        {bus.to}{" "}
                      </span>
                      <span>
                        {bus.distanceToCurrentLocation} km Away (
                        {bus.timeToCurrentLocation} mins),
                        <span className="ml-4">{bus.capacity} Seater</span>
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
