// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routeRoutes from "./routes/routeRoutes.js";
import busRoutes from "./routes/busRoutes.js";
import bookingRouter from "./routes/bookingRouter.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mpesaRoutes from "./mpesa.js";
import ussdRouter from "./ussdRouter.js";
import trucksRouter from "./routes/truckRoutes.js";

dotenv.config();

// Create Express app
const app = express();
const port = 4000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to allow CORS
app.use(cors());

app.use(express.json());

// Import and use the router
app.use("/api/routes", routeRoutes);
app.use("/api/buses", busRoutes);
app.use("/api", bookingRouter);
app.use("/api/notifications", notificationRoutes);
app.use("/api/users", userRoutes);
app.use("/api", mpesaRoutes);
app.use("/api", ussdRouter);
app.use("/api/trucks", trucksRouter);

// MongoDB connection
const uri = `mongodb+srv://98kithome:98kithome@cluster0.ijx96ju.mongodb.net/metro_mate`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    // seedData();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error); // Log connection error
  });

// Define routes
app.get("/", (req, res) => {
  res.send({
    allBookings: "http://localhost:4000/api/bookings",
    deleteBookings: "http://localhost:4000/api/delete",
    allRoutes: "http://localhost:4000/api/routes/",
    allBuses: "http://localhost:4000/api/buses/",
    add_Buses: "http://localhost:4000/api/buses/add",
    delete_Buses: "http://localhost:4000/api/buses/delete",
    getNotifs: "http://localhost:4000/api/notifications",
    addNotifs: "http://localhost:4000/api/notifications/add",
    deleteAllNotifs: "http://localhost:4000/api/notifications/deleteAll",
    allTrucks: "http://localhost:4000/api/trucks",
  });
});
