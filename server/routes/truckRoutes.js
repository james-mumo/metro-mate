import express from "express";
import Truck from "../models/Trucks.js";
import TruckBooking from "../models/TruckBooking.js"; // Import TruckBooking model

import AfricasTalking from "africastalking";

const router = express.Router();

// Initialize AfricasTalking with your credentials
const credentials = {
  apiKey: "894aafd0ca327ca28cb32e6de7a8f07ecd5f0959ec5387b1df46bf93128872f9",
  username: "TheCoolestApp123",
};
const africasTalking = AfricasTalking(credentials);

// Initialize a service e.g. SMS
const sms = africasTalking.SMS;

// Route handler for getting all trucks
router.get("/", async (req, res) => {
  try {
    const allTrucks = await Truck.find({});
    res.json(allTrucks);
  } catch (error) {
    console.error("Error fetching trucks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route handler for creating a new truck booking
router.post("/bookings", async (req, res) => {
  try {
    // Extract data from request body
    const { truckId, startTime, endTime, customerName, customerEmail } =
      req.body;

    console.log(req.body);

    // Check if the truck exists
    const truck = await Truck.findById(truckId);
    if (!truck) {
      return res.status(404).json({ error: "Truck not found" });
    }

    // Create a new truck booking
    const newBooking = new TruckBooking({
      truck: truckId,
      startTime,
      endTime,
      customerName,
      customerEmail,
      // Add more fields as needed
    });

    // Save the new booking
    await newBooking.save();
    res.status(201).json(newBooking);
    // If STK push is successful, send SMS
    sendSMS(
      customerEmail,
      `Hello ${customerName}, you will be notified shortly on the vehicle request you made.  Thank you for choosing Us. You are awesome : )`
    );
  } catch (error) {
    console.error("Error creating truck booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route handler for getting all truck bookings
router.get("/bookings", async (req, res) => {
  try {
    const allBookings = await TruckBooking.find({});
    res.json(allBookings);
  } catch (error) {
    console.error("Error fetching truck bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function sendSMS(phoneNumber, message) {
  // Check if phone number starts with "+", if not, add it
  if (!phoneNumber.startsWith("+")) {
    phoneNumber = "+" + phoneNumber;
  }

  // Prepare options for sending SMS
  const options = {
    to: [phoneNumber], // Array of phone numbers
    message: message,
  };

  // Send message and capture the response or error
  sms
    .send(options)
    .then((response) => {
      console.log("SMS sent successfully:", response);
    })
    .catch((error) => {
      console.error("Failed to send SMS:", error);
    });
}

export default router;
