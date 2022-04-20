const express = require("express"); 
const dotenv = require('dotenv'); 
const loginMiddleware = require('./middleware/loginMiddleware') 

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/firebase-auth";
const connectDB = require("./config/db");
const studentRoutes = require('./routes/studentRoutes')
const app = express();
const hostelRoutes= require('./routes/hostel'); 
const adminRoutes= require('./routes/adminRoutes')
const mongoose = require("mongoose");

const userRoutes= require('./routes/userRoutes');
const complaintRoutes= require('./routes/complaint');
const jsonwebtoken = require("jsonwebtoken");
const authRoutes=require('./routes/authRoutes');
 dotenv.config(); 
 connectDB();

app.use(express.json());
app.use('/api/student',studentRoutes);
app.use('/api/user',userRoutes);
app.use('/api/hostel',loginMiddleware,hostelRoutes); 
app.use('/api/auth',authRoutes); 
app.use('/api/admin',adminRoutes)
app.use('/api/complaint',complaintRoutes);
const PORT = process.env.PORT||5000;
app.listen(PORT , console.log("Server Running on Port 5000"));