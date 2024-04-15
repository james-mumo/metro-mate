import React from "react";
import { AssistantDirectionRounded } from "@mui/icons-material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { TroubleshootRounded } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { ShareLocation } from "@mui/icons-material";
import { BusAlert, Explore } from "@mui/icons-material";
import { useHistory, Link } from "react-router-dom";

const LoggedInHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear specific items from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userType");

    // Redirect to home page
    // window.location.href = '/';
    // window.location.reload();
    history.push("/");
  };

  return (
    <div className="bg-gray-900 text-white py-0 flex justify-between items-center px-0">
      <nav className="flex-1 flex items-center justify-start py-0">
        <ul className="flex justify-evenly flex-row items-stretch flex-1">
          <li className="flex flex-col">
            <a
              href="/"
              className="hover:text-gray-200 cursor-pointer hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 text-gray-200"
            >
              <DirectionsBusIcon className="mr-0 text-gray-200" />
              Home
            </a>
          </li>
          <li className="flex flex-col">
            <a
              href="/map"
              className="hover:text-gray-200 cursor-pointer hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 text-gray-200"
            >
              <Explore className="mr-0 text-gray-200" />
              Map
            </a>
          </li>
          <li className="flex flex-col">
            <Link
              to="/stops"
              className="hover:text-gray-200 cursor-pointer hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 text-gray-200"
            >
              <ShareLocation className="mr-0 text-gray-200" />
              Stops
            </Link>
          </li>
          <li className="flex flex-col">
            <a
              href="#"
              className="hover:text-gray-200 cursor-pointer hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 text-gray-200"
            >
              <TroubleshootRounded className="mr-0 text-gray-200" />
              Search
            </a>
          </li>
          <li className="flex flex-col">
            <a
              href="#"
              className="hover:text-gray-200 cursor-pointer hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 text-gray-200"
            >
              <AssistantDirectionRounded className="mr-0 text-gray-200" />
              P2P
            </a>
          </li>
          <li className="flex flex-col">
            <a
              onClick={handleLogout}
              className="hover:text-gray-200 cursor-point hover:bg-teal-900 transition duration-300 p-1 rounded-md flex items-center flex-col text-gray-200"
            >
              <BusAlert className="mr-0 text-gray-200" />
              Notice
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoggedInHeader;
