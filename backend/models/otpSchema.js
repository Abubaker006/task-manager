import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: "5m", 
    default: Date.now,
  },
  attempts:{
    type: Number,
    default:0
  }
});


const Otp = mongoose.model("Otp", otpSchema);

export default Otp;
