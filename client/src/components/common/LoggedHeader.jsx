import React from "react";
import { useHistory } from "react-router-dom";
import { Garage } from "@mui/icons-material";
import { appName } from "../../utils/data";

function LoggedHeader() {
  const history = useHistory();

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
      <Garage className="mx-4 cursor-pointer" />
      <hr />
    </div>
  );
}

export default LoggedHeader;
