import mongoose from "mongoose";


const taskScema= new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:String,default :"pending"},
    dueDate:{type:Date, required:true},
});

export default mongoose.model("Task", taskScema);

