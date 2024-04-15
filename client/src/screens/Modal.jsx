import React from "react";
import { useRoutes } from "../utils/api";
import { Paid } from "@mui/icons-material";
import { Loupe } from "@mui/icons-material";

function Modal({ isOpen, onClose, bus }) {
  const { routes, loading, error } = useRoutes(); // Fetch the routes

  const closeModal = () => {
    onClose(false);
  };

  // Function to calculate the fare
  const calculateFare = () => {
    if (loading || error || !routes) {
      return "Loading..."; // Return loading message if routes are still loading or error occurred
    }
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
  };

  return (
    <>
      {isOpen && (
        <div className="modal absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-60 px-2">
          <div className="flex flex-col w-full bg-gray-950">
            <div className="flex p-2">
              <span className="flex-1">Book item</span>
              <span
                onClick={closeModal}
                className="bg-red-600 rounded-sm px-1 cursor-pointer"
              >
                Close
              </span>
            </div>
            <div className="bg-gray-800 border-l border-r border-gray-950 p-4 flex shadow-lg">
              <span className="text-yellow-400 p-2 font-bold items-center flex align-middle text-lg flex-col">
                {bus.busNo}
              </span>
              <div className="flex flex-col w-full">
                <div className="flex px-3 w-full">
                  <span className="flex flex-1 gap-2 text-sm items-center align-middle">
                    To:
                    <span className="font-bold text-md"> {bus.to}</span>
                    <span className="text-[12px]">(Ksh.{calculateFare()})</span>
                  </span>
                  <span className="text-sm gap-1 flex">
                    <span className="text-yellow-400 font-bold">
                      {bus.timeToStage} - {bus.timeToStage + 12}
                    </span>{" "}
                    mins
                  </span>
                </div>
                <div className="flex px-3">
                  <span className="flex flex-1 gap-2 text-sm items-center align-bottom">
                    At:
                    <span className="font-bold text-md">
                      {bus.currentLocation}
                    </span>
                  </span>
                  <span className="text-sm gap-2 flex">
                    {bus.timeToCurrentLocation} mins
                  </span>
                </div>
                <div className="flex px-3">
                  <span className="px-0 ml-0 flex flex-1 gap-2 text-[10px] italic font-medium text-yellow-400">
                    <span> {bus.numberPlate}</span>
                    {bus.sacco}
                  </span>

                  <span className="text-[10px] italic font-medium text-emerald-400">
                    {bus.capacity - 1} Available
                  </span>
                </div>
              </div>
            </div>

            <span className="flex justify-center bg-gray-800 border-b border-gray-950 border-l border-r gap-2 items-center pb-2">
              <span className="flex cursor-pointer border border-emerald-500 px-2 py-1 rounded-sm hover:bg-emerald-800 bg-emerald-600 transition-all duration-200">
                <Paid /> Pay
              </span>
              <span className="flex cursor-pointer border border-emerald-500 px-2 py-1 rounded-sm hover:bg-emerald-800 bg-emerald-600 transition-all duration-200">
                <Loupe />
                Pay Later
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
