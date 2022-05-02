const express = require("express"); 
const dotenv = require('dotenv'); 
const loginMiddleware = require('./middleware/loginMiddleware') 

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/firebase-auth";
const connectDB = require("./config/db");

const app = express();
const hostelRoutes= require('./routes/hostel'); 
const adminRoutes= require('./routes/adminRoutes')
const leaveRoutes= require('./routes/leave')
const studentRoutes= require('./routes/studentRoutes')
const staffRoutes= require('./routes/staff')
const mongoose = require("mongoose");

const userRoutes= require('./routes/userRoutes');
const complaintRoutes= require('./routes/complaint');
const jsonwebtoken = require("jsonwebtoken");
const authRoutes=require('./routes/authRoutes');
 dotenv.config(); 
 connectDB();

app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/hostel',loginMiddleware,hostelRoutes); 
app.use('/api/auth',authRoutes); 
app.use('/api/admin',adminRoutes)
app.use('/api/complaint',complaintRoutes);
app.use('/api/leave',leaveRoutes);
app.use('/api/staff',staffRoutes);
app.use('/api/student',studentRoutes);
const PORT = process.env.PORT||5000;
app.listen(PORT , console.log("Server Running on Port 5000"));