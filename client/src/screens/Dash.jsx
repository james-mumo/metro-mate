import React, { useState } from "react";
import Modal from "./Modal";

import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Collapsible from "react-collapsible";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

import {
  SettingsInputAntenna,
  AutoAwesome,
  Badge,
  Deck,
} from "@mui/icons-material";
import { useBuses, useRoutes } from "../utils/api";

function Dash() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleBusItemClick = (bus) => {
    setSelectedBus(bus);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsible = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const [activeItem, setActiveItem] = useState("NearBy");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const { loading: busesLoading, error: busesError, buses } = useBuses();
  const { loading: routesLoading, error: routesError, routes } = useRoutes();

  if (busesLoading || routesLoading) {
    return <div className="bg-gray-800 w-full">Loading...</div>;
  }

  if (busesError || routesError) {
    return <div>Error: {busesError || routesError}</div>;
  }

  return (
    <div className="flex flex-col overflow-y-scroll bg-gray-900 w-full gap-1">
      <div className="flex flex-row h-[40px] justify-evenly gap-2 overflow-x-auto mt-2">
        <ArrowBackIosNew className="text-gray-400 text-sm" />
        <span
          onClick={() => handleClick("NearBy")}
          className={`gap-1 flex cursor-pointer px-3 ${
            activeItem === "NearBy" ? "border-b-2 border-yellow-400" : ""
          } focus:border-b-2 focus:border-yellow-400`}
        >
          <SettingsInputAntenna className="text-yellow-400" />
          <span className="font-bold">NearBy</span>
        </span>
        <span
          onClick={() => handleClick("Starred")}
          className={`gap-1 flex cursor-pointer px-3 ${
            activeItem === "Starred" ? "border-b-2 border-yellow-400" : ""
          } focus:border-b-2 focus:border-yellow-400`}
        >
          <AutoAwesome className="text-yellow-400" />
          <span className="font-bold">Starred</span>
        </span>
        <span
          onClick={() => handleClick("Work")}
          className={`gap-1 flex cursor-pointer px-3 ${
            activeItem === "Work" ? "border-b-2 border-yellow-400" : ""
          } focus:border-b-2 focus:border-yellow-400`}
        >
          <Badge className="text-yellow-400" />
          <span className="font-bold">Work</span>
        </span>
        <span
          onClick={() => handleClick("Home")}
          className={`gap-1 flex cursor-pointer px-3 ${
            activeItem === "Home" ? "border-b-2 border-yellow-400" : ""
          } focus:border-b-2 focus:border-yellow-400`}
        >
          <Deck className="text-yellow-400" />
          <span className="font-bold">Home</span>
        </span>
        <span
          onClick={() => handleClick("Collection")}
          className={`gap-1 flex cursor-pointer px-3 ${
            activeItem === "Collection" ? "border-b-2 border-yellow-400" : ""
          } focus:border-b-2 focus:border-yellow-400`}
        >
          <Deck className="text-yellow-400" />
          <span className="font-bold">Collection</span>
        </span>
        <ArrowForwardIos className="text-gray-400 text-sm" />
      </div>
      <div className="flex flex-row h-[30px] items-center justify-evenly gap-2 overflow-x-auto mt-1">
        <span className="font-bold mr-3 text-sm">
          Range <span>(m)</span>:
        </span>
        <div className="flex flex-1 gap-3 items-end">
          <span className="flex bg-slate-500 px-3 rounded-md items-center align-middle text-[10px] cursor-pointer">
            100
          </span>
          <span className="flex bg-slate-500 px-3 rounded-md items-center align-middle text-[10px] cursor-pointer">
            200
          </span>
          <span className="flex bg-slate-500 px-3 rounded-md items-center align-middle text-[10px] cursor-pointer">
            400
          </span>
          <span className="flex bg-slate-500 px-3 rounded-md items-center align-middle text-[10px] cursor-pointer">
            800
          </span>
          <span className="flex bg-slate-500 px-3 rounded-md items-center align-middle text-[10px] cursor-pointer">
            CUSTOM
          </span>
        </div>
      </div>

      <hr />

      {/* Render buses */}
      <div className="h-screen w-full bg-gray-800">
        <Collapsible
          trigger={
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleCollapsible}
            >
              <span>Buses:</span>
              {isOpen ? (
                <ExpandLess className="text-white ml-2" />
              ) : (
                <ExpandMore className="text-white ml-2" />
              )}
            </div>
          }
          open={isOpen}
        >
          <ul className="bg-gray-800 flex flex-col gap-2 px-1">
            {buses.map((bus) => {
              const calculateFare = () => {
                let totalFare = 0;
                const route = routes.find(
                  (route) => route._id === bus.routeId._id
                );
                if (!route) {
                  throw new Error(
                    `Route with ID ${bus.routeId._id} not found.`
                  );
                }
                const currentStageIndex = route.stages.findIndex(
                  (stage) => stage.name === bus.currentLocation
                );
                if (currentStageIndex !== -1) {
                  for (
                    let i = currentStageIndex;
                    i < route.stages.length;
                    i++
                  ) {
                    totalFare += route.stages[i].fare;
                  }
                }
                return totalFare;
              };

              return (
                <li
                  key={bus.id}
                  className="rounded-md flex gap-2 w-full cursor-pointer bg-gray-700"
                  onClick={() => handleBusItemClick(bus)}
                >
                  <span className="text-yellow-400 p-2 font-bold items-center flex align-middle text-lg">
                    {bus.busNo}
                  </span>
                  <div className="flex flex-col w-full">
                    <div className="flex px-3 w-full ">
                      <span className="flex flex-1 gap-2 text-sm items-center align-middle">
                        To:
                        <span className="font-bold text-md"> {bus.to}</span>
                        <span className="text-[12px]">
                          (Ksh.{calculateFare()})
                        </span>
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
                    <span className="px-2 ml-1 flex gap-2 text-[10px] italic font-medium text-yellow-400">
                      <span> {bus.numberPlate}</span>
                      {bus.sacco}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Collapsible>
      </div>

      {/* Render Modal */}
      {selectedBus && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedBus(null)}
          bus={selectedBus}
        />
      )}
    </div>
  );
}

export default Dash;
