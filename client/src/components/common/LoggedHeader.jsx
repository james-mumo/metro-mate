import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Garage } from "@mui/icons-material";
import { appName } from "../../utils/data";

function LoggedHeader() {
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const pathName = location.pathname;
    const active = pathName.substring(pathName.lastIndexOf("/") + 1);
    setActiveItem(active.charAt(0).toUpperCase() + active.slice(1));
  }, [location.pathname]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchQuery = e.target.value.trim();
      if (searchQuery) {
        history.push(`/search?q=${searchQuery}`);
      }
    }
  };

  return (
    <div className="flex py-2">
      <span className="italic text-lg mr-4  cursor-pointer font-bold ml-2">
        {appName}
      </span>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search route"
        className="rounded-md outline-none focus:no-underline px-3 flex-1"
        onKeyDown={handleSearch}
      />
      <Link
        to="/settings"
        className={`hover:text-gray-200 cursor-pointer transition duration-300 p-1 rounded-md flex items-center flex-col gap-0 ${
          activeItem === "Settings" ? "text-yellow-400" : "text-gray-200"
        }`}
      >
        <Garage className="mx-4 cursor-pointer" />
      </Link>
      <hr />
    </div>
  );
}

export default LoggedHeader;
