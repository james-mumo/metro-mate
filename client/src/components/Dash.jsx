import React, { useState } from "react";

import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Collapsible from "react-collapsible";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

import {
  SettingsInputAntenna,
  AutoAwesome,
  Badge,
  Deck,
} from "@mui/icons-material";
import { appName, minibuses, buses } from "../utils/data"; // Import the exported arrays

function Dash() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsible = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="flex flex-col overflow-y-scroll bg-gray-900 w-full gap-1">
      <div className="flex flex-row h-[30px] justify-evenly gap-2 overflow-x-auto mt-2">
        <ArrowBackIosNew className="text-gray-400 text-sm" />
        <span className="gap-1 flex cursor-pointer px-3">
          <SettingsInputAntenna className="text-yellow-400" />
          <span className="font-bold">NearBy</span>
        </span>
        <span className="gap-1 flex cursor-pointer px-3">
          <AutoAwesome className="text-yellow-400" />
          <span className="font-bold">Starred</span>
        </span>
        <span className="gap-1 flex cursor-pointer px-3">
          <Badge className="text-yellow-400" />
          <span className="font-bold">Work</span>
        </span>
        <span className="gap-1 flex cursor-pointer px-3">
          <Deck className="text-yellow-400" />
          <span className="font-bold">Home</span>
        </span>
        <span className="gap-1 flex cursor-pointer px-3">
          <Deck className="text-yellow-400" />
          <span className="font-bold">Collection</span>
        </span>
        <ArrowForwardIos className="text-gray-400 text-sm" />
      </div>
      <div className="flex flex-row h-[20px] justify-evenly gap-2 overflow-x-auto mt-1">
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
      <div className=" bg-gray-800">
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
          <ul className=" bg-gray-800 flex flex-col gap-2 px-1">
            {buses.map((bus) => (
              <li
                key={bus.id}
                className="rounded-md flex gap-2 w-full cursor-pointer bg-gray-700"
              >
                <span className="text-yellow-400 p-2 font-bold items-center flex align-middle text-lg">
                  {bus.busNo}
                </span>
                <div className="flex flex-col w-full">
                  <div className="flex px-3 w-full ">
                    <span className="flex flex-1 gap-2 text-sm items-center align-middle">
                      To: <span className="font-bold text-md"> {bus.to}</span>
                      <span>(Ksh 60)</span>
                    </span>

                    <span className="text-sm gap-1 flex">
                      <span className="text-yellow-400 font-bold">
                        {" "}
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
                  <span className="px-2 text-[10px] italic font-medium text-yellow-400">
                    {bus.sacco}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
}

export default Dash;
