// routes/notificationRoutes.js

import express from "express";
import RoadNotification from "../models/RoadNotification.js"; // Import the RoadNotification model
import Route from "../models/Route.js"; // Import the Route model

const router = express.Router();

// Route to handle adding road notifications
router.post("/add", async (req, res) => {
  try {
    const {
      notification,
      selectedRoute,
      selectedStages,
      time,
      date,
      selectedWeather,
    } = req.body;

    // Create a new RoadNotification document using the data from the request body
    const newRoadNotification = new RoadNotification({
      notification,
      selectedRoute,
      selectedStages,
      time,
      date,
      selectedWeather,
    });

    // Save the new road notification to the database
    await newRoadNotification.save();

    // Send a success response
    res.status(201).json({ message: "Road notification added successfully!" });
  } catch (error) {
    // If an error occurs, send a 500 status response with the error message
    console.error("Error adding road notification:", error);
    res.status(500).json({ error: "Failed to add road notification." });
  }
});

// Route to get all road notifications
router.get("/", async (req, res) => {
  try {
    // Fetch all road notifications from the database and populate the selectedRoute field
    const notifications = await RoadNotification.find().populate(
      "selectedRoute"
    );
    // Send the notifications as a response
    res.status(200).json(notifications);
  } catch (error) {
    // If an error occurs, send a 500 status response with the error message
    console.error("Error getting road notifications:", error);
    res.status(500).json({ error: "Failed to get road notifications." });
  }
});

// Route to update a road notification by ID
router.put("/notification/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      notification,
      selectedRoute,
      selectedStages,
      time,
      date,
      selectedWeather,
    } = req.body;

    // Find the road notification by ID and update its fields
    await RoadNotification.findByIdAndUpdate(id, {
      notification,
      selectedRoute,
      selectedStages,
      time,
      date,
      selectedWeather,
    });

    // Send a success response
    res
      .status(200)
      .json({ message: "Road notification updated successfully!" });
  } catch (error) {
    // If an error occurs, send a 500 status response with the error message
    console.error("Error updating road notification:", error);
    res.status(500).json({ error: "Failed to update road notification." });
  }
});

// Route to delete a road notification by ID
router.delete("/notification/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the road notification by ID and delete it
    await RoadNotification.findByIdAndDelete(id);

    // Send a success response
    res
      .status(200)
      .json({ message: "Road notification deleted successfully!" });
  } catch (error) {
    // If an error occurs, send a 500 status response with the error message
    console.error("Error deleting road notification:", error);
    res.status(500).json({ error: "Failed to delete road notification." });
  }
});

// Route to delete all road notifications
router.get("/deleteAll", async (req, res) => {
  try {
    // Delete all road notifications from the database
    await RoadNotification.deleteMany();

    // Send a success response
    res
      .status(200)
      .json({ message: "All road notifications deleted successfully!" });
  } catch (error) {
    // If an error occurs, send a 500 status response with the error message
    console.error("Error deleting all road notifications:", error);
    res.status(500).json({ error: "Failed to delete all road notifications." });
  }
});

export default router;
