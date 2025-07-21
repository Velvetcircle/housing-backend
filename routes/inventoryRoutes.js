const express = require("express");
const router = express.Router();
const {
  addUnit,
  getUnitsByProject,
  updateUnitStatus,
} = require("../controllers/inventoryController");

const verifyToken = require("../middleware/auth");

// POST add a new unit (protected)
router.post("/add-unit", verifyToken, addUnit);

// GET all units for a project (protected)
router.get("/:projectId", verifyToken, getUnitsByProject);

// PATCH update unit status (protected)
router.patch("/update/:unitId", verifyToken, updateUnitStatus);

module.exports = router;
