import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import env from "dotenv";
import Otp from "../models/otpSchema.js";
import { hashValue,compareValue } from "../config/authService.js";
env.config();

const otpRouter = express.Router();

const OTP_VALIDITY = 300;
const MAX_Attempts = 4;

const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

otpRouter.post("/request-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const checKEmail = await Otp.findOne({ email });

    if (checKEmail) {
      return res
        .status(212)
        .json({ message: "OTP already sent to this email" });
    }

    const generatedOtp = generateOtp();
    
    const otp=await hashValue(generatedOtp);


    const otpDocument = new Otp({
      email,
      otp,
      createdAt: new Date(),
    });

    await otpDocument.save();
    
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Taskify Verification Code",
      html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
              color: #333;
            }
            .container {
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #5a67d8;
            }
            p {
              font-size: 16px;
            }
            .otp {
              font-size: 24px;
              font-weight: bold;
              color: #e53e3e;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Taskify Verification Code</h1>
            <p>Your verification code for Taskify is <span class="otp">${generatedOtp}</span></p>
            <p>It is valid for 5 minutes.</p>
            <p><b>Thank you for using Taskify!</b></p>
          </div>
        </body>
      </html>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "Error in sending the email", error });
      }
      console.log(`OTP sent to ${email}: ${generatedOtp}`);
      return res.status(200).json({ message: "OTP sent successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

otpRouter.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const storedData = await Otp.findOne({ email });
    if (!storedData) {
      return res.status(400).json({ message: "Invalid OTP or email" });
    }

    const { otp: storedOtp, createdAt, attempts } = storedData;

    const hashedOtp = await compareValue(otp, storedOtp);

    if (hashedOtp) {
      const isExpired = Date.now() - createdAt > OTP_VALIDITY * 1000;
      if (!isExpired) {
        await Otp.deleteOne({ email });
        return res.status(200).json({ message: "OTP verified successfully" });
      } else {
        return res.status(404).json({ message: "OTP expired" });
      }
    } else {
      const newAttempts = attempts + 1;
      if (newAttempts === MAX_Attempts) {
        await Otp.deleteOne({ email });
        return res
          .status(401)
          .json({
            message: "Max Attempts reached. Please request for a new OTP",
          });
      } else {
        await Otp.updateOne({ email }, { attempts: newAttempts });
        return res.status(210).json({ message: "Invalid OTP" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default otpRouter;
