import React, { useState } from "react";
import {
  backend_uri,
  book_endpoint,
  stk_endpoint,
  useRoutes,
} from "../utils/api";
import { Paid } from "@mui/icons-material";
import { Loupe } from "@mui/icons-material";
import m_pesa from "../assets/MPESA.png";
import qr_image from "../assets/QR.png";
import flag_ke from "../assets/Flag_of_Kenya.svg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Puff } from "react-loader-spinner";
import { useHistory } from "react-router-dom";

function Modal({ isOpen, onClose, bus }) {
  const { routes, loading, error } = useRoutes(); // Fetch the routes
  const [showPaymentInput, setShowPaymentInput] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loadingPayment, setLoadingPayment] = useState(false); // State to manage loading of payment confirmation

  const history = useHistory();

  const closeModal = () => {
    onClose(false);
  };

  // Function to calculate the fare
  const calculateFare = () => {
    if (loading || error || !routes) {
      return "Loading..."; // Return loading message if routes are still loading or error occurred
    }
    let totalFare = 0;
    const route = routes.find((route) => route.id === bus.id);
    if (!route) {
      throw new Error(`Route with ID ${bus.id} not found.`);
    }
    const currentStageIndex = route.stages.findIndex(
      (stage) => stage.name === bus.currentLocation
    );
    if (currentStageIndex !== -1) {
      for (let i = currentStageIndex; i < route.stages.length; i++) {
        totalFare += route.stages[i].fare;
      }
    }
    return totalFare;
  };

  const handlePayClick = () => {
    setShowPaymentInput(true);
    setShowQRCode(false);
  };

  const handlePayLaterClick = () => {
    setShowQRCode(true);
    setShowPaymentInput(false);
  };

  const viewBooking = () => {
    setLoadingPayment(true); // Set loading state while waiting for response

    const formattedPhoneNumber = phoneNumber.replace(/^0/, "254");

    axios
      .post(book_endpoint, {
        phoneNumber: formattedPhoneNumber,
        amount: calculateFare(),
        busInfo: bus,
        isPaid: false,
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
        onClose(false);
        setLoadingPayment(false); // Reset loading state
        toast.success("Payment successful! Thank you for your purchase.");

        history.push("/notice");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error confirming payment:", error);
        let errorMessage = "An error occurred while processing your payment.";

        toast.error(errorMessage);
        setLoadingPayment(false);
        onClose(false);
      });
  };

  const confirmPayment = () => {
    setLoadingPayment(true); // Set loading state while waiting for response

    const formattedPhoneNumber = phoneNumber.replace(/^0/, "254");

    axios
      .post(`${backend_uri}stkpush`, {
        amount: calculateFare(),
        phoneNumber: formattedPhoneNumber,
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
        onClose(false);
        setLoadingPayment(false); // Reset loading state
        toast.success("STK Push Successfully Sent!");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error confirming payment:", error);
        let errorMessage = "An error occurred while processing your payment.";

        toast.error(errorMessage);
        setLoadingPayment(false);
        onClose(false);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="modal absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-60 px-2">
          <div className="flex flex-col w-full bg-gray-950">
            <div className="flex p-2">
              <span className="flex-1">Book item</span>
              <span
                onClick={closeModal}
                className="bg-red-600 rounded-sm px-1 cursor-pointer hover:bg-red-700"
              >
                Close
              </span>
            </div>
            <div className="bg-gray-800 border-l border-r border-gray-950 py-4 px-2 flex shadow-lg">
              <span className="text-yellow-400 p-2 mr-2 border-opacity-40 font-bold items-center flex align-middle text-lg flex-col  border border-yellow-400 rounded-md">
                {bus.busNo}
              </span>
              <div className="flex flex-col w-full  border border-teal-400 rounded-md border-opacity-40">
                <div className="flex px-3 w-full">
                  <span className="flex flex-1 gap-2 text-sm items-center align-middle">
                    To:
                    <span className="font-bold text-md"> {bus.to}</span>
                    <span className="text-[12px]">(Ksh.{calculateFare()})</span>
                  </span>
                  <span className="text-sm gap-1 flex">
                    <span className="text-yellow-400 font-bold">
                      {bus.timeToStage} - {bus.timeToStage + 12}
                    </span>{" "}
                    mins
                  </span>
                </div>
                <div className="flex px-3">
                  <span className="flex flex-1 gap-2 text-sm items-center align-bottom">
                    At:
                    <span className="font-bold text-md">
                      {bus.currentLocation}
                    </span>
                  </span>
                  <span className="text-sm gap-2 flex">
                    {bus.timeToCurrentLocation} mins
                  </span>
                </div>
                <div className="flex px-3">
                  <span className="px-0 ml-0 flex flex-1 gap-2 text-[10px] italic font-medium text-yellow-400">
                    <span> {bus.numberPlate}</span>
                    {bus.sacco}
                  </span>

                  <span className="text-[10px] italic font-medium text-emerald-400">
                    {bus.capacity - 1} Available
                  </span>
                </div>
              </div>
            </div>
            {showPaymentInput && (
              <div className="flex pb-3 bg-gray-800 border-r border-l border-gray-950 h-8 px-2 gap-2 items-center align-middle">
                <img src={m_pesa} alt="" className="h-8" />
                <div className="flex  border border-gray-900 h-8 rounded-md overflow-hidden flex-1">
                  <img src={flag_ke} alt="" className="h-8 " />
                  <input
                    type="number"
                    placeholder="Enter M-Pesa Number"
                    className="mt-0 p-2 h-8 focus:none outline-none pl-3  flex-1 text-[12px]"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            )}
            {showQRCode && (
              <div className="p-2 flex-col align-middle items-center flex justify-center bg-gray-800 border-r border-l border-gray-950">
                <img
                  src={qr_image}
                  alt="QR Code"
                  className=" border border-gray-800 bg-slate-100 rounded-md h-48 w-48"
                />
                <span
                  onClick={viewBooking}
                  className="px-2 py-1 mt-1 cursor-pointer bg-emerald-700 hover:bg-emerald-500 transition-all duration-200"
                >
                  View Booking
                </span>
              </div>
            )}
            {!showPaymentInput && !showQRCode && (
              <span className="flex justify-center bg-gray-800 border-b border-gray-950 border-l border-r gap-2 items-center pb-2">
                <span
                  className="flex cursor-pointer border border-emerald-500 px-2 py-1 rounded-sm hover:bg-emerald-800 bg-emerald-600 transition-all duration-200"
                  onClick={handlePayClick}
                >
                  <Paid /> Pay
                </span>
                <span
                  className="flex cursor-pointer border border-emerald-500 px-2 py-1 rounded-sm hover:bg-emerald-800 bg-emerald-600 transition-all duration-200"
                  onClick={handlePayLaterClick}
                >
                  <Loupe />
                  Pay Later
                </span>
              </span>
            )}
            {showPaymentInput && (
              <div className="flex flex-col justify-center bg-gray-800 border-b border-gray-950 border-l border-r gap-2 items-center pb-2">
                <span className="text-white">
                  Confirm payment amount of <b>Ksh.{calculateFare()}</b>
                  <br />
                </span>
                <button
                  className="flex cursor-pointer border border-emerald-500 px-2 py-1 rounded-sm hover:bg-emerald-800 bg-emerald-600 transition-all duration-200"
                  onClick={confirmPayment}
                  disabled={loadingPayment}
                >
                  {loadingPayment ? <Puff color="#fff" size={20} /> : "Confirm"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
