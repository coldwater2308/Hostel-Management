// const Tutor = require('../Models/Tutor');
const mongoose  = require('mongoose');

const Staff = require('../models/staff');
exports.getStaffs= async(req,res, next)=>{

try { 
    const Staffs = await Staff.find();
    if(Staffs)
        return res.status(200).json({
            message:"Success",
            data:Staffs,
        })
    
} catch (error) {
    return res.status(404).json(error);
}





} 
exports.getStaff=async(req,res,next)=>{
    const StaffId= req.params.userId.toString();
    try {
        const Staff= await Staff.findById(StaffId) 
        if(Staff)
        res.status(200).json({
            message:"Success",
            data :Staff
        })
    } catch (error) {
        return res.status(404).json({
            message:"Not Found",
            data :{}
        })
    }
}





exports.updateStaff=async(req,res,next)=>{

    const {name,fname,mname,addr,email,phone,url_img,} = req.body; 
    const id = req.params.id.toString();
    
    try { 
    
    
        const result=await  Staff.findOneAndUpdate({_id : id}, {
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
    


    exports.checkStaff=async(req,res,next)=>{
        const email=req.params.email.toString();
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

    

    



