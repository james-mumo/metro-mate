import express from "express";
import mongoose from "mongoose";
import Bus from "../models/Bus.js";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { amount, busInfo, ...rest } = req.body;

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

    // Middleware to update capacity when a booking is made
    const bus = await Bus.findById(busInfo._id);
    if (bus) {
      bus.capacity -= 1;
      await bus.save();
    }

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

export default router;
