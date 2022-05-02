// const Tutor = require('../Models/Tutor');
const mongoose  = require('mongoose');

const Student = require('../models/student');
exports.getStudents= async(req,res, next)=>{

try { 
    const students = await Student.find();
    if(students)
        return res.status(200).json({
            message:"Success",
            data:students,
        })
    
} catch (error) {
    return res.status(404).json(error);
}





} 
exports.getStudent=async(req,res,next)=>{
    const studentId= req.params.id.toString();
    try {
        const student= await Student.findById(studentId) 
        if(student)
        res.status(200).json({
            message:"Success",
            data :student
        })
    } catch (error) {
        return res.status(404).json({
            message:"Not Found",
            data :{}
        })
    }
}





exports.updateStudent=async(req,res,next)=>{

    const {name,fname,mname,addr,email,phone,url_img,} = req.body; 
    const id = req.params.id.toString();
    
    try { 
    
    
        const result=await  Student.findOneAndUpdate({_id : id}, {
            name: name ,
            father_name : fname,
            mother_name : mname,
            address : addr,
            email : email,
            phone: phone,
            image : url_img

        });

    if(result)
        return res.status(200).json({
            message:"Success" ,
            data : result
        }); 
    else 
        return res.status(200).json({
            message:"Failed"
        })
    
        
    } catch (error) {
        return res.status(200).json(error);
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
               return res.status(200).json({
                   message: "Success",
                   data:allot
               }) 
               else 
               return res.status(200).json({
                   message:"Error Occurred"
               })
            
        } catch (error) { 

            console.log(error);
        }
        
        
        
        
        
        
        } 

        exports.checkStudent=async(req,res,next)=>{
            const email=req.params.emaail.toString();
            try {
                
                const check= await Student.findOne({email:email});
                if(check)
                return res.status(200).json({
                    message:"Found"
                }) 
                else 
                return res.status(203).json({
                    message:"Not Found"
                })
            } catch (error) {
                return res.status(203).json({
                    message:"Failed"
                })
            }
        }

        

        



