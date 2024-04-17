import express from "express";
import Bus from "../models/Bus.js";

const router = express.Router();

// Route handler for getting all routes
router.get("/", async (req, res) => {
  try {
    const allBuses = await Bus.find({});
    res.json(allBuses);
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
