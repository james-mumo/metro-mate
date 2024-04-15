import mongoose from "mongoose";

const minibusSchema = new mongoose.Schema({
  id: Number,
  name: String,
  capacity: Number,
});

const Minibus = mongoose.model("Minibus", minibusSchema);

export default Minibus;
