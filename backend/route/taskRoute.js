import express from "express";
import Task from "../models/task.js";

const router=express.Router();

router.get("/",async (req,res)=>{
    const tasks=await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
});

export default router;