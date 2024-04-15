import React, { useState } from "react";
import BusBooking from "../components/bookings/BusBooking";
import Notification from "../components/notice/Notifications";

function Notice() {
  const [activeItem, setActiveItem] = useState(0); // State to track the active item

  return (
    <div className="flex flex-col bg-gray-800 w-full">
      <div className="flex">
        <span
          className={`flex bg-gray-900 w-full justify-center items-center text-center border-b cursor-pointer ${
            activeItem === 0 && "border-yellow-500 text-yellow-400"
          }`}
          onClick={() => setActiveItem(0)} // Set active item to 0 when clicked
        >
          <span className="">Notifications</span>
        </span>
        <span
          className={`flex bg-gray-900 w-full justify-center items-center text-center border-b cursor-pointer ${
            activeItem === 1 && "border-yellow-500 text-yellow-400"
          }`}
          onClick={() => setActiveItem(1)} // Set active item to 1 when clicked
        >
          <span className="">Payments</span>
        </span>
      </div>
      {activeItem === 0 && <Notification />}{" "}
      {/* Render Notification component if activeItem is 0 */}
      {activeItem === 1 && <BusBooking />}{" "}
      {/* Render BusBooking component if activeItem is 1 */}
    </div>
  );
}

export default Notice;
