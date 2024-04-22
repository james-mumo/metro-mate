import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_uri, useRoutes } from "../../utils/api";
import { FaCloudSun } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FiCloudRain } from "react-icons/fi";
import { GiHeavyRain } from "react-icons/gi";
import { BiSolidTrafficBarrier } from "react-icons/bi";
import { GiTortoise } from "react-icons/gi";
import { useHistory } from "react-router-dom";

function AddRoadNotifications() {
  const history = useHistory();

  const [notification, setNotification] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedStages, setSelectedStages] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedWeather, setSelectedWeather] = useState(""); // State for selected weather condition
  const [weatherOptions] = useState([
    { icon: <FaCloudSun />, condition: "Sunny" },
    { icon: <WiDayCloudyWindy />, condition: "Windy" },
    { icon: <FiCloudRain />, condition: "Rainy" },
    { icon: <GiHeavyRain />, condition: "Heavy Rain" },
    { icon: <BiSolidTrafficBarrier />, condition: "Heavy Traffic" },
    { icon: <GiTortoise />, condition: "Snarl Up" },
  ]);
  const { loading: routesLoading, error: routesError, routes } = useRoutes();
  const [routeStages, setRouteStages] = useState([]);
  const [stageOptions, setStageOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    const currentTime = new Date().toISOString().split("T")[1].slice(0, 5);
    setDate(currentDate);
    setTime(currentTime);

    if (selectedRoute) {
      const selectedRouteObj = routes.find(
        (route) => route._id === selectedRoute
      );
      if (selectedRouteObj) {
        setRouteStages(selectedRouteObj.stages);
        setStageOptions(
          selectedRouteObj.stages.map((stage) => ({
            value: stage.id,
            label: stage.name,
          }))
        );
      }
    }
  }, [selectedRoute, routes]);

  const handleAddNotification = async () => {
    try {
      if (
        notification.trim() !== "" &&
        selectedRoute !== "" &&
        selectedStages.length > 0 &&
        time !== "" &&
        date !== "" &&
        selectedWeather !== ""
      ) {
        // Prepare the data to send to the backend
        const data = {
          notification,
          selectedRoute,
          selectedStages,
          time,
          date,
          selectedWeather,
        };

        // Make an HTTP POST request to the backend
        const response = await axios.post(
          `${backend_uri}notifications/add`,
          data
        );

        // If the request is successful, show a success message
        toast.success(response.data.message);

        history.push("/notice");

        // Reset the form fields and close the modal
        setNotification("");
        setSelectedRoute("");
        setSelectedStages([]);
        setTime("");
        setDate("");
        setSelectedWeather("");
      } else {
        toast.error("Please fill in all fields.");
      }
    } catch (error) {
      console.error("Error adding road notification:", error);
      toast.error("Failed to add road notification.");
    }
  };

  const showLastModal = () => {
    if (
      notification.trim() !== "" &&
      selectedRoute !== "" &&
      selectedStages.length > 0 &&
      time !== "" &&
      date !== "" &&
      selectedWeather !== ""
    ) {
      setShowModal(true);
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const handleSelectStages = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    // Filter out selected values that already exist in selectedStages
    const newSelectedValues = selectedValues.filter(
      (value) => !selectedStages.includes(value)
    );

    setSelectedStages((prevSelectedStages) => [
      ...prevSelectedStages,
      ...newSelectedValues,
    ]);
  };

  return (
    <div className="flex flex-col h-[80vh] border-teal-400 rounded-sm border px-2 overflow-scroll w-full">
      {/* Weather condition dropdown */}
      <select
        value={selectedWeather}
        onChange={(e) => setSelectedWeather(e.target.value)}
        className="p-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
      >
        <option value="">Select Condition</option>
        {weatherOptions.map((option, index) => (
          <option key={index} value={option.condition}>
            {option.icon} {option.condition}
          </option>
        ))}
      </select>

      <textarea
        value={notification}
        onChange={(e) => setNotification(e.target.value)}
        className="p-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        placeholder="Enter road notification..."
      />
      <select
        value={selectedRoute}
        onChange={(e) => setSelectedRoute(e.target.value)}
        className="p-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
      >
        <option value="">Select Route</option>
        {routes.map((route) => (
          <option key={route._id} value={route._id}>
            {route.name}
          </option>
        ))}
      </select>
      <select
        multiple
        value={selectedStages}
        onChange={handleSelectStages}
        className="p-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
      >
        <option value="">Select Stages</option>
        {stageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Selected stages display */}
      <div className="mt-4">
        <p className="font-semibold">Selected Stages:</p>
        <p>{selectedStages.join(", ")}</p>
      </div>

      <div className="flex">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 mt-4 mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        />
      </div>

      <button
        onClick={showLastModal}
        className="px-4 py-2 mt-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
      >
        Add Notification
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-950 px-4 py-5 rounded-md border border-dashed border-emerald-800">
            <span className="text-xl font-semibold flex-1 justify-center flex border-b mb-2">
              Notification Details
            </span>

            <span className="text-md font-semibold flex flex-1 text-center justify-center items-center align-middle gap-2">
              {selectedWeather}
              {selectedWeather === "Sunny" && <FaCloudSun />}
              {selectedWeather === "Windy" && <WiDayCloudyWindy />}
              {selectedWeather === "Rainy" && <FiCloudRain />}
              {selectedWeather === "Heavy Rain" && <GiHeavyRain />}
              {selectedWeather === "Heavy Traffic" && <BiSolidTrafficBarrier />}
              {selectedWeather === "Snarl Up" && <GiTortoise />}
            </span>

            <span className="text-md border-b border-double border-opacity-75 border-gray-600 font-semibold flex flex-1 text-center justify-center">
              {notification}
            </span>
            <div>
              <span className="font-semibold text-sm">Route:</span>{" "}
              <span className="font-semibold text-[12px]">
                {" "}
                {routes.find((route) => route._id === selectedRoute)?.name}
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm">Stages:</span>{" "}
              <span className="font-semibold text-sm">
                {selectedStages.join(", ")}
              </span>
            </div>
            <span className="flex gap-2 text-sm text-emerald-700 mt-1">
              <span className="font-semibold">Time:</span> {time}
              <span className="font-semibold">Date:</span> {date}
            </span>

            <div className="flex flex-1 justify-center items-center align-middle">
              <button
                onClick={handleAddNotification}
                className="px-3  text-sm flex justify-center items-center py-1 mt-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddRoadNotifications;
