const mongoose = require('mongoose');
const feesSchema = mongoose.Schema({ 
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
    submittedStudents:  [{studentId: {type: String, ref: 'Student'}}],
    createdBy:  {staffId: {type: String, ref: 'Staff'}}



}, {timestamps : true});
const Fees = mongoose.model("Student",feesSchema);
module.exports = Fees;