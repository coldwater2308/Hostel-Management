// const Tutor = require('../Models/Tutor');
const mongoose  = require('mongoose');

const User = require('../models/user');
exports.getStudent= async(req,res, next)=>{
const id = req.params.id.toString();
try { 
    const student = await User.findOne({userType: "student",_id:id});
    if(student)
        res.status(200).json({
            message:"Success",
            data:student,
        })
    
} catch (error) {
    res.status(404).json(error);
}





}
exports.getStudents= async(req,res,next)=>{
try { 
    const students= await User.find({userType: "student"});
    if(students) 
    console.log(students);
        return res.status(200).json({ 
            message: "Success",
            data : students
        })
    
} catch (error) {
    res.status(200).json(error);
}




}




exports.updateStudent=async(req,res,next)=>{

    const {name,fname,mname,addr,email,phone,url_img,} = req.body; 
    const id = req.params.id.toString();
    
    try { 
    
    
        const result= User.findOneAndUpdate({_id : id}, {
            name: name ,
            father_name : fname,
            mother_name : mname,
            address : addr,
            email : email,
            phone: phone,
            image : url_img

        });

    if(result)
        res.status(200).json({
            message:"Success" ,
            data : result
        }); 
    else 
        res.status(200).json({
            message:"Failed"
        })
    
        
    } catch (error) {
        res.status(200).json(error);
    }
    
    }
    



    exports.allotStudent= async(req,res,next)=>{
        const {hostelName,studentId,roomNo} =req.body;
        try {
            const allot = await Student.findByIdAndUpdate(studentId, {
        
                hostelName : hostelName ,
                roomNo : roomNo,
                isAllotted : true
            
            
               });
               if(allot)
               res.status(200).json({
                   message: "Success",
                   data:allot
               }) 
               else 
               res.status(200).json({
                   message:"Error Occurred"
               })
            
        } catch (error) {
            console.log(error);
        }
        
        
        
        
        
        
        }
        



