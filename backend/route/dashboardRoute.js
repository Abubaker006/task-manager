import express from "express";
import dotenv from "dotenv";
import Workspace from "../models/workspaceSchema.js";
import User from "../models/userSchema.js";
import authenticateToken from "../middleware/authMiddleware.js";

dotenv.config();
const dashboardRouter = express.Router();
dashboardRouter.use(authenticateToken);

dashboardRouter.post("/create-workspace", async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Workspace name is required." });
  }

  try {
    const existingWorkspace = await Workspace.findOne({ name: name });

    if (existingWorkspace) {
      return res.status(400).json({ message: "Workspace already exists" });
    }

    const userId = req.user.userId;
    const newWorkspace = new Workspace({
      name: name,
      description: description,
      createdBy: userId,
    });

    await newWorkspace.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: { workspaces: newWorkspace._id },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(201).json({
      success: true,
      message: "Workspace created successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error." });
  }
});

dashboardRouter.post("/get-workspaces", async (req, res) => {
    try {
      const { userId } = req.body;
  
      if (!userId) {
        return res.status(400).json({ message: "User id is required." });
      }

      const checkUser = await User.findById(userId);
      if (!checkUser) {
        return res.status(404).json({ message: "User not found." });
      }
  
      const workspaces = await Workspace.find({ createdBy: userId });
  
      if (workspaces.length === 0) {
        return res.status(404).json({ message: "No workspaces found." });
      }

      return res.status(200).json({
        message: "Workspaces found",
        workspaces: workspaces,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error." });
    }
  });
export default dashboardRouter;
