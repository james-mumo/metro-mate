import React, { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import ListRoutes from "../components/search/ListRoutes";
import ListBuses from "../components/search/ListBuses";

function Summ() {
  const [activeItem, setActiveItem] = useState("Recent");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col overflow-y-scroll bg-gray-900 w-full gap-0">
      <div className="flex flex-col flex-1 h-max">
        <div className="flex flex-row h-[40px] justify-evenly gap-2 overflow-x-auto mt-0 left-0 z-10 right-0 bg-gray-900 sticky top-0">
          <ArrowBackIosNew className="text-gray-400 text-sm" />
          <span
            onClick={() => handleClick("Recent")}
            className={`gap-1 flex cursor-pointer px-3 ${
              activeItem === "Recent" ? "border-b-2 border-yellow-400" : ""
            } focus:border-b-2 focus:border-yellow-400`}
          >
            <span className="font-bold">Recent</span>
          </span>

          <span
            onClick={() => handleClick("Routes")}
            className={`gap-1 flex cursor-pointer px-3 ${
              activeItem === "Routes" ? "border-b-2 border-yellow-400" : ""
            } focus:border-b-2 focus:border-yellow-400`}
          >
            <span className="font-bold">Routes</span>
          </span>

          <span
            onClick={() => handleClick("Buses")}
            className={`gap-1 flex cursor-pointer px-3 ${
              activeItem === "Buses" ? "border-b-2 border-yellow-400" : ""
            } focus:border-b-2 focus:border-yellow-400`}
          >
            <span className="font-bold">Buses</span>
          </span>
          <span
            onClick={() => handleClick("Minibuses")}
            className={`gap-1 flex cursor-pointer px-3 ${
              activeItem === "Minibuses" ? "border-b-2 border-yellow-400" : ""
            } focus:border-b-2 focus:border-yellow-400`}
          >
            <span className="font-bold">Minibuses</span>
          </span>
          <span
            onClick={() => handleClick("Favourites")}
            className={`gap-1 flex cursor-pointer px-3 ${
              activeItem === "Favourites" ? "border-b-2 border-yellow-400" : ""
            } focus:border-b-2 focus:border-yellow-400`}
          >
            <span className="font-bold">Favourites</span>
          </span>
          <ArrowForwardIos className="text-gray-400 text-sm" />
        </div>

        {/* Conditionally render ListRoutes or ListBuses based on the activeItem */}
        {activeItem === "Routes" && <ListRoutes />}
        {activeItem === "Buses" && <ListBuses />}
      </div>
    </div>
  );
}

export default Summ;
