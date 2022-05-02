const mongoose= require("mongoose");
const leaveSchema= mongoose.Schema({ 
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
        reason:{

            type:String,
            required:true
        },  

        status:{
            type:String,
            default : "Pending"
        }
        




} ,{timestamps : true}); 
const Leave = mongoose.model("Leave",leaveSchema);
module.exports= Leave;