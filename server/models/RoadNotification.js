import mongoose from "mongoose";

const roadNotificationSchema = new mongoose.Schema({
  notification: String,
  selectedRoute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route", // Assuming your Route model is named "Route"
  },
  selectedStages: [String],
  time: String,
  date: String,
  selectedWeather: String,
});

const RoadNotification = mongoose.model(
  "RoadNotification",
  roadNotificationSchema
);

export default RoadNotification;
