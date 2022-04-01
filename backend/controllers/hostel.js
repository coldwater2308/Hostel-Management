const expressAsyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const { findOne } = require('../models/hostel');

const Hostels = require('../models/hostel');
 

exports.updateHostel= async(req,res,next)=>{
const id = req.params.hostelId.toString(); 
const floors=req.body.floors;
try {
    const hostel = await Hostels.findByIdAndUpdate(id,{
        noOfFloors:floors
    });
    if(hostel)
    res.status(200).json({
        message:"Success",
        data : data
    }) 
    else 
    res.status(200).json({
        message:"Error"
    })
    
} catch (error) {
    console.log(error)
}





}

exports.getHostel=async(req,res,next)=>{
const hostelName=req.params.hostelName;
try {
     
    const hostel= await Hostels.find({name :hostelName});
    if(hostel){

            res.status(200).json({
                message : "Success",
                data: hostel
            })

    } 

} catch (error) { 
    console.log(error);
    return res.status(200).json({
        message:"Error occurres"
    })
}
    



}







// exports.getRoom = async(req,res,next)=>{


// const studentId=req.params.studentId;



// try {
//      const hostel = await Hostels.findOne({
//         rooms : {
//             $elemMatch: {
//                 students : { $elemMatch :{
//                     _id : studentId
//                 } 
//             }
//             }
//         }
    
    
    
//     }, {  
//         rooms : {
//             $elemMatch: {
//                 students : { $elemMatch :{
//                     _id : studentId
//                 } 
//             }
//             }
//         } ,
//         name : 1 ,
//         _id:0
        
//     }   );
//      if(hostel){

//         return   res.status(200).json({
//             message:"Success",
//             data: hostel


//         })


//      } 
//      else {
//         return   res.status(200).json({
//             message:"Not Found",
            
    
    
//         })
//      }

// } catch (error) {
//     return   res.status(200).json({
//         message:"Not Found",
        


//     })
// }



// }







exports.getAllHostels = async(req,res,next)=>{

   try { 
       const result= await Hostels.find( {},{name :1});
       if(result)
     return   res.status(200).json({
           message:"Success",
           data: result
       })
       
   } catch (error) {
      return  res.status(200).json({
           message:"Error Occurred "
       })
   }




} 
exports.createHostel= async(req,res,next)=>{

const {hostelName,f,r}= req.body;
try {
    const hostel = await Hostels.create({
        name : hostelName,
        roomPerFloor : r,
        noOfFloors:f,
        type : "Single",
        gender:"Boys"
    });
    if(hostel)
    res.status(200).json({
        message:"Success",
        data:hostel
    }) 
    else 
    res.status(200).json({
        message:"Error Occurred"
    })
} catch (error) {
    console.log(error)
}



}




















