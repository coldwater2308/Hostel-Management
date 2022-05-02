const  mongoose  = require("mongoose");
const Leave = require("../models/leave");


exports.getLeaves= async(req,res,next)=>{

try { 

   const leaves = await Leave.find();
   if(leaves){ 
       return res.status(200).json({
           message : "Success",
           data: leaves
       });
   } 
   else 
   return res.status(203).json({
       message:"No Data",
       data :{}
   })


    
} catch (error) {
    console.log(error);
}



}



exports.getMyLeaves= async(req,res,next)=>{
const username = req.params.username.toString();

    try { 
    
       const leaves = await Leave.find({username:username});
       if(leaves){
           return res.status(200).json({
               message : "Success",
               data: leaves
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




            
exports.createLeave= async(req,res,next)=>{
    
    const userId = req.body.userId.toString();
    const title = req.body.title.toString();
    const reason = req.body.reason.toString();
    const type = req.body.type.toString();

    
        try { 
        
           const leave = await Leave.create({

            type : type,  
            userId: userId,
            title:title,
            reason:reason,
 






           })
           if(leave){
               return res.status(200).json({
                   message : "Success",
                  
               });
           } 

        
            
        } catch (error) {
            console.log(error); 
            return res.status(203).json({
                message:"Failed"
            })
        }
        
        
        
        }


                   
exports.updateLeave= async(req,res,next)=>{
    const leaveId = req.params.leaveId.toString();
    const userId = req.body.userId.toString();
    const title = req.body.title.toString();
    const reason = req.body.reason.toString();
    const type = req.body.type.toString();
    const out_time = Date(req.body.out_time.toString())
    const in_time = Date(req.body.in_time.toString())
    
        try { 
        
           const leave = await Leave.findByIdAndUpdate(leaveId ,{
                userId: userId,
                title:title,
                reason:reason,
                type:type,
                out_time:out_time,
                in_time:in_time



           })
           if(leave){
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


        exports.deleteComplaint= async(req,res,next)=>{
            const leaveId = req.params.leaveId.toString();
         
                try { 
                
                   const del = await Leave.findByIdAndDelete(leaveId)
                   if(del){
                       return res.status(200).json({
                           message : "Success",
                           
                       });
                   } 
  
                
                
                    
                } catch (error) { 
                    return res.status(203).json({
                        message:"Failed"
                    })
                    console.log(error);
                }
                
                
                
                }  
exports.patchMarkStatus= async(req,res,next)=>{
    const leaveId= req.params.leaveId.toString();
    const status=req.body.status.toString();
    try { 
        const status = await Leave.findByIdAndUpdate(leaveId,{
            status: status
        })
        
    } catch (error) {
        return res.status(203).json({
            message : "Failed"
        })
    }
}