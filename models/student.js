const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({ 
    _id: String,
    name: {
        type : String ,
        required : true 


    }, 
    father_name: {
        type :String ,
     


    },
    mother_name: {
        type : String ,
      


    },
    address: {
        type : String ,
       


    }, 
    email: {
        type : String ,
       


    }, 

    phone: {
        type : Number ,
      


    },
    profileImage: {
        type : String,
     


    }, 
    roomNo :{
        type : String,
        default:"None"
    },
    hostelName :{
        type : String,
        default: "None"
    
    },
    isAllotted :{
        type : Boolean,
        default:false
    },
    dob:{
        type:Date,
        
    }






});




const Student = mongoose.model("Student",studentSchema);
module.exports = Student ;