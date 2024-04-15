import React from "react";
import { Garage } from "@mui/icons-material";
import { appName } from "../../utils/data";
function LoggedHeader() {
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
      />
      <Garage className="mx-4 cursor-pointer" />
      <hr />
    </div>
  );
}

export default LoggedHeader;
