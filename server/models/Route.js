import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  stages: [
    {
      name: String,
      next: String,
      distance: Number,
      time: Number,
      fare: Number,
    },
  ],
});

const Route = mongoose.model("Route", routeSchema);

export default Route;
