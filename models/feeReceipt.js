const mongoose = require('mongoose');
const feeDetailsSchema = mongoose.Schema({ 
    type: {
        type : String ,
        required : true 
    },
    fees: {
        type : Number ,
        required : true 
    },
    file: {
        type : String ,
        required : true 
    },
    sem: {
        type : String ,
        required : true 
    }, 
    
    studentId:  {studentId: {type: String, ref: 'student'}},
    status: {
        type : String 
    
    }



}, {timestamps : true});
const FeeDetails = mongoose.model("Student",feeDetailsSchema);
module.exports = FeeDetails;