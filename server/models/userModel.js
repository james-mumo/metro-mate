import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
  defaultRoute: String,
  home: String,
  work: String,
  favoriteRoutes: [String],
  favoSacco: [String],
});

const User = mongoose.model("User", userSchema);

export default User;
