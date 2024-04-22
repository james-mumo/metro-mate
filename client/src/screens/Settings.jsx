import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { GiRoad } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import { MdLocationOff, MdLocationOn } from "react-icons/md";
import { SiWalletconnect } from "react-icons/si";
import { FaGoogleWallet } from "react-icons/fa";
import Location from "../components/settings/Location";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuLaugh } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import BusLocation from "../components/settings/BusLocation";
import AddRoadNotifications from "../components/settings/AddRoadNotifications";
import UserDetails from "../UserDetails";

function Settings() {
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);
  const [isBusLocationModalOpen, setBusLocationModalOpen] = useState(false);
  const [isRoadAlertModalOpen, setRoadAlertModalOpen] = useState(false);
  const [isCustomizeModalOpen, setCustomizeModalOpen] = useState(false);

  const handleRoadAlertModalToggle = () => {
    setRoadAlertModalOpen(!isRoadAlertModalOpen);
  };

  const handleLocationModalToggle = () => {
    setLocationModalOpen(!isLocationModalOpen);
  };

  const handleBusLocationModalToggle = () => {
    setBusLocationModalOpen(!isBusLocationModalOpen);
  };

  const handleCustomizeModalToggle = () => {
    setCustomizeModalOpen(!isCustomizeModalOpen);
  };

  const handleCloseModal = () => {
    setLocationModalOpen(false);
    setBusLocationModalOpen(false);
    setRoadAlertModalOpen(false);
    setCustomizeModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-gray-800 w-full gap-2 h-screen overflow-scroll pb-28">
      <div
        className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900"
        onClick={handleBusLocationModalToggle}
      >
        <div className="bg-teal-500 rounded-full p-2">
          <GiSteeringWheel className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Driver Vehicle Update
          </span>
          <span className="text-sm opacity-80">
            Update vehicle location and alerts
          </span>
        </div>
      </div>
      <div
        className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900"
        onClick={handleRoadAlertModalToggle}
      >
        <div className="bg-teal-500 rounded-full p-2">
          <GiRoad className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Add Road Update and Alerts
          </span>
          <span className="text-sm opacity-80">
            Update Road Conditions & Alerts
          </span>
        </div>
      </div>

      <div
        className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900"
        onClick={handleLocationModalToggle}
      >
        <div className="bg-teal-500 rounded-full p-2">
          <MdLocationOn className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Update Current Location
          </span>
          <span className="text-sm opacity-80">
            Update Riders Current Location
          </span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <SiWalletconnect className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Update App Wallet
          </span>
          <span className="text-sm opacity-80">Update App Wallet Balance</span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <FaDownload className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Check for Updates
          </span>
          <span className="text-sm opacity-80">
            Update App to Latest Version
          </span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <FaGoogleWallet className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            About App
          </span>
          <span className="text-sm opacity-80">View App Details</span>
        </div>
      </div>
      <div
        className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900"
        onClick={handleCustomizeModalToggle}
      >
        <div className="bg-teal-500 rounded-full p-2">
          <LuLaugh className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Customize
          </span>
          <span className="text-sm opacity-80">Customize App Settings</span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <IoInformationCircleOutline className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Version
          </span>
          <span className="text-sm opacity-80">
            App Version: <span className="font-semibold"> 1.0.0</span>
          </span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <FaGithub className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Github
          </span>
          <span className="text-sm opacity-80">
            github.com/james-mumo/metro-mate
          </span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 text-white cursor-pointer hover:bg-slate-900">
        <div className="bg-teal-500 rounded-full p-2">
          <FaRegShareFromSquare className="text-white text-3xl" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-teal-300 font-semibold uppercase text-sm">
            Share
          </span>
          <span className="text-sm opacity-80">Share it!</span>
        </div>
      </div>
      {(isLocationModalOpen ||
        isBusLocationModalOpen ||
        isCustomizeModalOpen ||
        isRoadAlertModalOpen) && (
        <button
          className="absolute top-4 right-4 text-white rounded-sm z-20 p-2 bg-gray-700 hover:bg-gray-600"
          onClick={handleCloseModal}
        >
          Close
        </button>
      )}
      {/* Modals */}
      {isLocationModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <Location />
        </div>
      )}
      {isBusLocationModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <BusLocation />
        </div>
      )}
      {isRoadAlertModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <AddRoadNotifications />
        </div>
      )}

      {isCustomizeModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <UserDetails />
        </div>
      )}
    </div>
  );
}

export default Settings;
