const mongoose= require("mongoose");
const complainSchema= mongoose.Schema({ 
        userId:{
            type:String,
            requird : true
        },

        type :{
            type : String,
            required : true
        }, 
        title: {
            type: String,
            required : true
        },
        complainBody:{

            type:String,
            required:true
        },
        imagePath :String




} ,{timestamps : true}); 
const Complaints = mongoose.model("Complaints",complainSchema);
module.exports= Complaints;