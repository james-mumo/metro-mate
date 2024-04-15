import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DirectionsBus,
  Explore,
  ShareLocation,
  Troubleshoot,
  AssistantDirection,
  BusAlert,
} from "@mui/icons-material";

const LoggedInHeader = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  React.useEffect(() => {
    const pathName = location.pathname;
    const active = pathName.substring(pathName.lastIndexOf("/") + 1);
    setActiveItem(active.charAt(0).toUpperCase() + active.slice(1));
  }, [location.pathname]);

  return (
    <div className="bg-gray-900 text-white py-0 flex justify-between items-center px-0">
      <nav className="flex-1 flex items-center justify-start py-0">
        <ul className="flex justify-evenly flex-row items-stretch flex-1">
          <li className="flex flex-col">
            <Link
              to="/"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
                activeItem === "Home" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <DirectionsBus className="mr-0" />
              Home
            </Link>
          </li>
          <li className="flex flex-col">
            <Link
              to="/map"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
                activeItem === "Map" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <Explore className="mr-0" />
              Map
            </Link>
          </li>
          <li className="flex flex-col">
            <Link
              to="/stops"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
                activeItem === "Stops" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <ShareLocation className="mr-0" />
              Stops
            </Link>
          </li>
          <li className="flex flex-col">
            <Link
              to="/search"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
                activeItem === "Search" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <Troubleshoot className="mr-0" />
              Search
            </Link>
          </li>
          <li className="flex flex-col">
            <Link
              to="/ptop"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
                activeItem === "Ptop" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <AssistantDirection className="mr-0" />
              P2P
            </Link>
          </li>
          <li className="flex flex-col">
            <Link
              to="/notice"
              className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col ${
                activeItem === "Notice" ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              <BusAlert className="mr-0" />
              Notice
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoggedInHeader;
