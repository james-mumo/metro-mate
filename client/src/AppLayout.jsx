import React from "react";
import LoggedInHeader from "./components/common/LoggedInHeader.jsx";
import LoggedHeader from "./components/common/LoggedHeader.jsx";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col w-full overflow-y-hidden">
      <LoggedHeader />
      <div className="flex flex-1 p-0 bg-white overflow-y-hidden">
        {children}
      </div>
      <LoggedInHeader />
    </div>
  );
};

export default AppLayout;
