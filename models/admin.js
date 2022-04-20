
const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({ 
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
const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin ;