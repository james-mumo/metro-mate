import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaymentsIcon from "@mui/icons-material/Payments";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
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
    <div className="bg-teal-700 text-white py-0 flex justify-between items-center px-0">
      <nav className="flex-1 flex items-center justify-start  py-4">
        <ul className="flex gap-4 ">
          <li className="flex flex-col">
            <a
              href="/"
              className="hover:text-teal-300 cursor-pointer hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center flex-col gap-1"
            >
              <SchoolIcon className="mr-2 text-teal-300" />
              Home
            </a>
          </li>
          <li className="flex flex-col">
            <Link
              to="/stops"
              className="hover:text-teal-300 cursor-pointer hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center flex-col gap-1"
            >
              <CollectionsBookmarkIcon className="mr-2 text-teal-300" />
              Stops
            </Link>
          </li>
          <li className="flex flex-col">
            <a
              href="#"
              className="hover:text-teal-300 cursor-pointer hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center flex-col gap-1"
            >
              <PaymentsIcon className="mr-2 text-teal-300" />
              Add Classes
            </a>
          </li>
          <li className="flex flex-col">
            <a
              href="#"
              className="hover:text-teal-300 cursor-pointer hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center flex-col gap-1"
            >
              <BadgeIcon className="mr-2 text-teal-300" />
              Profile
            </a>
          </li>
          {/* <li className="flex flex-col">
            <a
              onClick={handleLogout}
              className="hover:text-teal-300 cursor-point hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center flex-col"
            >
              <ExitToAppIcon className="mr-2 text-teal-300" />
              Log Out
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default LoggedInHeader;
