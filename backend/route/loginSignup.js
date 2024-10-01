import express from 'express';

const loginSignupRouter = express.Router();

loginSignupRouter.post("/login",async(req,res)=>{
const {email,password}=req.body;
console.log("Email is ",email);
console.log("Password is ",password);
});

loginSignupRouter.post("/signup",async(req,res)=>{
const {email}=req.body;
console.log("Email is ",email);
// now here we generate a otp and then verify the otp after that we will further then we will save this email in our database.
});