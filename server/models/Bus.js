import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  id: Number,
  busNo: String,
  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route", // Reference to the Route model
  },
  to: String,
  currentLocation: String,
  distanceToCurrentLocation: Number,
  timeToCurrentLocation: Number,
  distanceToStage: Number,
  timeToStage: Number,
  capacity: Number,
  sacco: String,
  numberPlate: String,
});

const Bus = mongoose.model("Bus", busSchema);

export default Bus;
