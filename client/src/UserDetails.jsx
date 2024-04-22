import React, { useState, useEffect } from "react";
import { backend_uri } from "./utils/api";
import axios from "axios";
import { toast } from "react-toastify";
import Wallet from "./Wallet";

function UserDetails() {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {
      // Initial user details
      firstName: "",
      lastName: "",
      email: "",
      route: "",
      walletBalance: 0, // Initial wallet balance
      userId: null, // Initial userId
      defaultRoute: null, // Initial default route
      home: null, // Initial home location
      work: null, // Initial work location
      favoriteRoutes: [], // Initial favorite routes
      favoSaccos: null, // Initial favorite Sacco
      // Add other user details as needed
    }
  );

  const [addUser, setAddUser] = useState(false);
  const [query, setQuery] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [routes, setRoutes] = useState([]);
  const [activeTab, setActiveTab] = useState("Add User");

  useEffect(() => {
    // Fetch routes from the backend
    fetchRoutes();
  }, []);

  useEffect(() => {
    // Save userDetails to localStorage whenever it changes
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  const fetchRoutes = async () => {
    try {
      const response = await fetch(`${backend_uri}routes`);
      if (!response.ok) {
        throw new Error("Failed to fetch routes");
      }
      const routesData = await response.json();
      setRoutes(routesData);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  const handleChange = (field, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${backend_uri}users/search`, {
        params: {
          firstName: searchQuery, // Pass firstName as a query parameter
        },
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("User details obtained!");
        setUserDetails(response.data); // Update user details in the state
      }
    } catch (error) {
      console.error("Error searching user:", error);
    }
  };

  const toggleAddUserForm = () => {
    setAddUser(!addUser);
    setSearchQuery(""); // Clear search query when toggling Add User form
    setActiveTab("Add User");
  };

  const saveUserDetails = async () => {
    try {
      const response = await axios.post(`${backend_uri}users/`, userDetails);
      console.log(response);
      if (response.status === 201) {
        toast.success("User added successfully");
        console.log("User details saved successfully");
      }
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  };

  return (
    <div className="flex flex-col bg-gray-900 h-[80vh] border-teal-400 rounded-md border px-2 overflow-scroll w-full">
      <div className="flex justify-between items-center border-b border-gray-600 mb-4">
        <span
          className={`text-white flex flex-1 bg-slate-800 px-2 py-2 ${
            activeTab === "Add User" ? "border-b-1 border-b border-white" : ""
          }`}
          onClick={() => setActiveTab("Add User")}
        >
          Add User
        </span>
        <span
          className={`text-white flex flex-1 bg-slate-800 px-2 py-2 ${
            activeTab === "Wallet" ? "border-b-1 border-b border-white" : ""
          }`}
          onClick={() => setActiveTab("Wallet")}
        >
          Wallet
        </span>
      </div>
      {activeTab === "Add User" && !query && (
        <>
          <div className="form">
            <div className="flex flex-col mt-4">
              <label htmlFor="firstName" className="text-white">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                value={userDetails.firstName || ""}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-white mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="lastName" className="text-white">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={userDetails.lastName || ""}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-white mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={userDetails.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-white mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="route" className="text-white">
                Route:
              </label>
              <select
                id="route"
                value={userDetails.route || ""}
                onChange={(e) => handleChange("route", e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-white mt-1"
              >
                <option value="">Select a Route</option>
                {routes.map((route) => (
                  <option key={route.id} value={route.name}>
                    {route.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={saveUserDetails}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Save User
            </button>
          </div>

          <button
            onClick={() => setQuery(!query)}
            className="bg-green-500 text-sm text-white px-4 py-0 rounded-sm mt-2"
          >
            {query ? "Add User" : "Search User"}
          </button>
        </>
      )}
      {activeTab === "Wallet" && <Wallet userDetails={userDetails} />}

      {(activeTab === "Add User" || activeTab === "View User") && query && (
        <>
          <div className="flex flex-col mt-4">
            <label htmlFor="searchQuery" className="text-white">
              Search User by First Name:
            </label>
            <input
              type="text"
              id="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-white mt-1"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 w-full text-white px-4 py-0 flex-1 flex rounded-md mt-2"
            >
              Search
            </button>
          </div>

          <button
            onClick={() => setQuery(!query)}
            className="bg-green-500 text-sm text-white px-4 py-0 rounded-sm mt-2"
          >
            {query ? "Add User" : "Search User"}
          </button>
        </>
      )}
    </div>
  );
}

export default UserDetails;
