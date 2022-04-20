const  mongoose  = require("mongoose");
const Complaints = require("../models/complaints");

exports.getComplaints= async(req,res,next)=>{

try { 

   const complaints = await Complaints.find();
   if(complaints){ 
       return res.status(200).json({
           message : "Success",
           data: complaints
       });
   } 
   else 
   return res.status(203).json({
       message:"No Data"
   })


    
} catch (error) {
    console.log(error);
}



}



exports.getComplaint= async(req,res,next)=>{
const complaintId = req.params.complaintId.toString();

    try { 
    
       const complaint = await Complaints.findById(complaintId);
       if(complaint){
           return res.status(400).json({
               message : "Success",
               data: complaint
           });
       } 
       else 
       return res.status(203).json({
           message:"No Data"
       })
    
    
        
    } catch (error) {
        console.log(error);
    }
    
    
    
    }



    
exports.getUserComplaints= async(req,res,next)=>{
    const userId = req.params.userId.toString();
 
        try { 
        
           const complaints = await Complaints.find({userId:userId})
           if(complaints){
               return res.status(400).json({
                   message : "Success",
                   data: complaints
               });
           } 
           else 
           return res.status(203).json({
               message:"No Data"
           })
        
        
            
        } catch (error) {
            console.log(error);
        }
        
        
        
        } 


            
exports.createComplaint= async(req,res,next)=>{
    const type = req.body.type.toString();
   
    const userId = req.body.userId.toString();
    const title = req.body.title.toString();
    const body = req.body.body.toString();
    
        try { 
        
           const complaint = await Complaints.create({

            type : type,  
            userId: userId,
            title:title,
            complainBody:body,
           






           })
           if(complaint){
               return res.status(200).json({
                   message : "Success",
                  
               });
           } 
           else 
           return res.status(203).json({
               message:"No Data"
           })
        
        
            
        } catch (error) {
            console.log(error);
        }
        
        
        
        }


                   
exports.updateComplaint= async(req,res,next)=>{
    const complaintId = req.params.complaintId.toString();
    const userId = req.body.userId.toString();
    const title = req.body.title.toString();
    const body = req.body.body.toString();
    const type = req.body.type.toString();
    
        try { 
        
           const complaints = await Complaints.findByIdAndUpdate(complaintId ,{
                userId: userId,
                title:title,
                complainBody:body,
                type:type




           })
           if(complaints){
               return res.status(400).json({
                   message : "Success",
                   data: complaints
               });
           } 
           else 
           return res.status(203).json({
               message:"No Data"
           })
        
        
            
        } catch (error) {
            console.log(error);
        }
        
        
        
        } 


        exports.deleteComplaint= async(req,res,next)=>{
            const complaintId = req.params.id.toString();
         
                try { 
                
                   const complaints = await Complaints.findByIdAndDelete(complaintId)
                   if(complaints){
                       return res.status(400).json({
                           message : "Success",
                           
                       });
                   } 
                   else 
                   return res.status(203).json({
                       message:"No Data"
                   })
                
                
                    
                } catch (error) {
                    console.log(error);
                }
                
                
                
                }  
        exports.upvote= async(req,res,next)=>{

            const id = req.body.id.toString();
            const studentId= req.body.studentId.toString();
            try { 
                const complaint = await Complaints.findByIdAndUpdate(id , {
                     $addToSet : {upvotes :{studentId : studentId}} 
                })
                
            } catch (error) {
                
            }



        }
