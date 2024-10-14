import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed", "Blocked"],
      default: "To Do",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    dueDate: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    attachements: [
      {
        fileUrl: {
          type: String,
        },
        uploadedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        uploadtedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);
export default Tasks;
