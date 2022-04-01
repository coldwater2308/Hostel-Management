const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hostelSchema = mongoose.Schema({
    
    name: {
        type : String ,
        required : true 


    },
 
    noOfFloors :{ 
      type : Number,
      required:true
    },
    roomPerFloor : {
      type:Number,
      required:true
    },
    type:{
      type : String,
      required : true
    },
    gender:{
      type:String,
      required: true
    }

    



});
const Hostels = mongoose.model("Hostel",hostelSchema);
module.exports = Hostels ;