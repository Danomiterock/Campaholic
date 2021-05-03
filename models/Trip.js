const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  start_date: {
      type: Date,
      default: Date.now
  },
  length: {
      type: Number,
  },
  location: {
      type: String,
  },
  description: {
      type: String,
  },
  activities: [],
  images: [],
  
});

const Trip = mongoose.model("trip", TripSchema);

module.exports = Trip;
