import React from "react";
import LoggedInHeader from "./components/common/LoggedInHeader.jsx";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col w-full overflow-y-hidden">
      <div className="flex flex-1 p-1 bg-white overflow-y-hidden">
        {children}
      </div>
      <LoggedInHeader />
    </div>
  );
};

export default AppLayout;
