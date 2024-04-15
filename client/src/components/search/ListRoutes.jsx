import React from "react";
import { routes, buses } from "../../utils/data"; // Import routes and buses from your file

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

          return (
            <div
              key={route.id}
              className="px-3 flex flex-col gap-0 bg-gray-800"
            >
              <div className="flex">
                <h2 className="text-yellow-400 text-sm flex-1">{route.name}</h2>
                <h2 className="text-yellow-400 text-sm">Ksh. {totalFare}</h2>
              </div>
              <div className="flex flex-col">
                <span>Via: </span>
                <div className="flex">
                  {route.stages.map((stage) => (
                    <span key={stage.name}>{stage.name}</span>
                  ))}
                </div>
              </div>
              <h3>Buses on this route:</h3>
              <ul>
                {buses
                  .filter((bus) => bus.routeId === route.id)
                  .map((bus) => (
                    <li key={bus.id} className="flex flex-col">
                      <span>
                        Bus {bus.busNo} at {bus.currentLocation} towards{" "}
                        {bus.to}{" "}
                      </span>
                      <span>
                        {bus.distanceToCurrentLocation} km Away (
                        {bus.timeToCurrentLocation} mins),
                        <span className="ml-4">{bus.capacity} Seater</span>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListRoutes;
