import mongoose from "mongoose";

const { Schema } = mongoose;

// Define schema for truck booking
const truckBookingSchema = new Schema({
  truck: {
    type: Schema.Types.ObjectId,
    ref: "Truck", // Reference to the Truck model
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

// Create model for truck booking
const TruckBooking = mongoose.model("TruckBooking", truckBookingSchema);

export default TruckBooking;
