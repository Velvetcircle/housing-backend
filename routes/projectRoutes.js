const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
} = require("../controllers/projectController");

const verifyToken = require("../middleware/auth");

// GET all projects (public)
router.get("/", getAllProjects);

// GET single project by ID (public)
router.get("/:id", getProjectById);

// POST create a new project (protected)
router.post("/", verifyToken, createProject);

module.exports = router;
