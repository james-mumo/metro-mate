import express from "express";
import mongoose from "mongoose";
import Bus from "../models/Bus.js";
import Booking from "../models/Booking.js";

const router = express.Router();

// Route to get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("busDetails");
    const totalItems = bookings.length;

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all bookings",
      totalItems: totalItems,
      bookings: bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve bookings",
      error: error.message,
    });
  }
});

// Route to delete all bookings
router.get("/delete", async (req, res) => {
  try {
    await Booking.deleteMany(); // Delete all bookings
    res.status(200).json({
      success: true,
      message: "All bookings deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete all bookings",
      error: error.message,
    });
  }
});
router.post("/book", async (req, res) => {
  try {
    // Convert amount to a number
    const amount = Number(req.body.amount);

    const { busInfo, ...rest } = req.body;

    // Generate booking code
    const busNumberPlate = busInfo.numberPlate; // Assuming numberPlate is the field containing the bus number plate
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    const bookingCode = `${busNumberPlate}_${randomNum1}${randomNum2}${randomLetter}`;

    // Create a new booking with amountPaid and busDetails
    const booking = new Booking({
      busInfo,
      busDetails: busInfo._id,
      amountPaid: amount,
      paymentDate: new Date(),
      bookingCode: bookingCode,
      ...rest,
    });

    // Save the booking to the database
    const savedBooking = await booking.save();

    res.json(savedBooking);
  } catch (error) {
    console.error("Error booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
