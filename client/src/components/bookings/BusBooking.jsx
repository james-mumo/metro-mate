import React from "react";

function BusBooking({ bookings, loading, error }) {
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }
  console.log(bookings);
  return (
    <ul className="border ">
      {bookings.map((booking) => (
        <li
          key={booking._id}
          className="bg-gray-100 rounded-md p-4 mb-2 shadow"
        >
          <p className="text-sm text-gray-800">
            Booking ID: {booking._id}
            <br />
            Amount Paid: {booking.amountPaid}
            <br />
            Is Paid: {booking.isPaid ? "Yes" : "No"}
            <br />
            Booking Code: {booking.bookingCode}
            <br />
            Payment Date: {new Date(booking.paymentDate).toLocaleString()}
            <br />
            Bus Details:
            <br />- Bus No: {booking.busDetails?.busNo}
            <br />- To: {booking.busDetails.to}
            <br />- Current Location: {booking.busDetails.currentLocation}
            <br />- Distance To Current Location:{" "}
            {booking.busDetails.distanceToCurrentLocation}
            <br />- Time To Current Location:{" "}
            {booking.busDetails.timeToCurrentLocation}
            <br />- Distance To Stage: {booking.busDetails.distanceToStage}
            <br />- Time To Stage: {booking.busDetails.timeToStage}
            <br />- Capacity: {booking.busDetails.capacity}
            <br />- Sacco: {booking.busDetails.sacco}
            <br />- Number Plate: {booking.busDetails.numberPlate}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default BusBooking;
