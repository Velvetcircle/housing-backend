const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  unitNumber: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
  },
  block: {
    type: String,
  },
  status: {
    type: String,
    enum: ["available", "tokened", "sold", "on hold"],
    default: "available",
  },
  buyerName: {
    type: String,
    default: "",
  },
  buyerContact: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
