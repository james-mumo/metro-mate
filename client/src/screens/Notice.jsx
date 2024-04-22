import React, { useState } from "react";
import BusBooking from "../components/bookings/BusBooking";
import Notification from "../components/notice/Notifications";
import { useBookings, useNotifications } from "../utils/api";

function Notice() {
  const [activeItem, setActiveItem] = useState(0); // State to track the active item
  const { loading, error, bookings } = useBookings(); // Use the useBookings hook to fetch bookings data
  const { nloading, nerror, notifications } = useNotifications(); // Use the useBookings hook to fetch bookings data
  console.log(notifications);
  return (
    <div className="flex flex-col bg-gray-800 w-full">
      <div className="flex">
        <span
          className={`flex bg-gray-900 w-full justify-center items-center text-center border-b cursor-pointer ${
            activeItem === 0 && "border-yellow-500 text-yellow-400"
          }`}
          onClick={() => setActiveItem(0)} // Set active item to 0 when clicked
        >
          <span className="">Bookings</span>
        </span>
        <span
          className={`flex bg-gray-900 w-full justify-center items-center text-center border-b cursor-pointer ${
            activeItem === 1 && "border-yellow-500 text-yellow-400"
          }`}
          onClick={() => setActiveItem(1)} // Set active item to 1 when clicked
        >
          <span className="">Notifications</span>
        </span>
      </div>
      <div className="flex flex-col bg-gray-800 w-full p-2 h-screen overflow-scroll">
        {activeItem === 0 && (
          <>
            {!loading && !error && bookings.length === 0 && (
              <p className="text-gray-300 text-center mt-4">
                No bookings available.
              </p>
            )}
            {!loading && !error && bookings.length > 0 && (
              <BusBooking bookings={bookings} loading={loading} error={error} />
            )}
          </>
        )}
        {activeItem === 1 && (
          <>
            {!nloading && !nerror && notifications.length === 0 && (
              <p className="text-gray-300 text-center mt-4">
                No Notifications available.
              </p>
            )}
            {!nloading && !nerror && notifications.length > 0 && (
              <Notification
                notifications={notifications}
                nloading={nloading}
                nerror={nerror}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Notice;
