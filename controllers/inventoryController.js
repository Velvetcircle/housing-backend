const Inventory = require("../models/Inventory");

exports.addUnit = async (req, res) => {
  try {
    const { projectId, unitNumber, floor, block, status, buyerName, buyerContact } = req.body;

    const newUnit = new Inventory({
      projectId,
      unitNumber,
      floor,
      block,
      status,
      buyerName,
      buyerContact,
    });

    await newUnit.save();
    res.status(201).json(newUnit);
  } catch (err) {
    res.status(500).json({ message: "Failed to add unit", error: err.message });
  }
};

exports.getUnitsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const units = await Inventory.find({ projectId });
    res.json(units);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch inventory", error: err.message });
  }
};

exports.updateUnitStatus = async (req, res) => {
  try {
    const { unitId } = req.params;
    const { status, buyerName, buyerContact } = req.body;

    const updatedUnit = await Inventory.findByIdAndUpdate(
      unitId,
      { status, buyerName, buyerContact },
      { new: true }
    );

    if (!updatedUnit) return res.status(404).json({ message: "Unit not found" });

    res.json(updatedUnit);
  } catch (err) {
    res.status(500).json({ message: "Error updating unit", error: err.message });
  }
};
