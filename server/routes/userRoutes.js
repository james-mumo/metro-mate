import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Route to get a specific user by firstName, lastName, _id, or email
router.get("/search", async (req, res) => {
  const { firstName, lastName, _id, email } = req.query;

  try {
    let user;

    if (firstName) {
      user = await User.findOne({ firstName });
    } else if (lastName) {
      user = await User.findOne({ lastName });
    } else if (_id) {
      user = await User.findById(_id);
    } else if (email) {
      user = await User.findOne({ email });
    } else {
      return res.status(400).json({ message: "Invalid search criteria" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Existing routes
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/", async (req, res) => {
  // Extract _id from the request body
  const { _id, ...userData } = req.body;

  // Create a new User object without the _id field
  const user = new User(userData);

  try {
    // Save the new user, MongoDB will generate a unique _id
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Implement other routes...

export default router;
