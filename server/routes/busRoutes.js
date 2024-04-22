import express from "express";
import Bus from "../models/Bus.js";

const router = express.Router();

// Route handler for getting all routes
router.get("/", async (req, res) => {
  try {
    const allBuses = await Bus.find({}).populate("routeId");
    res.json(allBuses);
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route handler for updating bus location, remaining seats, and current location
router.post("/update", async (req, res) => {
  try {
    const { busId, remainingSeats, currentLocation } = req.body;

    // Update bus details in the database
    const updatedBus = await Bus.findByIdAndUpdate(
      busId,
      { $set: { capacity: remainingSeats, currentLocation: currentLocation } },
      { new: true }
    );

    res.json(updatedBus);
  } catch (error) {
    console.error("Error updating bus details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Adding buses to the database
router.get("/add", async (req, res) => {
  try {
    const busesToAdd = [
      {
        busNo: "1A",
        routeId: "661da01c11f252f4a7a3e66c", // CBD-South C Route
        to: "South C",
        currentLocation: "CBD",
        distanceToCurrentLocation: 2,
        timeToCurrentLocation: 10,
        distanceToStage: 6,
        timeToStage: 25,
        capacity: 50,
        sacco: "Metro Trans",
        numberPlate: "KAA 123X",
      },
    ];

    const insertedBuses = await Bus.insertMany(busesToAdd);
    res.send(insertedBuses);
  } catch (error) {
    console.error("Error adding buses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route handler for deleting all buses
router.get("/delete", async (req, res) => {
  try {
    await Bus.deleteMany({});
    res.json({ message: "All buses deleted successfully" });
  } catch (error) {
    console.error("Error deleting buses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
