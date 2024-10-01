import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import router from './route/taskRoute.js';
import otpRouter from './route/otpRoute.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI).then(()=> console.log('Connected to MongoDB Database')).catch((err)=> console.log(err));


app.use("/api",otpRouter);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     