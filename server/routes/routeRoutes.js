import express from "express";
import Route from "../models/Route.js";

const router = express.Router();

// Route handler for getting all routes
router.get("/", async (req, res) => {
  try {
    const allRoutes = await Route.find({});
    res.json(allRoutes);
  } catch (error) {
    console.error("Error fetching routes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
