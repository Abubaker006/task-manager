import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import User from "../models/userSchema.js";
import { hashValue, compareValue } from "../middleware/authService.js";
import { generateToken } from "../utils/jwt.js";

dotenv.config();

const authRouter = express.Router();

// Login Route
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await compareValue(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    user.tokens.push(token);
    await user.save();

    return res
      .status(200)
      .json({
        success: true,
        token: token,
        userId: user._id,
        message: "Login successful",
      });
  } catch (error) {
    console.error("Error during login", error);
    return res
      .status(500)
      .json({ success: false, message: "Error during login" });
  }
});

//Sign Up route
authRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await hashValue(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);

    newUser.tokens.push(token);
    await newUser.save();

    return res.status(200).json({
      success: true,
      token: token,
      userId: newUser._id,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error encountered in registering user", error);
    return res
      .status(500)
      .json({ success: false, message: "Error in registering user" });
  }
});

//sign out route
authRouter.post("/logout", async (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(400).json({ message: "Token missing" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { tokens: token },
      { $pull: { tokens: token } }
    );

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid token or user not found" });
    }

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
// reset password route
authRouter.post("/reset-password", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    res.status(400).json({ message: "All fields are required" });
  }
  if (password !== confirmPassword) {
    res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
     return res.status(400).json({ message: "User not found" });
    }

    const hashedPassword = await hashValue(password);

    if (!hashedPassword) {
      throw new Error("Internal Server Error");
    }

    const result = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    if (!result) {
     return res.status(400).json({ message: "Error updating password" });
    }
    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Facebook Login
authRouter.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

authRouter.get("/facebook/callback", (req, res, next) => {
  passport.authenticate(
    "facebook",
    { session: false },
    async (err, user, info) => {
      if (err || !user) {
        return res.redirect("http://localhost:3000/login?error=auth_failed");
      }

      const token = generateToken(user._id);
      user.tokens.push(token);
      await user.save();

      return res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    }
  )(req, res, next);
});

// Google Login
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get("/google/callback", (req, res, next) => {
  passport.authenticate(
    "google",
    { session: false },
    async (err, user, info) => {
      if (err || !user) {
        return res.redirect("http://localhost:3000/login?error=auth_failed");
      }
      const token = generateToken(user._id);

      user.tokens.push(token);
      await user.save();

      return res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    }
  )(req, res, next);
});

export default authRouter;
