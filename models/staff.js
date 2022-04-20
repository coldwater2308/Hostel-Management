const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const staffSchema = mongoose.Schema({ 
    _id: String,
    name: {
        type : String ,
        required : true 


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
    dob:{
        type:Date,

    }
   

});



const Staff = mongoose.model("Staff",staffSchema);
module.exports = Staff ;