import React, { useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { backend_uri } from "../utils/api";
import axios from "axios";
import { toast } from "react-toastify";

function Logistics() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_uri}trucks`);
        setVehicles(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const sortByProperty = (property) => {
    const sortedVehicles = [...vehicles].sort((a, b) => {
      if (a[property] < b[property]) return 1;
      if (a[property] > b[property]) return -1;
      return 0;
    });
    setVehicles(sortedVehicles);
  };

  const requestService = async () => {
    try {
      // Extract customer name and email from input fields
      const customerNameInput = document.getElementById("customerName");
      const customerEmailInput = document.getElementById("customerEmail");
      const customerName = customerNameInput.value;
      const customerEmail = customerEmailInput.value;

      if (!customerName || !customerEmail) {
        // Check if customer name and email are provided
        console.error("Customer name and email are required.");
        return;
      }

      // Construct payload with selected vehicle ID, customer name, and email
      const payload = {
        truckId: selectedVehicle._id, // Assuming selectedVehicle has _id property
        customerName,
        customerEmail,
        // Add more fields as needed
      };

      // Send payload to the backend
      const response = await axios.post(
        `${backend_uri}trucks/bookings`,
        payload
      );

      // Handle success response if needed
      console.log("Service requested successfully:", response.data);

      setSelectedVehicle(null);
      toast.success("Vehicle Booked Successfully");
    } catch (error) {
      // Handle error
      console.error("Error requesting service:", error);
    }
  };

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="flex flex-col bg-gray-800 w-full h-screen relative py-2">
      {/* Loading state */}
      {loading && <div>Loading...</div>}
      {/* Error state */}
      {error && <div>Error: {error}</div>}

      <div className="flex sticky flex-row top-0 justify-between items-center h-fit px-2 py-3 overflow-x-scroll bg-gray-700 w-full">
        <ArrowBackIosNew className="text-gray-400 text-sm mr-4" />
        <span
          onClick={() => sortByProperty("numberPlate")}
          className="cursor-pointer px-4 py-1 bg-blue-500 text-white rounded-sm mr-2 hover:bg-blue-600 whitespace-nowrap text-sm"
        >
          Sort by Number Plate
        </span>
        <span
          onClick={() => sortByProperty("capacity")}
          className="cursor-pointer px-4 py-1 bg-blue-500 text-white rounded-sm mr-2 hover:bg-blue-600 whitespace-nowrap text-sm"
        >
          Sort by Capacity
        </span>
        <span
          onClick={() => sortByProperty("pricePerHirePerHour")}
          className="cursor-pointer px-4 py-1 bg-blue-500 text-white rounded-sm mr-2 hover:bg-blue-600 whitespace-nowrap text-sm"
        >
          Sort by Price
        </span>
        <span
          onClick={() => sortByProperty("yearMade")}
          className="cursor-pointer px-4 py-1 bg-blue-500 text-white rounded-sm mr-2 hover:bg-blue-600 whitespace-nowrap text-sm"
        >
          Sort by Year Made
        </span>
        <ArrowForwardIos className="text-gray-400 text-sm ml-4" />
      </div>

      {selectedVehicle && (
        <div className="modal absolute top-0 bg-slate-500 px-5 w-full h-screen bg-opacity-45 flex justify-center items-center align-middle">
          <div className="modal-content z-10 bg-slate-700 w-full p-3 border-emerald-500 overflow-hidden rounded-md">
            <span
              className="close cursor-pointer bg-slate-200 text-red-700 px-2 text-lg"
              onClick={closeModal}
            >
              &times;
            </span>

            <div className="flex justify-between items-start align-top">
              <div className="flex flex-col">
                <span className="flex text-sm font-semibold text-gray-200">
                  {selectedVehicle.company}
                </span>
                <div className="flex gap-2 items-middle align-bottom flex-row">
                  <span>
                    <strong> Kshs</strong> {selectedVehicle.pricePerHirePerHour}
                    <small>/hr</small>
                  </span>
                  <span className="text-md opacity-65 z-0 font-semibold">
                    ({selectedVehicle.vehicleType})
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {selectedVehicle.numberPlate}
                </span>
                <span className="text-sm">{selectedVehicle.yearMade}</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <span className="flex flex-1">
                  <strong>Now At:</strong> {selectedVehicle.currentLocation}
                </span>
                <span className="mt-0">
                  <strong>Load:</strong> {selectedVehicle.capacity}
                </span>
              </div>

              <span className="text-sm">
                <strong>Availability:</strong>{" "}
                {selectedVehicle.availability === 0 ? (
                  <span className="text-green-500 font-semibold">
                    Available
                  </span>
                ) : selectedVehicle.availability > 24 ? (
                  `${Math.floor(selectedVehicle.availability / 24)} days`
                ) : (
                  `${selectedVehicle.availability} hrs`
                )}
              </span>

              <span className="flex flex-col mt-2 bg-slate-500 p-1 gap-2">
                <input
                  type="text"
                  required
                  id="customerName"
                  placeholder="Enter your name"
                  className="focus focus:outline-none p-1 border-emerald-400 rounded-md"
                />
                <input
                  type="number"
                  required
                  id="customerEmail"
                  placeholder="Enter your email"
                  className="focus focus:outline-none p-1 border-emerald-400 rounded-md"
                />
              </span>

              <button
                className="mt-2 bg-teal-500 hover:bg-teal-600 text-slate-50 focus:outline-none hover:outline-none"
                type="submit"
                onClick={requestService}
              >
                Request Services
              </button>
            </div>
          </div>
        </div>
      )}

      {vehicles.length > 0 && (
        <div className="flex flex-col overflow-y-scroll gap-3 p-2 w-full h-fit pb-20">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="p-4 border-b border-emerald-700 flex flex-col bg-gray-700 hover:bg-gray-600 transition-all duration-200 cursor-pointer rounded-sm"
              onClick={() => openModal(vehicle)}
            >
              <div className="flex justify-between items-start align-top">
                <div className="flex flex-col">
                  <span className="flex text-sm font-semibold text-gray-200">
                    {vehicle.company}
                  </span>
                  <div className="flex gap-2 items-middle align-bottom flex-row">
                    <span>
                      <strong> Kshs</strong> {vehicle.pricePerHirePerHour}
                      <small>/hr</small>
                    </span>
                    <span className="text-md opacity-65 z-0 font-semibold">
                      ({vehicle.vehicleType})
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {vehicle.numberPlate}
                  </span>
                  <span className="text-sm">{vehicle.yearMade}</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <span className="flex flex-1">
                    <strong>Now At:</strong> {vehicle.currentLocation}
                  </span>
                  <span className="mt-0">
                    <strong>Load:</strong> {vehicle.capacity}
                  </span>
                </div>

                <span className="text-sm">
                  <strong>Availability:</strong>{" "}
                  {vehicle.availability === 0 ? (
                    <span className="text-green-500 font-semibold">
                      Available
                    </span>
                  ) : vehicle.availability > 24 ? (
                    `${Math.floor(vehicle.availability / 24)} days`
                  ) : (
                    `${vehicle.availability} hrs`
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Logistics;
