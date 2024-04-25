// Import necessary modules
import mongoose from "mongoose";

// Define schema
const truckSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  numberPlate: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  pricePerHirePerHour: {
    type: Number,
    required: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  yearMade: {
    type: Number,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
  },
});

// Create model
const Truck = mongoose.model("Truck", truckSchema);

// Export model
export default Truck;
