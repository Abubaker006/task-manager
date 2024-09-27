import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import router from './route/taskRoute.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=> console.log('Connected to MongoDB Database')).catch((err)=> console.log(err));

app.use
// Use Routes
app.use('/api/tasks', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     