const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["residential", "commercial"],
    required: true,
  },
  possessionDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["ongoing", "ready to move"],
    default: "ongoing",
  },
  amenities: {
    type: [String], // Example: ["Swimming Pool", "Club House", "Parking"]
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
