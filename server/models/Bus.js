import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  id: Number,
  busNo: String,
  routeId: Number,
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
