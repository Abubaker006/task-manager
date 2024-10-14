import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import otpRouter from "./route/otpRoute.js";
import authRouter from "./route/authRoutes.js";
import dashboardRouter from "./route/dashboardRoute.js";
import connectDB from "./config/db.js";
import authenticateToken from "./middleware/authMiddleware.js";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./config/passportConfig.js";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httponly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);

app.use(passport.initialize());

app.use("/otp", otpRouter);
app.use("/auth", authRouter);
app.use("/dashboard", authenticateToken, dashboardRouter);

app.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({
    message: "This is a protected route, accessible only with a valid token.",
  });
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
