const Project = require("../models/Project");
const fs = require("fs");
const path = require("path");

exports.createProject = async (req, res) => {
  try {
    const { name, type, possessionDate, status, amenities } = req.body;

    const newProject = new Project({
      name,
      type,
      possessionDate,
      status,
      amenities,
    });

    await newProject.save();

    // Create folder under /uploads for this project
    const folderPath = path.join(__dirname, "..", "uploads", newProject._id.toString());
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: "Failed to create project", error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Error fetching project" });
  }
};
