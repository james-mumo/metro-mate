import React from "react";

import { FaCloudSun } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FiCloudRain } from "react-icons/fi";
import { GiHeavyRain } from "react-icons/gi";
import { BiSolidTrafficBarrier } from "react-icons/bi";
import { GiTortoise } from "react-icons/gi";

function Notifications({ notifications, nloading, nerror }) {
  return (
    <div>
      {nloading && <p>Loading notifications...</p>}
      {nerror && <p>Error: {nerror}</p>}
      {!nloading && !nerror && notifications.length === 0 && (
        <p>No notifications available.</p>
      )}
      {!nloading && !nerror && notifications.length > 0 && (
        <div className="flex flex-col gap-2">
          {notifications.map((notification) => (
            <div
              className="flex gap-1 p-1 border rounded-sm border-opacity-50 border-teal-600"
              key={notification._id}
            >
              <div className="flex flex-col justify-center items-center align-middle border-r rounded-sm border-teal-500">
                <div className="flex flex-col align-middle px-2">
                  <span className="text-[12px] flex-1 flex text-center justify-center font-semibold gap-1">
                    {notification.time}
                  </span>
                  <span className="text-[12px] font-semibold gap-1">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 border-l px-1 border-teal-600">
                <span className="flex font-semibold text-teal-600 gap-2 text-md justify-start items-center align-middle">
                  {notification.selectedRoute.name}
                </span>
                <div className="flex font-semibold text-teal-600 gap-2 justify-start items-center align-middle">
                  <span className="text-sm font-semibold gap-1">
                    {notification.selectedWeather}
                  </span>
                  <span className="text-sm">
                    {notification.selectedWeather === "Sunny" && <FaCloudSun />}
                    {notification.selectedWeather === "Windy" && (
                      <WiDayCloudyWindy />
                    )}
                    {notification.selectedWeather === "Rainy" && (
                      <FiCloudRain />
                    )}
                    {notification.selectedWeather === "Heavy Rain" && (
                      <GiHeavyRain />
                    )}
                    {notification.selectedWeather === "Heavy Traffic" && (
                      <BiSolidTrafficBarrier />
                    )}
                    {notification.selectedWeather === "Snarl Up" && (
                      <GiTortoise />
                    )}
                  </span>
                </div>
                <p className="text-sm opacity-75">
                  {notification.notification}
                </p>
                <span className="opacity-80 text-sm font-semibold" value="">
                  Select Stages
                </span>
                <div className="flex gap-1">
                  {notification.selectedStages.map((stage, index) => (
                    <span className="opacity-70 text-sm" key={index}>
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
